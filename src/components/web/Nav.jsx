import React, { useState, useEffect, useLayoutEffect } from 'react'
import styled from 'styled-components'

import setApi from '../../api'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUsers, 
  faList, 
  faSearch, 
  faHome, 
  faBuilding, 
  faHeadset, 
  faNewspaper, 
  faArrowLeft, 
  faIndustry, 
  faPhone, 
  faEnvelope, 
  faDollarSign 
} from '@fortawesome/free-solid-svg-icons'

import logoMaior from '../../static/images/logo-multcostura--horizontal.png'
import iconMachine from '../../static/images/maquina-icon.png'
import iconTool from '../../static/images/peca-icon.png'
import iconFab from '../../static/images/fab-icon.png'
import iconWhatsapp from '../../static/images/whatsapp.png'

import arrowUp from '../../static/images/arrow-up.png'
import arrowDown from '../../static/images/arrow-down.png'
import logo from '../../static/images/logo-multcostura-(oficial).png'
import whatsapp from '../../static/images/whatsapp.png'
import dollar from '../../static/images/dollar.svg'
import phone from '../../static/images/phone-icon.svg'
import email from '../../static/images/email-icon.svg'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Nav () {
  const [categories, setCategories] = useState([])
  const [manufacturers, setManufacturers] = useState([])
  const [hideDropMenu, setHideDropMenu] = useState(false);
  const [hideManufMenu, setHideManufMenu] = useState(false);
  const [translate, setTranslate] = useState(0)
  const [highDolar, setHighDolar] = useState(0)
  const [pctChange, setPctChange] = useState(false)
  const [search, setSearch] = useState('')
  const Router = useRouter()
  
  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setTranslate(window.innerWidth)
    });
  });

  useEffect(() => {
    setTranslate(window.innerWidth)
    async function async() {
    setApi()
    .get('/categories')
    .then(response => {
          setCategories(response.data)
    })
    .catch(err => {

    })

    setApi()
    .get('/manufacturer')
    .then(response => {
          setManufacturers(response.data)
    })
    .catch(err => {

    })

    setApi()
      .get("https://economia.awesomeapi.com.br/all/USD-BRL")
      .then(response => {
              setHighDolar(parseFloat(response.data.USD.high).toFixed(2))
              setPctChange(parseFloat(response.data.USB.pctChange) > 0)
      })
      .catch(err => {
      })
    }
  async();
  }, [])

  return (
    translate < 890 ?
    <NavSm 
      props={{ 
        hideDropMenu, 
        hideManufMenu, 
        setHideManufMenu,
        setHideDropMenu, 
        categories, 
        manufacturers, 
        highDolar, 
        pctChange
      }} 
    /> :
    <Column>
     <Column style={{ alignItems: "center", backgroundColor: "#1a6092" }}>
      {/* barra azul contato */}
      <Row style={{ 
        maxWidth: "300px", 
        alignItems: "center", 
        justifyContent: "center", 
      }}>
        {/*<FontAwesomeIcon icon={faEnvelope} style={{ 
          color: "white", 
          marginRight: "15px",
          fontWeight: "bold"
        }}/>*/}
        <img src={email} style={{ marginRight: "15px" }} />
        <p 
          style={{ 
            color: "white",
            marginBottom: "5px",
            marginTop: "8px"
          }}>
          contato@multcostura.com.br
        </p>
      </Row> 
      {/* ================== */}
      {/* barra com busca */}
      <Row style={{ 
        justifyContent: "center", 
        paddingTop: "10px", 
        paddingBottom: "10px",
        backgroundColor: "white"
      }}>
        <Row style={{ maxWidth: "900px", alignSelf: "center" }}>
          <div 
            style={{ cursor: "pointer", minWidth: "157px", width: "157px" }}
            onClick={() => Router.push("/")}
          >
            <img style={{ width: "100%" }}src={logo} alt="logo multcostura" />
          </div>

          <Row style={{ alignItems: "center", marginBottom: "11px", marginLeft: "5px" }}>
           <Input 
            placeholder="Buscar produto..." 
            onChange={e => setSearch(e.target.value)} 
            onKeyDown={(k) => {
              if (k.key == "Enter") window.location.href = './produtos?search=' + search
              }
            }
           />
           <Button 
            onClick={() => window.location.href = './produtos?search=' + search}
            style={{ 
               height: "39px", 
               width: "51px",
               borderTopLeftRadius: 0, 
               borderBottomLeftRadius: 0 
             }}
           >
            <FontAwesomeIcon icon={faSearch} style={{ color: "white" }} size="2x" />
           </Button>
          </Row>

          <Row style={{ alignItems: "center", marginLeft: "30px" }}>
            <Row style={{ flex: 1 }}>
              <div style={{ width: "28.5px" }}>
                <img src={phone} style={{ width: "100%"}} />
              </div>
              <Column style={{ marginLeft: "5px" }}>
                <SimpleText>(11) 00000-0000</SimpleText>
                <SimpleText>Atendimento</SimpleText>
              </Column>
            </Row>
            <Row style={{ flex: 1 }}>
              <div style={{ width: "28.5px" }}>
                <img src={whatsapp} style={{ width: "100%"}} />
              </div>
              <Column style={{ marginLeft: "5px" }}>
                <SimpleText>(11) 00000-0000</SimpleText>
                <SimpleText>WhatsApp</SimpleText>
              </Column>
            </Row>

            <Row style={{ flex: 1 }}>
              <div style={{ width: "30.5px" }}>
                <img src={dollar} style={{ width: "100%"}} />
              </div>
              <Column style={{ marginLeft: "5px" }}>
                <SimpleText>
                  <span 
                      style={{ 
                        color: pctChange ? "#20B138" : "red"
                      }}>{
                        highDolar}
                  </span>
                  {pctChange ? 
                    <img src={arrowUp} style={{ width: "16px"}} /> :
                    <img src={arrowDown} style={{ width: "13%"	}} />} 
                </SimpleText>
                <SimpleText>Dólar</SimpleText>
              </Column>
            </Row>
          </Row>
        </Row>
      </Row>
      {/* ================ */}

      {/* terceira barra */}
      <Row style={{ 
        justifyContent: "center", 
        paddingTop: "10px",
        backgroundColor: "white"
      }}>
        <Row style={{ maxWidth: "900px", alignSelf: "center" }}>
          <ItemPC onClick={() => Router.push("/")}>
            <p>home</p>
          </ItemPC>
          <ItemPC
            onMouseEnter={() => setHideManufMenu(true)}
            onMouseLeave={() => setHideManufMenu(false)}
          >
            <p>Nossas Marcas</p>
            <Triangle vis={hideManufMenu} />
            <DropDownMenu vis={hideManufMenu}>
              {manufacturers
                .map((man, i) => (
                  <DropDownItem key={i} 
                    onClick={() => 
                      Router.push({ 
                        pathname: "/produtos",
                        query: { type: "manufacturer", id: man.id }
                      })}
                    >
                    {man.name}
                  </DropDownItem>
                ))}
            </DropDownMenu>
          </ItemPC>

          <ItemPC 
            onClick={() => Router.push("/revendedores")}
          >
            <p>revendedores</p>
          </ItemPC>
          <ItemPC
            onMouseEnter={() => setHideDropMenu(true)}
            onMouseLeave={() => setHideDropMenu(false)}
          >
            <p>Máquinas</p>
            <Triangle vis={hideDropMenu} />
            <DropDownMenu vis={hideDropMenu}>
              {categories.sort((a,b) => {
                 if(a.position && b.position) 
                  return a.position-b.position;
                 if(!a.position && !b.position) return 0;
                   return !b.position ? -1 : 1;
              }).map((cat, i) => 
                  <DropDownItem 
                        key={cat.id} 
                      onClick={() => 
                        Router.push('/produtos?type=categories&id='+cat.id)}>{cat.name}
                  </DropDownItem>
              )}
            </DropDownMenu>
          </ItemPC>
          <ItemPC
            onClick={() => Router.push("/produtos?type=tools")}
          >
            <p>Peças e acessórios</p>
          </ItemPC>
          <ItemPC onClick={() => Router.push("/noticias")}>
            <p>Notícias</p>
          </ItemPC>
          <ItemPC onClick={() => Router.push("/empresa")}>
            <p>Sobre nós</p>
          </ItemPC>
          <ItemPC onClick={() => Router.push("/contato")}>
            <p>Contato</p>
          </ItemPC>
        </Row>
      </Row>
     </Column> 
    </Column>
  )
}

