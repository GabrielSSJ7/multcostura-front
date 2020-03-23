import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Router from 'next/router'

import setApi from '../../../api'
import { Row, Column } from '../../../static/styled-components/base'

export default function Home () {
	const [state, setState] = useState({
		produtos: "",
		pecas: "",
		noticias: ""
	})

	useEffect(() => {
		async function asyncFunc() {
			const prod = await setApi().get('/institutional/produtos')
			const pecas = await setApi().get('/institutional/pecas')
			const noticias = await setApi().get('/institutional/noticias')
			setState({
				produtos: prod.data,
				pecas: pecas.data,
				noticias: noticias.data
			})
		}

		asyncFunc();

	}, [])

	return (
		<Column style={{ marginTop: "15px", width: "87%", padding: "0 6.46%" }}>
			<h1 style={{ color: "#5B5B5B" }}>LANÇAMENTOS</h1>
			<DivCards jc="space-between" style={{ width: "100%", flexWrap: "wrap" }}>
				<Column className="div-card" style={{ width: "27.95%", minWidth: "280px", maxHeight: ""}}>
					<CardTitle onClick={() => Router.push("/produtos")}	>Produtos</CardTitle>
					<CardContainer className="card" onClick={() => Router.push("/produtos")}>
						<DivImg src={state.produtos} />
					</CardContainer>
				</Column>
				<Column className="div-card" style={{ width: "27.95%", minWidth: "280px" }}>
					<CardTitle onClick={() => Router.push("/produtos?type=tools")} >Peças</CardTitle>
					<CardContainer className="card" onClick={() => Router.push("/produtos?type=tools")}>
						<DivImg src={state.pecas} />
					</CardContainer>
				</Column>
				<Column className="div-card" style={{ width: "27.95%", minWidth: "280px" }}>
					<CardTitle onClick={() => Router.push("/noticias")}>Notícias</CardTitle>
					<CardContainer className="card" onClick={() => Router.push("/noticias")}>
						<DivImg src={state.noticias} />
					</CardContainer>
				</Column>
			</DivCards>
		</Column>
	)
}

const DivCards = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	@media (max-width: 600px) {
		justify-content: center;
		.div-card {
			width: 100% !important;
		}

		.card {
			width: 100% !important;
			height: 400px !important;
		}
	}
`


const CardTitle = styled.p`
	background: #E5E5E5;
	padding: 5px;
	border-radius: 5px 5px 0px 0px;
	width: 24.17%;
	margin: 0;
	font-size: 1.1rem;
	padding: 8px 15px;
`

const CardContainer = styled.div`
	height: 200px;
	
	overflow: hidden;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	flex-wrap: no-wrap;
	margin-bottom: 10px;
	margin-right: 15px;
	background: #E5E5E5;
	img {
		width: 100%;
		max-height: 200px;
		display: block;
		margin: auto
	}
	padding: 5px;
	:hover {
		box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	}

}
`;

const DivImg = styled.div`
	background-image: url(${props => props.src});
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 100%;
	display: block;
	margin: auto

`