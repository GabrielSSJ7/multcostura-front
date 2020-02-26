import React from 'react'
import styled from 'styled-components'

import { Row, Column } from '../../../static/styled-components/base'

export default function Content () {
	return <Column style={{ width: "100%", background: "#F1F1F1" }}>
		<Column style={{ width: "89.11%", margin: "auto" }}>
			<h1 style={{ marginTop: "25px", marginBottom: 0 }}>Multcostura</h1>
			<Text className="textos"  style={{ marginRight: "120px" }}>Somos um empresa especializada em comércio de máquinas de costura, acessórios e peças para o mercado têxtil.<br /><br />
			 Comercializamos as melhores marcas do mercado têxtil como a BAOYU, TECHOOK, HIKARI e QXYUN, conosco você encontra 
			 produtos variados para todas as necessidades da indústria de confecção em geral, desde peças de reposição de máquinas
			  até o maquinário necessário para o acabamento da sua produção.</Text>
		</Column>

		<style>
		{`
			@media(max-width: 600px) {
		  		.yt-vid {
		  			height: 350px !important;
		  			margin: 0 5px !important;
		  		}
		  	}

		  	@media(max-width: 1200px) {
		  		.textos {
		  			margin-right: 0 !important;
		  		}
		  	}
		`}
		</style>

		<Row style={{ width: "100%", background: "#fff", padding: "2% 0", flexWrap: "wrap-reverse" }}>
			<iframe style={{ flex: 1, marginLeft: "5.44%", height: "auto" }} className="yt-vid" src="https://www.youtube.com/embed/tAXQhN2XdHI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<Column  style={{ flex: 1, marginRight: "5.44%", paddingLeft: "10px" }}>
				<Title>VALORES CORPORATIVOS</Title>

				<h2>QUALIDADE</h2>
				<Text>Oferecer produtos com qualidade que facilitem as produção da indústria têxtil, sempre auxiliando as confecções em geral com segurança, rapidez e sem burocracia.</Text>

				<h2>CLIENTE EM 1° LUGAR</h2>
				<Text>Buscamos sempre produtos de qualidade para que nossos clientes possam confiar suas vendas ao mercado consumidor. Procuramos sempre parcerias, fidelizando os revendedores com as nossas marcas.</Text>

				<h2>TRABALHO EM EQUIPE E GESTÃO DE PESSOAS</h2>
				<Text>Procuramos proporcionar um ambiente amigável e de oportunidade aos nossos colaboradores de parceiros para que possam atender bem a todos clientes.</Text>
			</Column>
		</Row>
	</Column>
}


const Text = styled.p`
	text-align: left;
	/*font: Regular 20px/24px Myriad Pro;*/
	font-family: 20px;
	letter-spacing: 0;
	color: #000000;
	opacity: 1;
`

const Title = styled.h1`
	text-align: left;
	font-size: 30px;
	letter-spacing: 0;
	color: #5B5B5B;
	opacity: 1;
`