//NAV MOBILE
function NavSm({ props: { hideDropMenu, hideManufMenu, setHideManufMenu, setHideDropMenu, categories, manufacturers, highDolar, pctChange }}) {
	const Router = useRouter();
	const classes = useStyles();
	const [left, setLeft] = useState(false)
	const [search, setSearch] = useState(false)
	const [searchKey, setSearchKey] = useState('')
	

	const [list, setList] = useState({
		categories: [],
      	manufacturers: [],
      	main: [
      	  <Row key={Math.round(Math.random()*100)} jc="flex-start" ait="center" style={{ marginTop: "13px", padding: "0 15px" }} onClick={() => Router.push("/")}>
      		<FontAwesomeIcon icon={faHome} size="2x" style={{ marginRight: "10px"}} /> <span style={{ fontSize: "1.1rem"}}>Inicio</span>
      	  </Row>,
      	  <Row key={Math.round(Math.random()*100)} onClick={() => setListController('categories')} jc="flex-start" ait="center" style={{ marginTop: "13px", padding: "0 15px" }}>
      		<img src={iconMachine} style={{ width: "36px",marginRight: "10px"}} /> <span style={{ fontSize: "1.1rem"}}>Categorias</span>
      	  </Row>,
      	  <Row key={Math.round(Math.random()*100)} onClick={() => setListController('manufacturers')} jc="flex-start" ait="center" style={{ marginTop: "13px", padding: "0 15px" }}>
      		<FontAwesomeIcon icon={faIndustry} size="2x" style={{ marginRight: "10px"}} /> <span style={{ fontSize: "1.1rem"}}>Fabricantes</span>
      	  </Row>,
       	  <Row key={Math.round(Math.random()*100)}  jc="flex-start" ait="center" style={{ marginTop: "13px", padding: "0 15px" }} onClick={() => Router.push("/produtos?type=tools")}>
      		<img src={iconTool} style={{ width: "36px",marginRight: "10px"}} /> <span style={{ fontSize: "1.1rem"}}>Peças</span>
      	  </Row>,
          <Row key={Math.round(Math.random()*100)}  jc="flex-start" ait="center" style={{ marginTop: "13px", padding: "0 15px" }}>
      		<FontAwesomeIcon onClick={() => Router.push("/revendedores")} icon={faUsers} size="2x" style={{ marginRight: "10px"}} /> <span style={{ fontSize: "1.1rem"}}>Revendedores</span>
      	  </Row>,
      	  <Row key={Math.round(Math.random()*100)} jc="flex-start" ait="center" style={{ marginTop: "13px", padding: "0 15px" }} onClick={() => Router.push("/empresa")}>
      		<FontAwesomeIcon icon={faBuilding} size="2x" style={{ marginRight: "10px"}} /> <span style={{ fontSize: "1.1rem"}}>Empresa</span>
      	  </Row>,
      	  <Row key={Math.round(Math.random()*100)} jc="flex-start" ait="center" style={{ marginTop: "13px", padding: "0 15px" }} onClick={() => Router.push("/contato")}>
      		<FontAwesomeIcon icon={faHeadset} size="2x" style={{ marginRight: "10px"}} /> <span style={{ fontSize: "1.1rem"}}>Contato</span>
      	  </Row>,
      	  <Row key={Math.round(Math.random()*100)} jc="flex-start" ait="center" style={{ marginTop: "13px", padding: "0 15px" }} onClick={() => Router.push("/noticias")}>
      	 	<FontAwesomeIcon icon={faNewspaper} size="2x" style={{ marginRight: "10px"}} /> <span style={{ fontSize: "1.1rem"}}>Notícias</span>
      	  </Row>,
	      	<Column key={Math.round(Math.random()*100)} style={{ padding: "10px" }}>
	      		<hr style={{ width: "100%"}} /> 
				<div style={{ flex: 2 }}>
                                  <p>
                                    <img 
                                      src={iconWhatsapp} 
                                      style={{ 
                                        marginRight: "5px", 
                                        maxWidth: "16px" 
                                      }}
                                    /> Whatsapp: (11) 97472-3356
                                  </p>
                                </div>
				<div style={{ flex: 2 }}>
                                  <p>
                                    <FontAwesomeIcon 
                                      icon={faPhone} 
                                      style={{ marginRight: "5px" }} 
                                    /> (11) 2693-7212
                                  </p>
                                </div>
				<div style={{ flex: 2 }}>
                                  <p>
                                    <FontAwesomeIcon 
                                      icon={faEnvelope} 
                                      style={{marginRight: "5px"}} 
                                    />
                                    contato@multcostura.com.br
                                  </p>
                                </div>
				<div style={{ flex: 1 }}>
                                  <p>
                                    <FontAwesomeIcon 
                                      icon={faDollarSign} 
                                      style={{ marginRight: "5px" }} 
                                    />Dólar: 
                                    {pctChange ? 
                                      <img src={arrowUp} style={{ width: "16px"}} /> : 
                                      <img src={arrowDown} style={{ width: "16px"}} />} 
                                      {highDolar}
                                  </p>
                                </div>
			</Column>
      	]
	})
	
	useEffect(() => {
		setList({
			...list,
			categories: [
			<Row key={10201210} ait="center" jc="space-around" ><FontAwesomeIcon icon={faArrowLeft} onClick={() => setListController('main')} /> <h1 style={{textAlign: "center" }}>Categorias</h1></Row>
			,categories.map((cat, i) => <Column key={cat.id} jc="center" ait="flex-start" style={{ marginTop: "13px", padding: "0 15px" }}>
      		<span style={{ fontSize: "1.1rem"}} onClick={() => Router.push('/produtos?type=categories&id='+cat.id)}>{cat.name}</span>
      		<hr style={{ width: "100%"}} />
      		</Column>)],
			manufacturers: [
			<Row key={1020121} ait="center" jc="space-around" ><FontAwesomeIcon icon={faArrowLeft} onClick={() => setListController('main')} /> <h1 style={{textAlign: "center" }}>Fabricantes</h1></Row>
			,manufacturers.map((man, i) => <Column key={i} jc="center" ait="flex-start" style={{ marginTop: "13px", padding: "0 15px" }} 
				onClick={() => Router.push({ 
					pathname: "/produtos",
					query: { type: "manufacturer", id: man.id }
				})}>
      		<span style={{ fontSize: "1.1rem"}}>{man.name}</span>
      		<hr style={{ width: "100%"}} />
      		</Column>)]
		})
	}, [categories, manufacturers])

	const [listController, setListController] = useState('main')

	const sideList = side => (
      <div
      	className={classes.list}
      	role="presentation"
      >
      <List style={{ padding: 0 }}>
      	<div style={{ width: "100%", background: "#EDEDED", padding: "15px 0", boxShadow: "grey 1px 1px 10px" }}>
      		<LogoMaior src={logoMaior} />
      	</div>
      	<>{list[listController]}</>
      </List>
    </div>
  	);
	const toggleDrawer = (side, open) => event => {
    	if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      		return;
    	}

    	setLeft(open);
  	};
	return  <div>
	  
      	{!search ? <Row jc="space-around" ait="center" style={{ background: "#EDEDED", width: "100%", height: "84px"}}>
      		<span onClick={toggleDrawer('left', true)}><FontAwesomeIcon icon={faList} size="2x" /></span>
      			<LogoMobile src={logo} />
      		<span onClick={() => setSearch(true)}><FontAwesomeIcon icon={faSearch} size="2x" /></span>
      	  </Row> :
      	  <Row jc="center" ait="center" style={{ background: "#EDEDED", width: "100%", height: "84px" }}>
      	  	<span onClick={() => setSearch(false)} style={{ padding: '10px', fontSize: "1.3rem" }} >X</span>
      	  	<SearchInput 
      	  		style={{ width: "70%", padding: "0 5px" }} 
      	  		placeholder="Buscar" value={searchKey} 
      	  		onChange={e => setSearchKey(e.target.value)} 
      	  		onKeyDown={(k) => {
      	  			if (k.key == "Enter") window.location.href = './produtos?search=' + searchKey
      	  		}}
      	  	/>
			<SearchBtn onClick={() => window.location.href = './produtos?search=' + searchKey}>BUSCAR</SearchBtn>
      	  </Row>
      	}
      
      <Drawer open={left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
}

