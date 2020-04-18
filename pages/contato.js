import React, { useEffect, useState } from 'react'

import setApi from '../src/api'

import Head from 'next/head'

import Template from '../src/components/templates/Web'
import SlideWeb from '../src/components/web/SlideWeb'
import Map from '../src/components/web/MapContato'
import Form from '../src/components/web/Form'

export default function Contato () {
	const [mapEl, setMap] = useState([])
	const [banner, setBanner] = useState('')
	useState(() => {
	  async function f() {
		  	setApi()
		     .get('/institutional/contactBanner')
		     .then(response => {
		    setBanner(response.data)
		    })
		    .catch(err => {})
	  }
	  f();
	
	  setTimeout(() => {
	  	loadMapScenario();
	  }, 2000)
	  
	}, [])

	//let map, infobox;
    async function loadMapScenario() {
    	console.log("si")
        const map = await new Microsoft.Maps.Map(document.getElementById('map-contato'), {})
        setMultViewMap(map)
    }

	function setMultViewMap(map) {
  		Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
		    var searchManager = new Microsoft.Maps.Search.SearchManager(map);
		    var requestOptions = {
		        bounds: map.getBounds(),
		        where: `Rua Newton Prado, 71 Bom Retiro São Paulo SP`,
		        callback: function(answer, userData) {
		        	var pushpin = new Microsoft.Maps.Pushpin(
		        		new Microsoft.Maps.Location(
		        			answer.results[0].location.latitude, answer.results[0].location.longitude),
		        			{ text: 'M', title: 'Multcostura', subTitle: 'Rua Newton Prado, 71 Bom Retiro São Paulo SP' }
		        		);
					map.entities.push(pushpin);

		            map.setView({ center: new Microsoft.Maps.Location(answer.results[0].location.latitude, answer.results[0].location.longitude), zoom: 17 });
		        }
		    };
			searchManager.geocode(requestOptions);
		});
	}



	return (
		<Template>
			<Head>
				<script src={`http://www.bing.com/api/maps/mapcontrol?callback=loadMapScenario&key=${process.env.mapsKey}`} defer />
			</Head>
			<div style={{ display: "column", width: "100%" }}>
				<SlideWeb fixed images={banner} />
				<h1 style={{ color: "#5B5B5B", textTransform: "uppercase",   margin: "6.89% auto 2%", width: "88.46%" }}>Contato</h1>
				<div style={{ display: "flex", width: "88.46%", margin: "0 auto", flexWrap: 'wrap' }}>
				  <Form  />
				    <style>{`
		  				#map-contato {
		  					height: 418px !important;
		  				}
		  			`}</style>
				  <div key='as' id="map-contato" style={{ width: "87%", height: "500px", marginBottom: "10px", marginLeft: '10px', minWidth: "300px", flex: 1 }} />
				</div>
			</div>
		</Template>
	)
}
