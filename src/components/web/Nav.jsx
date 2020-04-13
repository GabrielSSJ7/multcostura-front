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

import arrowUp from '../../static/images/arrow-up.png'
import arrowDown from '../../static/images/arrow-down.png'

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
		translate > 690 ?
		<NavBg props={{ hideDropMenu, hideManufMenu, setHideManufMenu, setHideDropMenu, categories, manufacturers, highDolar, pctChange }} /> :
		<NavSm props={{ hideDropMenu, hideManufMenu, setHideManufMenu, setHideDropMenu, categories, manufacturers, highDolar, pctChange }} />
	)
}


// NAV MOBILE
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
				<div style={{ flex: 2 }}><p ><img src={iconWhatsapp} />Whatsapp: (11) 97472-3356</p></div>
				<div style={{ flex: 2 }}><p ><FontAwesomeIcon icon={faPhone} style={{ marginRight: "5px" }} /> (11) 2693-7212</p></div>
				<div style={{ flex: 2 }}><p ><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "5px" }} />contato@multcostura.com.br</p></div>
				<div style={{ flex: 1 }}><p ><FontAwesomeIcon icon={faDollarSign} style={{ marginRight: "5px" }} />Dólar: {pctChange ? <img src={arrowUp} style={{ width: "16px"}} /> : <img src={arrowDown} style={{ width: "16px"}} />} {highDolar}</p></div>
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



