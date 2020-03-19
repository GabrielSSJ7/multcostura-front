import React from 'react'
import styled from 'styled-components'
import { Router } from '../../../routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import { Row, Column } from '../../static/styled-components/base'

import logoMini from '../../static/images/logo-colorido.png'
import facebookIcon from '../../static/images/facebook.png'
import instagramIcon from '../../static/images/instagram.png'
import youtubeIcon from '../../static/images/youtube.png'
import cartoesBndes from '../../static/images/logo bnds.png'

export default function Footer () {
	return (
		<Row style={{ background: "#ECECEC", padding: "35px 9.89% 15px 7%", flexWrap: "wrap" }}>
			<Column flex={1} jc="flex-start" ait="flex-end" style={{ marginTop: '10px' }}>
				<img src={logoMini} style={{ width: "45\%", marginRight: "15%" }} />
			</Column>
			<Row flex={1}>
				<Column style={{ marginRight: "25px"}}>
					<Item onClick={() => Router.pushRoute('/empresa')}>
						Empresa
					</Item>
					<Item onClick={() => Router.pushRoute('/produtos')}>
						Máquinas
					</Item>
					<Item onClick={() => Router.pushRoute('/produtos?type=tools')}>
						Peças
					</Item>
					<Item onClick={() => Router.pushRoute('/noticias')}>
						Notícias
					</Item>					
					<Item onClick={() => Router.pushRoute('/contato')}>
						Contato
					</Item>
				</Column>
				<Column>
					<Item onClick={() => Router.pushRoute('/empresa')}>
						Revendedores
					</Item>
					
					<Item onClick={() => Router.pushRoute('/produtos')}>
						Marcas
					</Item>
				</Column>
			</Row>
			<Row flex={1} style={{ position: "relative" }}>
				<div style={{ paddingRight: "5px"}}><FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "5px", opacity: 0 }} /></div>
				<div style={{ position: "absolute", top: '20%', bottom: '50%', }}>
					<FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "5px", transform: { translateY: "50%" } }} />
				</div>
				<Column>
					<p style={{ marginBottom: "5px", marginTop: "0px"}}>Endereço</p>
					<p style={{ marginTop: 0, fontFamily: "sans-serif" }}>
						Rua Newton Prado, 71<br /> Bom Retiro São Paulo SP <br /> Cep: 000000-000
					</p>
				</Column>
			</Row>
			<Column flex={1}>
				<p style={{ marginBottom: "5px", marginTop: "0px"}}>Sigam nossas redes sociais!</p>
				<Row style={{ padding: "0 5px"}}>
					<Item style={{ marginRight: "48px"}}><img src={facebookIcon} style={{ width: "30px" }} /></Item>
					<Item style={{ marginRight: "48px"}}><img src={instagramIcon} style={{ width: "30px" }} /></Item>
					<Item style={{ marginRight: "48px"}}><img src={youtubeIcon} style={{ width: "30px" }} /></Item>
				</Row>
				<img src={cartoesBndes} style={{ width: "60%" }} />
			</Column>
		</Row>
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