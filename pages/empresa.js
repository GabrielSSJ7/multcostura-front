import React, { useEffect, useState } from 'react'

import setApi from '../src/api'

import Template from '../src/components/templates/Web'
import SlideWeb from '../src/components/web/SlideWeb'
import Content from '../src/components/web/empresa/Content'

import { Row, Column } from '../src/static/styled-components/base'

import loading from '../src/static/images/loading.gif'

export default function Empresa () {
	const [banner, setBanner] = useState(null)
	const [visLoad, setVisLoad] = useState(false)
	useEffect(() => {
		async function f() {
			setVisLoad(true)
			setApi()
			  .get('/institutional/enterpriseBanner')
			  .then(response => {
			  	setBanner(response.data)
			  	setVisLoad(false)
			  })
			  .catch(err => {
				setVisLoad(false)
			  })
		}

		f();
	}, [])
	return (
		<Template>
			
			  {visLoad ? 
			  	<Column style={{ width: "100%" }} jc="center" ait="center"><img src={loading} style={{ width: "32px", height: "32px" }} /></Column> :
			  	<Column style={{ width: "100%" }}>
			  	  <SlideWeb images={banner} fixed />
			      <Content />
			    </Column>
			  }
			
		</Template>
	)
}