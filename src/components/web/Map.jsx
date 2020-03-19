import React, { Component } from 'react'
import styled from 'styled-components'

import setApi from '../../api'


import { Row, Column, Select} from '../../static/styled-components/base'
let infobox, map
export default class MapsQuest extends Component {

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
		const response = await setApi()
				.get("/dist/locates.json")
				
		this.setState({
			states: response.data.estados,
			cities: response.data.cidades
		})

		if (!this.props.showMultcostura)
			this.loadMapScenario()
		else 
			this.setMultViewMap()
	}

	async onChangeState(e) {
		const value = e.target.value.split("-")
		this.setState({
			state: { 
				id: value[0],
				name: value[1]
			},
			city: 'Selecione uma cidade'
		})
	}

	onChangeCity(e) {
		this.setState({
			city: e.target.value
		})
	}

	 //let map, infobox;
     async loadMapScenario() {
     	 const response = await setApi().get('/reseller')
        //setResellers(response.data)
        const revendedores = response.data
          map = new Microsoft.Maps.Map(document.getElementById('map'), {})
          //setMap(map)
          for (let revendedor in revendedores){
            //Create an infobox at the center of the map but don't show it.
            infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
              visible: false
            });

            //Assign the infobox to a map instance.
            infobox.setMap(map);

            //Create a pushpin at a random location in the map bounds.
            var randomLocation = Microsoft.Maps.TestDataGenerator.getLocations(1, map.getBounds());
            
            var pin = new Microsoft.Maps.Pushpin({
              latitude: revendedores[revendedor].maps.lat,
              longitude: revendedores[revendedor].maps.lng,
              altitude: 0,
              altitudeReference: -1
            });

            //Store some metadata with the pushpin.
            pin.metadata = {
                title: revendedores[revendedor].name,
                description: "Endereço: " + revendedores[revendedor].address + "<br/> Tel: " + revendedores[revendedor].phone + "<br/> E-mail: " + revendedores[revendedor].email
            };

           //Add a click event handler to the pushpin.
            Microsoft.Maps.Events.addHandler(pin, 'click', this.pushpinClicked);

            //Add pushpin to the map.
            map.entities.push(pin);
          }
        }

        pushpinClicked(e) {
          //Make sure the infobox has metadata to display.
          if (e.target.metadata) {
            //Set the infobox options with the metadata of the pushpin.
            infobox.setOptions({
                location: e.target.getLocation(),
                title: e.target.metadata.title,
                description: e.target.metadata.description,
                visible: true
            });
          }
        }

	componentDidUpdate(prevProps, prevState) {

  		if (this.state.state !== prevState.state) {
	    	this.setViewMap(this.state.state, this.state.city);
  		}

		if (this.state.city !== prevState.city) {
	    	this.setViewMap(this.state.state, this.state.city);
  		}  		

  		if (prevProps !== this.props) {
  			console.log(this.props.showMultcostura)
  			if (this.props.showMultcostura)
  				this.setMultViewMap();
  		}
	}

	async setViewMap(state, city) {
		//const map = new Microsoft.Maps.Map(document.getElementById('map'), {})
		//const { map } = this.props
		if (map) {
	  		if (state || city){
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
  		}
	}

		async setMultViewMap() {
			console.log("setMultViewMap")
			map = new Microsoft.Maps.Map(document.getElementById('map'),{})
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
		return (
			this.props.showMultcostura ? <Row id="map" style={{ width: "87%", height: "500px", marginBottom: "10px", marginLeft: '10px', minWidth: "300px", flex: 1 }}></Row>
			 : <Column style={{ width: "100%", marginTop: "100px" }} ait="center">
				<h1 style={{ color: "#5B5B5B" }}>Encontre um revendedor próximo a você!</h1>

				<Row jc="space-around" ait="center" style={{ width: "50%", flexWrap: "wrap"}}>
					<Select 
						style={{ 
							minWidth: "120px", 
							margin: "0 5px",
							width: "160px",
							padding: "0",
							background: "transparent linear-gradient(180deg, #FCF6F6 0%, #D6D6D6 100%) 0% 0% no-repeat padding-box", 
							height: "40px" 
						}} 

						onChange={this.onChangeState.bind(this)}
						value={`${this.state.state.id}-${this.state.state.name}`}
					>
						<option value={'Selecione um estado'} >Selecione um estado</option>
						{this.state.states.map((st, i) => <option key={i} value={`${st.id}-${st.estado}`}>{st.estado}</option>)}
					</Select>

					<Select 
						style={{ 
							minWidth: "120px", 
							width: "160px",
							margin: "0 5px", 
							padding: "0",
							background: "transparent linear-gradient(180deg, #FCF6F6 0%, #D6D6D6 100%) 0% 0% no-repeat padding-box", 
							height: "40px" 
						}}
						onChange={this.onChangeCity.bind(this)}
						value={this.state.city}
					>
						<option value='Selecione uma cidade'>Selecione uma cidade</option>
						{this.state.cities.filter(cit => cit.estadoId == this.state.state.id ? cit : false ).map((cit, i) => <option key={i} value={cit.id}>{cit.cidade}</option>)}
					</Select>


					
				</Row>

				<Row id="map" style={{ width: "70%", height: "500px", marginBottom: "10px", marginTop: "10px" }}></Row>
					
				<Row style={{ flexWrap: "wrap"}}>

					{this.props.resellers.filter(resel => {
						const { city, state } = this.state
						if((new RegExp(state.id).test(resel.address) || new RegExp(state.name).test(resel.address)) && new RegExp(city).test(resel.address)) {
							return resel
						} else {
							if ((new RegExp(state.id).test(resel.address) || new RegExp(state.name).test(resel.address))){ 
								return resel
							} 
						}
					}).map((resel, i) => 
						<CardContainer key={i}>
							<Column>
								<Item>{resel.name}</Item>
								<hr style={{ width: "100%" }} />
								<Item>{resel.address}</Item>
								<Item>Tel: {resel.phone}</Item>
								<Item>E-mail: {resel.email}</Item>
							</Column>
						</CardContainer>)}

				</Row>
			</Column>
		)
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
