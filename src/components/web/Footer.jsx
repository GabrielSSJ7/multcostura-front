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
		<Row style={{ background: "#ECECEC", padding: "35px 9.89%", flexWrap: "wrap" }}>
			<Column flex={1} jc="center" ait="flex-end">
				<img src={logoMini} style={{ width: "70%", marginRight: "20px" }} />
			</Column>
			<Column flex={1}>
				<Item onClick={() => Router.pushRoute('/empresa')}>
					Empresa
				</Item>
				{/*<Item onClick={() => Router.pushRoute('/empresa')}>
					Máquinas
				</Item>*/}
				<Item onClick={() => Router.pushRoute('/produtos?type=tools')}>
					Peças
				</Item>
				<Item onClick={() => Router.pushRoute('/noticias')}>
					Notícias
				</Item>
				<Item onClick={() => Router.pushRoute('/contato')}>
					Contato
				</Item>
				<Item onClick={() => Router.pushRoute('/empresa')}>
					Revendedores
				</Item>
				
			</Column>
			<Column flex={1}>
				<p>Endereço</p>
				<Row > <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "5px" }} /> <p style={{ marginTop: 0 }}>Rua Newton Prado, 71<br /> Bom Retiro São Paulo SP <br /> Cep: 000000-000</p></Row>
			</Column>
			<Column flex={1}>
				<p>Sigam nossas redes sociais!</p>
				<Row jc="space-between">
					<Item><img src={facebookIcon} style={{ width: "30px" }} /></Item>
					<Item><img src={instagramIcon} style={{ width: "30px" }} /></Item>
					<Item><img src={youtubeIcon} style={{ width: "30px" }} /></Item>
				</Row>
				<img src={cartoesBndes} style={{ width: "211px", height: "106px"}} />
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