import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Router from 'next/router'

import setApi from '../../../api'
import { Row, Column } from '../../../static/styled-components/base'
import ArrowCircle from '../../../static/images/arrow-circle.svg'
import BannerBNDES from '../../../static/images/banner-bndes.svg'

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
                        <Row style={{ alignItems: "center", maxWidth: "800px",width: "100%", margin: "auto" }}>
                          <Line style={{ marginRight: "25px" }}/>
                          <h1 style={{ color: "#5B5B5B", textAlign: "center"  }}>Fique por dentro da Multcostura!</h1>
                          <Line style={{ marginLeft: "25px" }} />
                        </Row>
                        <p style={{ color: "#717171", opacity: .8, textAlign: "center" }}>Acesse os links abaixo para conferir todos os nossos produtos, notícias e eventos.</p>
			<DivCards jc="space-between" style={{ width: "100%", flexWrap: "wrap" }}>
				<Column className="div-card" style={{ width: "33%", minWidth: "280px", minHeight: "270px"}}>
					<CardContainer className="card" onClick={() => Router.push("/produtos")}>
						<DivImg src={state.produtos} />
                                                <BottomCard >
                                                  <p style={{ marginLeft: "15px" }}>Lançamentos de produtos</p>
                                                  <ArrowImg src={ArrowCircle} />
                                                </BottomCard>
					</CardContainer>
				</Column>
				<Column className="div-card" style={{ width: "33%", minWidth: "280px" , minHeight: "270px"}}>
					<CardContainer className="card" onClick={() => Router.push("/produtos?type=tools")}>
						<DivImg src={state.pecas} />
                                                <BottomCard >
                                                  <p style={{ marginLeft: "15px" }}>Lançamentos de peças</p>
                                                  <ArrowImg src={ArrowCircle}/>
                                                </BottomCard>
					</CardContainer>
				</Column>
				<Column className="div-card" style={{ width: "33%", minWidth: "280px", minHeight: "270px" }}>
					<CardContainer className="card" onClick={() => Router.push("/noticias")}>
						<DivImg src={state.noticias} />
                                                <BottomCard >
                                                  <p style={{ marginLeft: "15px" }}>Notícias e Eventos</p>
                                                  <ArrowImg src={ArrowCircle} />
                                                </BottomCard>
					</CardContainer>
				</Column>
			</DivCards>
                  <Row jc="center" style={{ marginTop: "65px" }}>
                    <img style={{ width: "100%" }} src={BannerBNDES} alt="bndes" />
                  </Row>
		</Column>
	)
}

const BottomCard = styled.div`
  background: #fff;
  width: 100%;
  position: absolute;
  height: 45px;
  opacity: .85;
  bottom: 0;
  left: 0;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ArrowImg = styled.img`
  width: 32px; 
  marginLeft: 15px; 
  margin-top: 2.5px; 
  margin-right: 30px;
`

const DivCards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  flex-wrap: wrap;
  @media (max-width: 800px) {
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

const Line = styled.div`
  flex: 1;
  background: #81161B;
  height: 2px;
  min-width: 50px;
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
	height: 100%;
        position: relative;
        border-radius: 22px;	
        border:none;
	overflow: hidden;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	flex-wrap: no-wrap;
	margin-bottom: 10px;
	margin-right: 15px;
        box-shadow: 0px 3px 6px #00000029;
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
