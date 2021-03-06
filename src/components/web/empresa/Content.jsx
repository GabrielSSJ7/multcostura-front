import React from 'react'
import styled from 'styled-components'

import { Row, Column } from '../../../static/styled-components/base'

export default function Content () {
	return <Column style={{ width: "100%", background: "#F1F1F1" }}>
		<Column style={{ width: "69.11%", margin: "auto", paddingTop: "1%",paddingBottom: '2%' }}>
			<h1 style={{ marginTop: "25px", marginBottom: 0, color: "#5B5B5B" }}>MULTCOSTURA</h1>
			<Text className="textos"  style={{  color: "#5B5B5B" }}>Somos um empresa especializada em comércio de máquinas de costura, acessórios e peças para o mercado têxtil. <br /><br />
			 Comercializamos as melhores marcas do mercado têxtil como a BAOYU, TECHOOK, HIKARI e QXYUN, conosco você encontra 
			 produtos variados para todas as necessidades da indústria de confecção em geral, desde peças de reposição  de máquinas
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

		<Row jc="center" style={{ width: "100%", background: "#fff", padding: "2% 0", flexWrap: "wrap-reverse" }}>
			<Row jc="center" style={{ width: "70%", flexWrap: 'wrap'}}>
				<iframe style={{     flex: "1 1 0%", height: "93%", marginTop: "auto", marginBottom: "auto", paddingBottom: "20px" }} className="yt-vid" src="https://www.youtube.com/embed/GoPY6xgZpGY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<Column  style={{ flex: 1, /*marginRight: "5.44%",*/ paddingLeft: "10px" }}>
					<Title style={{ marginBotom: 0}}>VALORES CORPORATIVOS</Title>

					<h2 style={{ margin: "6px 0", fontSize: "20px"}}>QUALIDADE</h2>
					<Text>Oferecer produtos com qualidade que facilitem as produção da indústria  têxtil, sempre auxiliando as confecções em geral com segurança, rapidez  e sem burocracia.</Text>

					<h2 style={{ margin: "6px 0", fontSize: "20px"}}>CLIENTE EM 1° LUGAR</h2>
					<Text>Buscamos sempre produtos de qualidade para que nossos clientes  possam confiar suas vendas ao mercado consumidor. Procuramos sempre parcerias, fidelizando os revendedores com as  nossas marcas.</Text>

					<h2 style={{ margin: "6px 0", fontSize: "20px"}}>TRABALHO EM EQUIPE E GESTÃO DE PESSOAS</h2>
					<Text>Procuramos proporcionar um ambiente amigável e de oportunidade aos  nossos colaboradores de parceiros para que possam atender bem a todos clientes.</Text>
				</Column>
			</Row>
		</Row>
	</Column>
}


const Text = styled.p`
	text-align: left;
	/*font: Regular 20px/24px Myriad Pro;*/
	font-size: 18px;
	letter-spacing: 0;
	color: #000000;
	opacity: 1;
	font-family: sans-serif;
	margin:0;
`

const Title = styled.h1`
	text-align: left;
	font-size: 20px;
	letter-spacing: 0;
	color: #5B5B5B;
	opacity: 1;

	margin: 0
`
