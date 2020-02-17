import React, { useEffect, useState } from 'react'

import setApi from '../src/api'

import { Row, Column } from '../src/static/styled-components/base'
import Template from '../src/components/templates/Web'
import Section1 from '../src/components/web/produto/Section1'
import Section2 from '../src/components/web/produto/Section2'

import loading from '../src/static/images/loading.gif'

export default function Produto ({ id }) {
	const [prod, setProd] = useState({ category: {}, specifications: null, images: [] })
	const [visLoading, setVisLoading] = useState(false)
	useEffect(() => {
		async function f() {
			setVisLoading(true)
			setApi()
				.get(`/machine/${id}`)
				.then(response => {
					console.log(response.data)
					setProd(response.data)
					setVisLoading(false)
				})
				.catch(err => {

				})
			
		}
		f();
	}, [])
	return (
		<Template>
			{visLoading ? 
			 <Row style={{ width: "100%" }} jc="center" ait="center"><img src={loading} style={{ width: "32px", height: "32px" }} /></Row> :
			 <Column style={{ width: "100%", paddingBottom: "55px" }}>
			   <Section1 prod={prod} />
			   <Section2 prod={prod} />
			 </Column>
			}
		</Template>
	)
}


Produto.getInitialProps = ({ query }) => {
	return { id: query.id }
}