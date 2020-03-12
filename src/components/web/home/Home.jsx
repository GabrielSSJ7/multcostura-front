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
			<h1 style={{ color: "#5B5B5B" }}>Lançamentos</h1>
			<Row jc="space-between" style={{ width: "100%", flexWrap: "wrap" }}>
				<Column style={{ width: "27.95%", minWidth: "280px" }}>
					<CardTitle onClick={() => Router.push("/produtos")}	>Produtos</CardTitle>
					<CardContainer onClick={() => Router.push("/produtos")}>
						<img src={state.produtos} />
					</CardContainer>
				</Column>
				<Column style={{ width: "27.95%", minWidth: "280px" }}>
					<CardTitle onClick={() => Router.push("/produtos?type=tools")} >Peças</CardTitle>
					<CardContainer onClick={() => Router.push("/produtos?type=tools")}>
						<img src={state.pecas} />
					</CardContainer>
				</Column>
				<Column style={{ width: "27.95%", minWidth: "280px" }}>
					<CardTitle onClick={() => Router.push("/noticias")}>Notícias</CardTitle>
					<CardContainer onClick={() => Router.push("/noticias")}>
						<img src={state.noticias} />
					</CardContainer>
				</Column>
			</Row>
		</Column>
	)
}


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
	min-height: 200px;

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
		
		display: block;
		margin: auto
	}
	padding: 5px;
	:hover {
		box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	}

}
`;