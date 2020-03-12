import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'

import setApi from '../../api'

import { Row, Column } from '../../static/styled-components/base'
import loading from '../../static/images/loading.gif'

export default function ListProd ({ id, type, search })  {
	const router = useRouter();
	const [prods, setProds] = useState([])
	const [indexPag, setIndexPag] = useState(0)
	const [listProdsPag, setListProdsPag] = useState([])
	const [visLoading, setVisLoading] = useState(false)
	useEffect(() => {
		setVisLoading(true)
		async function f() {
			console.log(search)
			if (search) {
				let machines = { data: [] }
				let tools = { data: [] }
	  			try {
	  				 machines = await setApi().get(`/machine?search=${search}`)
	  				
					//setListProdsPag(groupBy(machines.data, 10))
					listP = machines.data
	  			} catch (e) {

	  			}

	  			try {
	  				 tools = await setApi().get(`/tools?search=${search}`)
	  				listP = tools.data
	  			} catch (e) {

	  			}
	  			setProds(machines.data.concat(tools.data))
	  			setListProdsPag(groupBy(machines.data.concat(tools.data), 10))
	  			setVisLoading(false)
	  		} else {


	  			if (type != "tools"){
					setApi()
					 .get(`machine?${type}=${id}`)
					 .then(res => {
					 	setProds(res.data)
					 	setListProdsPag(groupBy(res.data, 10))
					 	setVisLoading(false)
					 })
					 .catch(err => {
					 	setVisLoading(false)
					 })

				   return
				}

			setApi()
			  .get('/tools')
			  .then(response => {
			  	setProds(response.data)
				setListProdsPag(groupBy(response.data, 10))
				setVisLoading(false)
			  })
			  .catch(err => {
				setVisLoading(false)
			  })
	  		}
			
		}
		f();


	}, [id, type])



	function groupBy(arr, n) {
	  var group = [];
	  for (var i = 0, end = arr.length / n; i < end; ++i)
	    group.push(arr.slice(i * n, (i + 1) * n));
	  return group;
	}

	return (
		<Column style={{ width: "80%", margin: "0 auto", flexWrap: 'wrap' }} >
		  	{visLoading ? <img src={loading} style={{width: "32px", margin: "auto", display: "block"}}/> : 
		  	listProdsPag.length > 0 ? 
		  	  <Column>
		  	  	<h1>{ search ? 'Resultado da sua busca' : ''}</h1>
			  	<Row style={{ flexWrap: 'wrap' }}>
			  		
				  	{listProdsPag[indexPag].map(prod => 
				  	 <Column key={prod.id} style={{ width: "32%", cursor: "pointer", marginRight: "1.3%" }} onClick={() => router.push({ pathname: "/produto", query: { id: prod.id } })} >
				  	 	<Img src={prod.images.length > 0 ? prod.images[0] : ''} width="100%" height="240px" />
				  	 	<Name>{prod.name}</Name>
				  	 </Column>
			  		)}
		  		</Row>
			  	<Row jc="center" ait="center">
				  	<PagItem onClick={() => { indexPag < 0 ? '' : setIndexPag(indexPag-1)}}>{'<'}</PagItem>
				  	{listProdsPag.map((a, i) => <PagItem key={i} current={indexPag == i} onClick={() => setIndexPag(i)}>{i}</PagItem>)}
				  	<PagItem onClick={() => { listProdsPag.length == indexPag+1 ? '' : setIndexPag(indexPag+1)}}>{'>'}</PagItem>
				</Row>
			  </Column> 
			  :
			  <Name style={{margin: "auto"}}>Nenhuma máquina encontrada</Name>}
		</Column>
	)
}

const Name = styled.p`
	text-align: center;
	font-family: Segoe UI;
	letter-spacing: 0;
	color: #000000;
	opacity: 1;
`

const PagItem = styled.p`
	cursor: pointer;
	padding: 5px;
	transition: .2s;
	color: ${props => props.current ? 'red' : '#5B5B5B'};
	:hover {
		opacity: .8;
	}
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