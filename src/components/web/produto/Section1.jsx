import React, { useEffect } from 'react'
import styled from 'styled-components'

import { Row, Column } from '../../../static/styled-components/base'

export default function Section1 ({ prod }) {

	return <Row style={{ width: "100%", background: "#F1F1F1", paddingTop: '10.66%', flexWrap: "wrap-reverse" }}>
		<Column flex="1" style={{ paddingLeft: '11.15%', minWidth: '250px' }}>
			<MachineName>{prod.name}</MachineName>
			<Category>{prod.category.name}</Category>
			<Text>{prod.description}</Text>
			{prod.specifications ? <Text style={{marginTop: '7px', marginBottom: '2px'}}>Modelo: {prod.specifications.modelo}</Text> : ''}
			<Text>{prod.mainFeatures}</Text>

			{prod.productRef ? <Column style={{  height: "32%", marginTop: "64px" }}>
				<Text>Detalhes | Ideal para produzir </Text>

				<Row style={{ width: "95%", height: "66.66%", minHeight: "200px"}}>
					{prod.productRef.map(ref => <Img src={ref} width="32%" style={{ marginRight: "1.3%"}} height="66.66%" />)}
				</Row>
			</Column> : ''}
		</Column>
		<Column flex="1" style={{ marginRight: '11.15%', minWidth: '250px' }} ait="flex-end" jc="flex-start">
			<img src={prod.images[0]} style={{ width: "80%", maxHeight: "600px", marginTop: "70px"}} />
		</Column>
	 </Row>
}


const Text = styled.p`
	text-align: left;
	/*font: Regular 18px/24px Segoe UI;*/
	font-size: 18px;
	letter-spacing: 0;
	color: #5B5B5B;
	opacity: 1;
`

const MachineName = styled.h1`
	text-align: left;
	/*font: Bold 20px/24px Myriad Pro;*/
	font-size: 20px;
	letter-spacing: 0;
	color: #5B5B5B;
	opacity: 1;
	margin: 0;
`

const Category = styled.h1`
margin: 0;
	text-align: left;
	/*font: Bold 30px/37px Myriad Pro;*/
	font-size: 30px;
	letter-spacing: 0;
	color: #242873;
	opacity: 1;
`

const Img = styled.div`
	background-image: url('${props => props.src}');
	background-size: cover;
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