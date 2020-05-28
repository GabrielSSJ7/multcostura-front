import React, { useEffect, useState } from 'react'

import setApi from '../src/api'
import styled from 'styled-components'
import { Row, Column } from '../src/static/styled-components/base'
import { useRouter } from 'next/router'
import Template from '../src/components/templates/Web'
import Section1 from '../src/components/web/produto/Section1'
import Section2 from '../src/components/web/produto/Section2'
import SlideSmall from '../src/components/web/SlideSmall'

import loading from '../src/static/images/loading.gif'

import leftArrow from '../src/static/images/seta_banner_esquerda.svg'
import rightArrow from '../src/static/images/Icon_seta_banner.svg'

export default function Produto ({ id }) {
  const Router = useRouter()
  const [prod, setProd] = useState({ category: {}, specifications: null, images: [] })
  const [visLoading, setVisLoading] = useState(false)
  const [specifications, setSpec] = useState([])
  useEffect(() => {
    if (prod.specifications){ 
      const specArrayKeys = Object.keys(prod.specifications);
      const specArray = []
      for (let specKey in specArrayKeys) {
        if (prod.specifications[specArrayKeys[specKey]]) {
          switch (specArrayKeys[specKey]) {
            case `alturaCalcador`:
              specArray.push(`altura do calçador: ${prod.specifications[specArrayKeys[specKey]]}`)
              break
            case 'numeroDeAgulhas':
              specArray.push(`número de agulhas: ${prod.specifications[specArrayKeys[specKey]]}`)
              break
                    
            case 'velocidadeMaxima':
              specArray.push(`velocidade máxima: ${prod.specifications[specArrayKeys[specKey]]}`)
              break

            default:
              specArray.push(`${specArrayKeys[specKey].replace(/([A-Z])/g, ' $1').trim().toLowerCase()}: ${prod.specifications[specArrayKeys[specKey]]}`)
              break
          }
      }
    }

    setSpec(specArray)
    }
  }, [prod])



  useEffect(() => {
    async function f() {
      setVisLoading(true)
      
      setApi()
        .get(`/machine/${id}`)
        .then(response => {
          console.log("machine => ",response.data)
          setProd(response.data)
          setVisLoading(false)
        })
        .catch(err => {
          setApi()
            .get(`/tools/${id}`)
            .then(response => {
                  console.log("tools",response.data)
                  setProd({...response.data, category: {}})
                  setVisLoading(false)
            })
            .catch(err => {
                  setVisLoading(false)
            })
        })
    }
    f();
  }, [])


  function navigate(route) {
    Router.push(route)
  }
return (
  <Template>
    {visLoading ? 
     <Row style={{ width: "100%" }} jc="center" ait="center"><img src={loading} style={{ width: "32px", height: "32px" }} /></Row> :
     <Column style={{ width: "100%", paddingBottom: "55px" }}>
       <HistoryBar 
        style={{
          width: "100%", 
          background:"#F1F1F1", 
          display:"flex", 
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15px"
        }}>
        <Link onClick={() => navigate("/")}>home</Link>
        >
        <Link 
          onClick={() => 
            navigate("/produtos?type=categories&id="+prod.category._id)} 
        >
          Máquinas
        </Link>
        >
        <Link 
          onClick={() => 
            navigate("/produtos?type=categories&id="+prod.category._id)}  
        >
          {prod.category ? prod.category.name : ''}
        </Link>
        >
        <Link>modelo {prod.description}</Link>
      </HistoryBar>
       <Section1 prod={prod} />
       <Row>
                    
        <Column 
          style={{ 
            maxWidth: "1000px", 
            margin: "auto",
            width: "80%"
          }}>
            <div style={{ maxWidth: "130px"}}>
              <h4 style={{
                backgroundColor: "#81161B",
                padding: "10px 15px",
                textTransform: "uppercase",
                color: "white",
                fontFamily: "arial"
              }}>
                Descrição
              </h4>
            </div>
            <Column style={{ flexWrap: 'wrap'}} >
              <ul 
                style={{ padding: "0 15px" }}>
                  {specifications.map(spec => ( 
                    <Text style={{textAlign: "left", fontSize: "14px",marginBottom: "10px", fontFamily:"sans-serif" }}>
                    {spec}
                    </Text>
                  )
                  )}
              </ul>
            </Column>
          </Column>
        </Row>

        <Column >
          <div style={{ maxWidth: "1000px", margin: "auto", width: "90%" }} >
            <h3 style={{ 
              color: "#5B5B5B", 
              borderBottom: "1px solid #81161B", 
              maxWidth: "180px" }}
            >
              Mesma categoria
            </h3>
          </div>
          <div style={{ maxWidth: "1030px", margin: "auto", width: "90%" }} >
            <SameCategory id={prod.category ? prod.category._id : ''} />
          </div>
        </Column>
         </Column>
      }
  </Template>
  )
}