// NAV GRANDE
function NavBg ({ props: { hideDropMenu, hideManufMenu, setHideManufMenu, setHideDropMenu, categories, manufacturers, highDolar, pctChange }}) {
	const Router = useRouter();
	const [doll, setDoll] = useState(0)
	const [search, setSearch] = useState('')
	console.log(Router)
	return (
		<Column style={{ width: "100%" }}>
			<Row flex="5" style={{ flex: "5 1 auto",  justifyContent: "center", background: "transparent linear-gradient(180deg, #E8E8E8 0%, #E7E7E7 48%, #D6D6D6 100%) 0% 0% no-repeat padding-box"}}>
				<Row style={{ width: "90%" }}>
					<Link href="/"><a style={{ width: '18%', padding: "10px 0", display: "flex" }}><Logo src={logo} /></a></Link>
					<Column style={{  width: '87%',     padding: "10px 10px 10px 0" }} jc="center" >
						<Row style={{ maxWidth: "100%", marginTop: "5px"}} >
							<SearchInput 
								style={{ width: "100%", padding: "0 5px" }} 
								placeholder="Buscar" 
								value={search} 
								onChange={e => setSearch(e.target.value)} 
								onKeyDown={(k) => {
      	  							if (k.key == "Enter") window.location.href = './produtos?search=' + search
      	  						}}
							/>
							<SearchBtn onClick={() => window.location.href = './produtos?search=' + search}>BUSCAR</SearchBtn>
						</Row>
						<Row style={{ maxWidth: "100%",     marginTop: "18px"}}>
							<div style={{ flex: 2 }}>
								<p className="media-1228px" style={{display: "flex", alignItems: "center", marginBottom: "0", fontFamily: "sans-serif" }}>
									<img src={iconWhatsapp} style={{ width: "18px", marginRight: "5px" }} />Whatsapp: (11) 97472-3356
								</p>
							</div>
							<div style={{ flex: 2 }}>
								<p className="media-1228px" style={{display: "flex", alignItems: "center",  marginBottom: "0", fontFamily: "sans-serif" }}>
									<FontAwesomeIcon icon={faPhone} style={{ marginRight: "5px", color: "#929292" }} /> Telefone: (11) 2693-7212
								</p>
							</div>
							<div style={{ flex: 2 }}>
								<p className="media-1228px" style={{display: "flex", alignItems: "center", marginBottom: "0", fontFamily: "sans-serif", fontSize: "93%" }}>
									<FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "5px", color: "#929292" }} />
									<span style={{ fontSize: "98%", fontFamily: "sans-serif"}}>E-mail:</span> contato@multcostura.com.br
								</p>
							</div>
							<div style={{ flex: 1 }}>
								<p className="media-1228px" style={{textAlign: "end", marginBottom: "0", fontFamily: "sans-serif", fontWeight: "bold"}}>
									Dólar:  {pctChange ? 
										<img src={arrowUp} style={{ width: "16px"}} /> :
										<img src={arrowDown} style={{ width: "14px"}} />} 
										<FontAwesomeIcon icon={faDollarSign} style={{ color: pctChange ? "#20B138" : "red" }} />
										<span style={{ color: pctChange ? "#20B138" : "red"}}>{highDolar}</span>
								</p>
							</div>
						</Row>
					</Column>
				</Row>
			</Row>
			<Row flex="1" style={{ justifyContent: "center", background: "transparent linear-gradient(180deg, #EFEFEF 0%, #E3E3E3 100%) 0% 0% no-repeat padding-box"}}>
				<Row style={{ width: "85%", justifyContent: "space-between"}}>
					<div
						style={{
	                  		display: "flex",
	                  		justifyContent: "center",
	                  		alignItems: "center",
	                  		marginRight: "10px",
	                  		position: "relative",
	                	}} 
						onMouseEnter={() => setHideManufMenu(true)}
	                	onMouseLeave={() => setHideManufMenu(false)}
					>
						<Hover styles="border-color: #81161B; background: #2D34B8" style={{ display: "flex", alignItems: "center" }}>
							<Item style={{ padding: "12px 12px"}}  className="media-1228px">Nossas marcas <ArrowDown className="arrow-responsive" color="black" margin="0 0 1px 2px"/></Item>
						</Hover>
						<DropDownMenu style={{ left: 0}}  color="black" bgcolor="transparent linear-gradient(180deg, #EFEFEF 0%, #E3E3E3 100%) 0% 0% no-repeat padding-box" vis={hideManufMenu}>
							{manufacturers.map((man, i) => <DropDownItem key={i} onClick={() => Router.push({ 
								pathname: "/produtos",
								query: { type: "manufacturer", id: man.id }
							})}
							>{man.name}</DropDownItem>)}
						</DropDownMenu>
					</div>
					<Item style={Router.route == '/revendedores' ? { backgroundColor: "#2D34B8", color: "white"} : {}} className="media-1228px" onClick={() => Router.push("/revendedores")}>Revendedores</Item>
					<Item style={Router.route == '/noticias' ? { backgroundColor: "#2D34B8", color: "white"} : {}} className="media-1228px" onClick={() => Router.push("/noticias")}>Notícias</Item>
					<Item style={Router.route == '/contato' ? { background: "#2D34B8", color: "white"} : {}} className="media-1228px" onClick={() => Router.push("/contato")}>Contato</Item>
					<Item className="baixe-nosso-ap-responsivo" style={{ color: "#81161B" }}>BAIXE NOSSO APLICATIVO</Item>
				</Row>
			</Row>
			<Row 
			  flex="1"
			  jc="center"
			  style={{ 
			    color: "white", 
			    background: "transparent linear-gradient(180deg, #323AD6 0%, #242873 100%) 0% 0% no-repeat padding-box" }}
			>
				<Row 
				  style={{ 
				      width: '82%',
				      marginRight: '2%',
				    }}
				  jc="space-between"
				>
				  {categories.sort((a,b) => {
                                     if(a.position && b.position) 
                                      return a.position-b.position;
                                     if(!a.position && !b.position) return 0;
                                       return !b.position ? -1 : 1;
                                  }).map((category, i) => {
					  if (i < 7)
					    return (<Item 
						    key={i}
						    className="media-1228px"
						    onClick={() => Router.push('/produtos?type=categories&id='+category.id)}
						    >
						      {category.name}
						    </Item>)
				  })}
				  <Hover styles="border-color: #81161B" style={{ display: "flex", alignItems: "center" }}>
					  <Item className="media-1228px" onClick={() => Router.push("/produtos?type=tools")}>
					    Peças e acessórios
					    <ArrowDown className="arrow-responsive" color="white" margin="auto 5px" />
					  </Item>
				  </Hover>
				  <div  
				      style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginRight: "10px",
					position: "relative"
				      }}
				      onMouseEnter={() => setHideDropMenu(true)}
				      onMouseLeave={() => setHideDropMenu(false)}
				  >
					  <Hover styles="border-color: #81161B" style={{ display: "flex", alignItems: "center" }}>
						  <Item className="media-1228px" onClick={() => setHideDropMenu(hideDropMenu ? false : true)}>
						    Todas as categorias
						    <ArrowDown className="arrow-responsive" color="white" margin="auto 5px" />
						  </Item>
					  </Hover>
					  <DropDownMenu 
					      color="white"
					      bgcolor="transparent linear-gradient(180deg, #323AD6 0%, #242873 100%) 0% 0% no-repeat padding-box" 
					      vis={hideDropMenu}
					  >
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
				  </div>
				</Row>
			</Row>
		</Column>
	)
}

const Logo = styled.img`
	max-width: 100%;
	height: auto;
	margin: auto 
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
		background-color: #2D34B8;
		color: white;
		font-weight: 200
	}
	z-index: 9;
	margin: 0;
	padding: 12px 5px;
	text-align: center;
	margin: auto;
	flex: 1;
	font-size: 13px;

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
  left: 0px;
  top: 40px;
  z-index:99;
  background: ${props => props.bgcolor};
  display: flex;
  transform-origin: top;
  transform: ${props => (props.vis ? "scaleY(1)" : "scaleY(0)")};
  transition: transform 0.2s !important;
  flex-direction: column;
  width: 150px;
  max-height: 310px;
  overflow-y: auto;
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


const ArrowDown = styled.i`
  border: solid ${props => props.color};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  margin: ${props => props.margin};
  :hover {
		opacity: .9;
		color: #81161B;
	}
  
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
