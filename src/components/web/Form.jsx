import React from 'react'
import styled from 'styled-components'

import { Row, Column } from '../../static/styled-components/base'

export default function Form () {
	return <Column flex="1">
		<Row>
			<Input placeholder="Nome:"/>
		</Row>
		<Row>
			<Input placeholder="Endereço:"/>
		</Row>
		<Row>
			<Input placeholder="Bairro:" style={{ marginRight: "5px", flex: 2 }}/>
			<Input placeholder="Cidade:" style={{ flex: 1}}/>
		</Row>

		<Row>
			<Input placeholder="UF:" style={{ marginRight: "5px", flex: 1 }}/>
			<Input placeholder="Tel:" style={{ flex: 2 }}/>
		</Row>
		<Row>
			<Textarea placeholder="Mensagem" rows={8}></Textarea>
		</Row>
		<Row style={{ justifyContent: "flex-end" }}>
			<Button>Limpar</Button>
			<Button style={{ background: '#242873', marginLeft: "5px" }}>Enviar</Button>
		</Row>
	</Column>
}


const Button = styled.span`
	height: 36px;
	background: #B9B9B9 0% 0% no-repeat padding-box;
	border-radius: 4px;
	text-align: left;
	/*font: Regular 18px/24px Segoe UI;*/
	font-family: Segoe UI;
	font-size: 18px;
	letter-spacing: 0;
	color: #FFFFFF;
	opacity: 1;
	padding-top: 5px;
	padding-left: 15px;
	padding-right: 15px;
	cursor: pointer;
	transition: .2s;
	:hover {
		opacity: .8;
	}
`

const Input = styled.input`
	background: #ECECEC 0% 0% no-repeat padding-box;
	border: none;
	height: 38px;
	border-radius: 5px;
	opacity: 1;
	width: 100%;
	margin-bottom: 5px;
	padding-bottom: 0;
    padding-top: 15px;
    padding-left: 10px;
    outline: none;
`

const Textarea = styled.textarea`
	background: #ECECEC 0% 0% no-repeat padding-box;
	border: none;
	border-radius: 5px;
	opacity: 1;
	width: 100%;
	margin-bottom: 5px;
	padding-bottom: 0;
    padding-top: 15px;
    padding-left: 10px;
    outline: none;
    resize: none;
`