const Triangle = styled.div`
  width: 0; 
  height: 0; 
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  top: 30px;
  left: 5px;
  z-index: 9;
  border-bottom: 8px solid white;
  position: absolute;
  box-shadow: 0px 10px 10px  #00000029;
  opacity: ${props => props.vis ? 1 : 0};
`

const DropDownItem = styled.div`
  background: white;
  position: relative;
  font-size: 12px;
  color: #5E5E5E;
  opacity: .8;
  z-index: 9;
  :last-child {
    border-bottom: none;
  }
`;

const DropDownMenu = styled.div`
  position: absolute;
  left: 0px;
  top: 38px;
  z-index:99;
  background: white;
  box-shadow: 0px 10px 10px  #00000029;
  display: flex;
  transform-origin: top;
  transform: ${props => (props.vis ? "scaleY(1)" : "scaleY(0)")};
  transition: transform 0.2s !important;
  flex-direction: column;
  max-height: 350px;
  flex-wrap: wrap;
  min-width: 150px;
  width: 499px;
  transition: .2s;

/* width */ ::-webkit-scrollbar {   width: 5px; }
/* Track */ ::-webkit-scrollbar-track {
background: #f1f1f1; }
/* Handle */ ::-webkit-scrollbar-thumb {   background: #81161B }
/* Handle on hover */ ::-webkit-scrollbar-thumb:hover {   background: #81161B }

  div {
    display: ${props => (props.vis ? "inherit" : "none")};
    color: ${props => props.color};
    padding: 10px;
    cursor: pointer;
    transition: .2s;
    :hover {
      color: white;
      background-color: #2D34B8;
      opacity: .8 !important;
    }
  }
`;

