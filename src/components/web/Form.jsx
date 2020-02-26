import React, { useState } from 'react'
import styled from 'styled-components'
import setApi from '../../api'

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";




import { Row, Column } from '../../static/styled-components/base'

import loading from '../../static/images/loading.gif'

export default function Form () {

	const [snackBar, setSnackBar] = useState({
	  result: "success",
	  open: false,
	  message: ""
	});
	const [form, setForm] = useState({
		nome: '',
		endereco: '',
		bairro: '',
		cidade: '',
		uf: '',
		tel: '',
		mensagem: ''
	})
	const [visLoad, setVisLoad] = useState(false)

	function handleChange(e) {
		setForm({...form, [e.target.name]: e.target.value })
	}

	function sendMail () {
		setVisLoad(true)
		const val = validateFields()
		if (val.ok) {
		setApi()
		  .post('/email', {...form})
		  .then(response => {
		  	setVisLoad(false)
		  	cleanForm();
		  	setSnackBar({
				open: true,
				result: 'success',
				message: 'E-mail enviado com sucesso, em breve retornaremos o seu contato!'
			})
		  })
		  .catch(err => {
		  	setVisLoad(false)
		  	console.log('error => ', err)
		  })
		} else {
			setVisLoad(false)
			setSnackBar({
				open: true,
				result: 'error',
				message: val.message
			})
		}
	}

	function cleanForm() {
		setForm({
			nome: '',
			endereco: '',
			bairro: '',
			cidade: '',
			uf: '',
			tel: '',
			mensagem: ''
		})
	}

	function validateFields() {
		const keys = Object.keys(form)
		let ok = true;
		let emptyF = []
		for (let k in keys) {
			if (!form[keys[k]]) {
				emptyF.push(keys[k].toUpperCase())
				ok = false
			}
		}

		return { ok, message: `Campo${emptyF.length > 1 ? 's' : ''} ${emptyF.toString().replace(/\W+/g, ', ')} vazios` }
	}

	function handleClose() {
		setSnackBar({ ...snackBar, open: false })
	}

	return <>
	 {visLoad ? 
	 	<Column flex="1" jc="center" ait="center"><img src={loading} style={{ width: '64px', height: '64px'}} /></Column> : 
	 	<Column flex="1" style={{ minWidth: "300px", marginBottom: "20px"}}>
	 	<Snackbar
          open={snackBar.open}
          autoHideDuration={4500}
          onClose={handleClose}
        >
          <Alert severity={snackBar.result}>{snackBar.message}</Alert>
        </Snackbar>
		<Row>
			<Input placeholder="Nome:" name="nome" onChange={handleChange} value={form.nome}/>
		</Row>
		<Row>
			<Input placeholder="Endereço:" name="endereco" onChange={handleChange} value={form.endereco}/>
		</Row>
		<Row>
			<Input placeholder="Bairro:" style={{ marginRight: "5px", flex: 2 }} name="bairro" onChange={handleChange} value={form.bairro}/>
			<Input placeholder="Cidade:" style={{ flex: 1}} name="cidade" onChange={handleChange} value={form.cidade}/>
		</Row>

		<Row>
			<Input placeholder="UF:" style={{ marginRight: "5px", flex: 1 }} name="uf" onChange={handleChange} value={form.uf}/>
			<Input placeholder="Tel:" style={{ flex: 2 }} name="tel" onChange={handleChange} value={form.tel}/>
		</Row>
		<Row>
			<Textarea placeholder="Mensagem" rows={8} name="mensagem" onChange={handleChange} value={form.mensagem}></Textarea>
		</Row>
		<Row style={{ justifyContent: "flex-end" }}>
			<Button onClick={cleanForm}>Limpar</Button>
			<Button onClick={sendMail} style={{ background: '#242873', marginLeft: "5px" }}>Enviar</Button>
		</Row>
		</Column>}
	</>
	
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