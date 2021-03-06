import React from 'react'
import styled from 'styled-components'
import { Router } from '../../../routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


import logoMini from '../../static/images/logo-colorido.png'
import facebookIcon from '../../static/images/facebook.png'
import instagramIcon from '../../static/images/instagram.png'
import youtubeIcon from '../../static/images/youtube.png'
import cartoesBndes from '../../static/images/logo bnds.png'

export default function Footer () {
	return (
		<Column>
		<Row style={{ background: "#ECECEC", padding: "35px 9.89% 15px 7%", flexWrap: "wrap" }} jc="flex-end">
			<Column media flex={1} jc="flex-start" ait="flex-end" style={{ marginTop: '10px', minWidth: "200px" }}>
				<img src={logoMini} style={{ marginRight: "15%", width: "35%", marginTop: "10px"}} />
			</Column>
			<Row flex={1} style={{ minWidth: ""}}>
				<Column style={{ marginRight: "25px"}}>
					<Item onClick={() => window.location.href ='/empresa'}>
						Empresa
					</Item>
					<Item onClick={() => window.location.href ='/produtos'}>
						Máquinas
					</Item>
					<Item onClick={() => window.location.href ='/produtos?type=tools'}>
						Peças
					</Item>
					<Item onClick={() => window.location.href ='/noticias'}>
						Notícias
					</Item>					
					<Item onClick={() => window.location.href = '/contato'}>
						Contato
					</Item>
				</Column>
				<Column>
					<Item onClick={() => Router.pushRoute('/revendedores')}>
						Revendedores
					</Item>
					
					<Item onClick={() => Router.pushRoute('/produtos')}>
						Marcas
					</Item>
				</Column>
			</Row>
			<Row flex={1} style={{ position: "relative",  }}>
				<div style={{ paddingRight: "5px"}}><FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "5px", opacity: 0 }} /></div>
				<div style={{ position: "absolute", top: '20%', bottom: '50%', }}>
					<FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "5px", transform: { translateY: "50%" } }} />
				</div>
				<Column>
					<p style={{ marginBottom: "5px", marginTop: "0px"}}>Endereço</p>
					<p style={{ marginTop: 0, fontFamily: "sans-serif" }}>
						Rua Newton Prado, 71<br /> Bom Retiro São Paulo SP <br /> Cep: 01127-000
					</p>
				</Column>
			</Row>
			<Column flex={1} style={{  maxWidth: "200px"}} media>
				<p style={{ marginBottom: "5px", marginTop: "0px"}}>Sigam nossas redes sociais!</p>
				<Row style={{ padding: "0 5px"}}>
					<Item style={{ marginRight: "48px"}}><img src={facebookIcon} style={{ width: "30px" }} /></Item>
					<Item style={{ marginRight: "48px"}}><img src={instagramIcon} style={{ width: "30px" }} /></Item>
					<Item style={{ marginRight: "48px"}}><img src={youtubeIcon} style={{ width: "30px" }} /></Item>
				</Row>
				<img src={cartoesBndes} style={{ width: "60%" }} />
			</Column>
		</Row>
		<Row jc="center" style={{ background: "#484848" }}>
			<p style={{ color: "white", fontSize: "12px", fontFamily: "sans-serif"}}>© 2020 Todos os direitos reservados | <a href="https://squad.ag" target="_blank" style={{ color: "white", fontFamily: "sans-serif"}}>Desenvolvido por Squad Marketing 4.0</a></p>
		</Row>
		</Column>
	)
}



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
	padding: 5px 0;
`
const Row = styled.div`
  display: flex;
  flex: ${props => props.flex};
  justify-content: ${props => props.jc};
  align-items: ${props => props.ait};
  flex-wrap: ${props => props.fw};
  ${props => props.media ? `@media (max-width: 480px) {
    justify-content: center !important;
  }` : ''}
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => props.flex};
  justify-content: ${props => props.jc};
  align-items: ${props => props.ait};
  flex-wrap: ${props => props.fw};
  ${props => props.media ? `@media (max-width: 480px) {
    align-items: center !important;
      max-width: 100% !important;
    img {
      margin: 15px 0 !important
    }
  }` : ''}
`
