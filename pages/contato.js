import React, { useEffect, useState } from 'react'

import setApi from '../src/api'

import Template from '../src/components/templates/Web'
import SlideWeb from '../src/components/web/SlideWeb'
import Map from '../src/components/web/Map'
import Form from '../src/components/web/Form'

export default function Contato () {
	//const [map, setMap] = useState({})
	const [banner, setBanner] = useState('')
	useState(() => {
	  async function f() {
		  	setApi()
		     .get('/institutional/contactBanner')
		     .then(response => {
		    setBanner(response.data)
		    })
		    .catch(err => {})

		//setMap(new Microsoft.Maps.Map(document.getElementById('map'),{}));
	  }

	  f();
	}, [])



	return (
		<Template>

			<div style={{ display: "column", width: "100%" }}>
				<SlideWeb fixed images={banner} />
				<h1 style={{ color: "#5B5B5B", textTransform: "uppercase",   margin: "6.89% auto 2%", width: "88.46%" }}>Contato</h1>
				<div style={{ display: "flex", width: "88.46%", margin: "0 auto", flexWrap: 'wrap' }}>
				  <Form  />
				    <style>{`
		  				#map {
		  					height: 418px !important;
		  				}
		  			`}</style>
				  <Map showMultcostura />
				</div>
			</div>
		</Template>
	)
}