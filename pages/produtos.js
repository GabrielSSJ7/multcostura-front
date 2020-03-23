import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import setApi from '../src/api'

import { Row, Column, Title } from '../src/static/styled-components/base'
import Template from '../src/components/templates/Web'
import SlideWeb from '../src/components/web/SlideWeb'
import Filters from '../src/components/web/Filters'
import ListProds from '../src/components/web/ListProds'

import loading from '../src/static/images/loading.gif'

export default function Produtos ({ id, type, search }) {
	const router = useRouter()
	
	const [pageData, setPageData] = useState([])
	const [visLoading, setVisLoading] = useState(false)
	const [images, setImages] = useState([])
	useEffect(() => {
	  setVisLoading(true)
	  async function f () {
	  	
		  		if(type != "tools") {
					setApi()
					  .get(`/${type}/${id}`)
					  .then(res => {
					  	setPageData(res.data)
						setImages(res.data.bannerImages ? res.data.bannerImages : [])
						setVisLoading(false)
					  })
					  .catch(err => {
					  	setVisLoading(false)
					  	console.log("produtos error => ", err)
					  })
				} else {
					setVisLoading(false)
				}
			
		}

		f();
	}, [router.query])

	function setLogo () {
		if (pageData.logo) {
			return <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}><img src={pageData.logo} style={{ width: "120px" }} /></div>
		} else if (pageData.name) {
			return <div style={{ flex: 1, textAlign: "center", minWidth: "200px"}}>
				<Title style={{ textAlign: "center", paddingLeft: "10%"}}>{pageData.name}</Title>
			</div>
		}
	}

	return (
		<Template>
			{visLoading ? 
			<Row jc="center" ait="center" style={{ width: "100%" }}><img src={loading} style={{ width: "32px"}} /> </Row> : 
			<Column style={{ width: "100%" }}>
				<SlideWeb images={images.map(img => img.image)} />
				<DivLogoFilters style={{ width: "100%", margin: "35px 0", flexWrap: 'wrap' }} >
					{setLogo()}
					<Filters type={type} S/>
				</DivLogoFilters>
				<ListProds id={id} type={type} search={search} />
			</Column>}
		</Template>
	)
}

const DivLogoFilters = styled.div`
	@media(max-width: 1025px) {
		flex-direction: column;

		h1 {
			padding: 0 !important
		}
	}
	display: flex;
  	flex-wrap: wrap
`


Produtos.getInitialProps = ({ query }) => {
	return { type: query.type, id: query.id, search: query.search }
}