function SameCategory ({ id }) {
  const router = useRouter()
  const [products, setProducts] = useState([])
  const [components, setComponents] = useState([])

  useEffect(() => {
    console.log("components => ", components)
  }, [components])

  useEffect(() => {
    async function doSomething() {
      try {
        const machines = 
          await setApi().get(`/machine?categories=${id}`)
        const screenW = window.innerWidth
        const _components = []
        for (let i = 0; i <= 5; i++) {
          const prod = machines.data[i] 
          if (prod) {
          _components.push(
            <Column 
              key={prod.id}
              style={{ 
                width: `${(screenW - ((screenW / 100) * 20)) / 3 - 40}px`,
                cursor: "pointer", 
                margin: "15px",
                border: "1px solid #DFDFDF",
                marginBottom: "15px",
                minWidth: "270px"
              }} 
              className="media-p"
              onClick={() => window.location.href = "/produto?id=" + prod.id } 
              ait="center"
            >
            <Img 
              src={prod.images.length > 0 ?
                prod.images[0] : ''} 
              width="100%" 
              height="280px" 
            />
            <div 
              style={{ 
                background: "#EEEEEE", 
                padding: "3px 10px", 
                maxWidth: "85%", 
                marginTop: "10px", 
                width: "85%" 
              }}>
            <Name>{prod.name}</Name>
            </div>

            <p 
              style={{ 
                maxWidth: "80%", 
                fontFamily: "arial", 
                lineHeight: "25px", 
                minHeight: "90px" 
              }}
            >
              {prod.mainFeatures.length > 40 ? 
                prod.mainFeatures.substr(0, 100) + "..." : 
                prod.mainFeatures
              }
            </p>
            <Line />

            <RedButton>Ver mais</RedButton>                
            </Column>
          )
          }
        }
        setComponents(_components)
      } catch (e) {
        console.log("e >> ", e)
      } 
    }
    doSomething()
  }, [])
  const [slideCtrl, setSlideCtrl] = useState(1)
  const next = () => {
    if (slideCtrl >= components.length)
      return setSlideCtrl(1)
    setSlideCtrl(slideCtrl + 1)
  }
  const prev = () => {
    if (slideCtrl <= 1)
      return setSlideCtrl(1)
    setSlideCtrl(slideCtrl - 1)
  }
  return (
    <div style={{ position: "relative" }}>
      <SlideSmall 
        images={components} 
        customContent
        slideCtrl={slideCtrl}
        height="auto"
       slideClass="mesma-categoria"
      />
      <Arrow 
        onClick={prev}
        src={leftArrow}
        style={{
          top: "50%",
          left: "-40px"
        }}  
      />
      <Arrow 
        onClick={next}
        src={rightArrow}
        style={{
          top: "50%",
          right: "-35px"
        }}
      />
    </div>
  )
}



const Link = styled.p`
  margin: 10px;
  text-transform: uppercase;
  cursor: pointer;
  transition: .2s;
  :hover {
    opacity: .8;
  }
`

const Arrow = styled.img`
  position: absolute;
  cursor: pointer;
  transition: .2s;
  :hover {
    opacity: .6;
  }
`
const Text = styled.li`
  text-align: left;
  /*font: Regular 18px/24px Segoe UI;*/
  font-size: 18px;
  letter-spacing: 0;
  color: #5B5B5B;
  opacity: 1;
`
const Img = styled.div`
	background-image: url('${props => props.src}');
	// background-size: cover;
	background-size: 80%;
	background-position: center;
	background-repeat: no-repeat;
	width: ${props => props.width};
	height: ${props => props.height};
	transform: translateX(${props => props.translate}px);
	transition: transform 0.2s ease-in-out;

	position: relative;
	:hover {
		transform: scale(1.1); -webkit-transform: scale(1.1);
	}
`;

const Name = styled.p`
	text-align: center;
	font-family: Segoe UI;
	letter-spacing: 0;
	color: #000000;
	opacity: 1;
`

const Line = styled.div`
  background: #AAAAAA;
  width: 85%;
  height: 1px;
  margin-top: 5px;
  margin-bottom: 25px;
`
const RedButton = styled.div`
  border: none;
  background: #81161B;
  color: white;
  height: 37px;
  width: 123px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin-bottom: 15px;
  transition: .2s;
  :hover {
    opacity: .8;
  }
`
const HistoryBar = styled.div`
  @media (max-width: 500px) {
    p {
      font-size: 80%;
    }    
  }
`

Produto.getInitialProps = ({ query }) => {
	return { id: query.id }
}
