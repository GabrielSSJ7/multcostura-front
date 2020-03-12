import React, { useState, useEffect, useLayoutEffect } from 'react'
import styled from 'styled-components'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faList, faSearch, faHome, faBuilding, faHeadset, faNewspaper, faArrowLeft, faIndustry, faPhone, faEnvelope, faDollarSign } from '@fortawesome/free-solid-svg-icons'


import setApi from '../../api'

import { Row, Column, Button, Input } from '../../static/styled-components/base'
//import { Router, Link } from '../../../routes'
//import Router from 'next/router'
import Link from 'next/link'
import { useRouter } from 'next/router'

import logo from '../../static/images/logo-multcostura-(oficial).png'
import logoMaior from '../../static/images/logo-multcostura--horizontal.png'
import iconMachine from '../../static/images/maquina-icon.png'
import iconTool from '../../static/images/peca-icon.png'
import iconFab from '../../static/images/fab-icon.png'
import iconWhatsapp from '../../static/images/whatsapp.png'

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
				})
				.catch(err => {
				})
		}
		async();
	}, [])





	return (
		translate > 690 ?
		<NavBg props={{ hideDropMenu, hideManufMenu, setHideManufMenu, setHideDropMenu, categories, manufacturers, highDolar }} /> :
		<NavSm props={{ hideDropMenu, hideManufMenu, setHideManufMenu, setHideDropMenu, categories, manufacturers, highDolar }} />
	)
}


