import React, { useEffect, useState } from 'react'
import { View, Text, TouchbleOpacity } from 'react-native'

import setApi from '../src/api'

import Template from '../src/components/templates/Web'
import SlideWeb from '../src/components/web/SlideWeb'
import Map from '../src/components/web/Map'
import Form from '../src/components/web/Form'

export default function Contato () {
	const [map, setMap] = useState({})
	const [banner, setBanner] = useState('')
	useState(() => {
	  async function f() {
		  	setApi()
		     .get('/institutional/contactBanner')
		     .then(response => {
		    setBanner(response.data)
		    })
		    .catch(err => {})

		setMap(new Microsoft.Maps.Map(document.getElementById('map'),{}));
	  }

	  f();
	}, [])

	async function setViewMap() {
	  		Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
			    var searchManager = new Microsoft.Maps.Search.SearchManager(map);
			    var requestOptions = {
			        bounds: map.getBounds(),
			        where: `${city ? city + ', ' + state.id : state.name}`,
			        callback: function (answer, userData) {
			            map.setView({ center: new Microsoft.Maps.Location(answer.results[0].location.latitude, answer.results[0].location.longitude), zoom: 11 });
			        }
			    };
			searchManager.geocode(requestOptions);
		});
	}

	return (
		<Template>
			<div style={{ display: "column", width: "100%" }}>
				<SlideWeb fixed images={banner} />
				<h1 style={{ color: "#5B5B5B", textTransform: "uppercase", marginLeft: "11.53%", marginTop: "6.89%"}}>Contato</h1>
				<div style={{ display: "flex", width: "88.46%", margin: "0 auto" }}>
				  <Form  />
				  <Map showMultcostura />
				</div>
			</div>
		</Template>
	)
}