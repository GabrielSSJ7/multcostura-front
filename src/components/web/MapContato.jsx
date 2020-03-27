import React, { Component } from 'react'
import styled from 'styled-components'

import setApi from '../../api'


import { Row, Column, Select} from '../../static/styled-components/base'
let infobox, map
export default class MapContato extends Component {

	constructor (props) {
		super(props);
		this.state = {
			states: [],
			cities: [],
			state: {
				id: 'Selecione um estado',
				name: null
			},
			city: null,
			resellersFound: false
		}
	}

	async componentDidMount () {
		this.setMultViewMap()
	}

	async setMultViewMap() {
		map = new Microsoft.Maps.Map(document.getElementById('map-contato'),{})
  		Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
		    var searchManager = new Microsoft.Maps.Search.SearchManager(map);
		    var requestOptions = {
		        bounds: map.getBounds(),
		        where: `Rua Newton Prado, 71 Bom Retiro São Paulo SP`,
		        callback: function (answer, userData) {
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

	render() {
		return (<Row id="map-contato" style={{ width: "87%", height: "500px", marginBottom: "10px", marginLeft: '10px', minWidth: "300px", flex: 1 }}></Row>)
	}
}

const Item = styled.p`
	margin: 0;
`

const CardContainer = styled.div`
	flex: 1;
  	min-width: 250px;
  	max-width: 250px;
	max-height: 300px;
	overflow: hidden;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	padding: 15px;
	flex-wrap: no-wrap;
	margin-bottom: 10px;
	margin-right: 10px;
	img {
		width: 100%;
		max-width: 230px;
		display: block;
		margin: auto
	}
	:hover {
		box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	}
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

}
`;

const SearchBtn = styled.span`
	height: 16px;
	background: #282D90 0% 0% no-repeat padding-box;
	box-shadow: 1px 1px 6px #00000029;
	border-radius: 3px;
	opacity: 1;
	cursor: pointer;
	color: white;
	padding: 10px;
	transition: .3s;
	:hover {
		opacity: .8;
	}
`