// NAV MOBILE
function NavSm({ props: { hideDropMenu, hideManufMenu, setHideManufMenu, setHideDropMenu, categories, manufacturers, highDolar }}) {
	const Router = useRouter();
	const classes = useStyles();
	const [left, setLeft] = useState(false)
	const [search, setSearch] = useState(false)
	

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
      		<FontAwesomeIcon onClick={() => Router.push("/index#map")} icon={faUsers} size="2x" style={{ marginRight: "10px"}} /> <span style={{ fontSize: "1.1rem"}}>Revendedores</span>
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
				<div style={{ flex: 2 }}><p ><img src={iconWhatsapp} />Whatsapp: (00) 00000-0000</p></div>
				<div style={{ flex: 2 }}><p ><FontAwesomeIcon icon={faPhone} style={{ marginRight: "5px" }} />Telefone: (00) 00000-0000</p></div>
				<div style={{ flex: 2 }}><p ><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "5px" }} />E-mail: contato@multcostura.com.br</p></div>
				<div style={{ flex: 1 }}><p ><FontAwesomeIcon icon={faDollarSign} style={{ marginRight: "5px" }} />Dólar: {highDolar}</p></div>
			</Column>
      	]
	})
	
	useEffect(() => {
		setList({
			...list,
			categories: [
			<Row key={10201210} ait="center" jc="space-around" ><FontAwesomeIcon icon={faArrowLeft} onClick={() => setListController('main')} /> <h1 style={{textAlign: "center" }}>Categorias</h1></Row>
			,categories.map((cat, i) => <Column key={i} jc="center" ait="flex-start" style={{ marginTop: "13px", padding: "0 15px" }}>
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
      	  	<SearchInput style={{ width: "70%", padding: "0 5px" }} placeholder="Pesquisar" value={search} onChange={e => setSearch(e.target.value)} />
			<SearchBtn onClick={() => window.location.href = './produtos?search=' + search}>Buscar</SearchBtn>
      	  </Row>
      	}
      
      <Drawer open={left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
}



// NAV GRANDE
function NavBg ({ props: { hideDropMenu, hideManufMenu, setHideManufMenu, setHideDropMenu, categories, manufacturers, highDolar }}) {
	const Router = useRouter();
	const [doll, setDoll] = useState(0)
	const [search, setSearch] = useState('')

	return (
		<Column style={{ width: "100%", height: "226px" }}>
			<Row flex="5" style={{ flex: "5 1 auto", height: "50%", background: "transparent linear-gradient(180deg, #E8E8E8 0%, #E7E7E7 48%, #D6D6D6 100%) 0% 0% no-repeat padding-box"}}>
				<div style={{ flex: 2, padding: "10px 0", marginLeft: "60px" }}>
					<Link href="/"><a><Logo src={logo} /></a></Link>
				</div>
				<Column style={{ flex: 10, padding: '10px', marginRight: "60px" }} jc="center" >
					<Row  >
						<SearchInput style={{ width: "70%", padding: "0 5px" }} placeholder="Pesquisar" value={search} onChange={e => setSearch(e.target.value)} />
						<SearchBtn onClick={() => window.location.href = './produtos?search=' + search}>Buscar</SearchBtn>
					</Row>
					<Row>
						<div style={{ flex: 2 }}><p className="media-1228px"><img src={iconWhatsapp} style={{ width: "18px", marginRight: "5px" }} />Whatsapp: (00) 00000-0000</p></div>
						<div style={{ flex: 2 }}><p className="media-1228px"><FontAwesomeIcon icon={faPhone} style={{ marginRight: "5px" }} />Telefone: (00) 00000-0000</p></div>
						<div style={{ flex: 2 }}><p className="media-1228px"><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "5px" }} />E-mail: contato@multcostura.com.br</p></div>
						<div style={{ flex: 1 }}><p className="media-1228px" style={{textAlign: "end"}}><FontAwesomeIcon icon={faDollarSign} style={{ marginRight: "5px" }} />Dólar: {highDolar}</p></div>
					</Row>
				</Column>
			</Row>
			<Row flex="1" style={{ height: "18%", justifyContent: "space-between", background: "transparent linear-gradient(180deg, #EFEFEF 0%, #E3E3E3 100%) 0% 0% no-repeat padding-box", padding: "0 100px" }}>
				<div
					style={{
                  		display: "flex",
                  		justifyContent: "center",
                  		alignItems: "center",
                  		marginRight: "10px",
                  		position: "relative"
                	}}
					onMouseEnter={() => setHideManufMenu(true)}
                	onMouseLeave={() => setHideManufMenu(false)}
				>
					<Hover styles="border-color: #81161B" style={{ display: "flex", alignItems: "center" }}>
						<Item className="media-1228px">Nossas marcas <ArrowDown className="arrow-responsive" color="black" margin="0 0 1px 2px"/></Item>
					</Hover>
					<DropDownMenu  color="black" bgcolor="transparent linear-gradient(180deg, #EFEFEF 0%, #E3E3E3 100%) 0% 0% no-repeat padding-box" vis={hideManufMenu}>
						{manufacturers.map((man, i) => <DropDownItem key={i} onClick={() => Router.push({ 
							pathname: "/produtos",
							query: { type: "manufacturer", id: man.id }
						})}
						>{man.name}</DropDownItem>)}
					</DropDownMenu>
				</div>
				<Item className="media-1228px" onClick={() => Router.push("/index#map")}>Revendedores</Item>
				<Item className="media-1228px" onClick={() => Router.push("/noticias")}>Notícias</Item>
				<Item className="media-1228px" onClick={() => Router.push("/contato")}>Contato</Item>
				<Item className="baixe-nosso-ap-responsivo" style={{ color: "#81161B" }}>BAIXE NOSSO APLICATIVO</Item>
			</Row>
			<Row flex="1" jc="space-between" style={{ color: "white", height: "18%", background: "transparent linear-gradient(180deg, #323AD6 0%, #242873 100%) 0% 0% no-repeat padding-box", padding: "0 100px" }}>
				{categories.map((category, i) => {
					if (i < 8) return <Item key={i} className="media-1228px" onClick={() => Router.push('/produtos?type=categories&id='+category.id)}>{category.name}</Item>
				})}
				<Item className="media-1228px" onClick={() => Router.push("/produtos?type=tools")}>Peças e acessórios</Item>
				<div  style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "10px",
                  position: "relative"
                }}
                onMouseEnter={() => setHideDropMenu(true)}
                onMouseLeave={() => setHideDropMenu(false)}>
					<Hover styles="border-color: #81161B" style={{ display: "flex", alignItems: "center" }}>
						<Item className="media-1228px" onClick={() => setHideDropMenu(hideDropMenu ? false : true)}>Todas as categorias</Item><ArrowDown className="arrow-responsive" color="white" margin="0 0 5px 5px" />
					</Hover>
					<DropDownMenu color="white" bgcolor="transparent linear-gradient(180deg, #323AD6 0%, #242873 100%) 0% 0% no-repeat padding-box" vis={hideDropMenu}>
						{categories.map((cat, i) => <DropDownItem key={i} onClick={() => Router.push('/produtos?type=categories&id='+cat.id)}>{cat.name}</DropDownItem>)}
					</DropDownMenu>
				</div>
			</Row>
		</Column>
	)
}

const Logo = styled.img`
	height: 100px;
	float: right;
`

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

const Item = styled.p`
	font-size: 1rem;
	cursor: pointer;
	transition: .4s;
	:hover {
		opacity: .9;
		color: #81161B;
	}
	z-index: 9;
	margin: 0;
	padding: 12px 0;
`


const DropDownItem = styled.div`
  border-bottom: 1px solid grey;
  z-index: 9;
  :last-child {
    border-bottom: none;
  }
`;

const DropDownMenu = styled.div`
  position: absolute;
  left: -10px;
  top: 40px;
  z-index:99;
  background: ${props => props.bgcolor};
  display: flex;
  transform-origin: top;
  transform: ${props => (props.vis ? "scaleY(1)" : "scaleY(0)")};
  transition: transform 0.2s !important;
  flex-direction: column;
  width: 150px;
  transition: .2s;
  div {
    display: ${props => (props.vis ? "inherit" : "none")};
    color: ${props => props.color};
    padding: 10px;
    cursor: pointer;
    transition: .2s;
    :hover {

      color: #81161B;
      opacity: .8 !important;
    }
  }
`;


const ArrowDown = styled.i`
  border: solid ${props => props.color};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  margin: ${props => props.margin};
  
`

const ArrowLeft = styled.i`
  border: solid ${props => props.color};
  border-width: 0 3px 3px 0px;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  margin: ${props => props.margin};
  
`

const Hover = styled.div`
	:hover {
		p, i {
			transition: .4s;
			${props => props.styles};
		}
	}
`