const ItemPC = styled.div`
  transition: .2s;
  position: relative;
  cursor: pointer;
  padding: 10px 15px;
  :hover {
    background: #1a6092;
    p {
      color: white;
    }
  }
  display: flex;
  alignItems: center;
  p {
    margin: 0;
    text-transform: uppercase;
    color: #535353;
    opacity: .8;
    font-size: 14px;
  }
`

const SimpleText = styled.p`
  margin: 0;
  margin-bottom: 5px;
  font-size: 11px;
  color: #5E5E5E
`

const Input = styled.input`
  border-radius: 1px;
  border: 1px solid #DFDFDF;
  width: 280px;
  height: 37px;
  padding: 0 10px;
  margin-right:0;
  border-top-right-radius:0;
  border-bottom-right-radius:0;
  outline: none;
`

const Button = styled.button`
  cursor: pointer;
  border: none;
  margin-left:0;
  border-radius: 1px;
  background-color: #1a6092;
  transition: .2s;
  :hover {
    opacity: .8;
  }
`

const Row = styled.div`
  display: flex;
  width: 100%;
  background: ${props => props.bg ? props.bg : "white"}
  flex: ${props => props.flex};
  justify-content: ${props => props.jc};
  align-items: ${props => props.ait};
  flex-wrap: ${props => props.fw}
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${props => props.bg ? props.bg : "white"}
  flex: ${props => props.flex};
  justify-content: ${props => props.jc};
  align-items: ${props => props.ait};
  flex-wrap: ${props => props.fw}
`

//Mobile
const LogoMobile = styled.img`
	height: 60px;
`
const LogoMaior = styled.img`
	display: block;
	margin: auto;
	width: 80%;
`
const SearchInput = styled.input`
	background: #FFFFFF 0% 0% no-repeat padding-box;
	border: 1px solid #707070;
	border-radius: 3px;
	opacity: 1;
	height: 32px;
	width: 100%;
	margin-right: 3px;
`
const SearchBtn = styled.span`
	height: 16px;
	background: #282D90 0% 0% no-repeat padding-box;
	box-shadow: 1px 1px 6px #00000029;
	border-radius: 3px;
	opacity: 1;
	cursor: pointer;
	color: white;
	padding: 10px;
	transition: .3s;
	:hover {
		opacity: .8;
	}
`
