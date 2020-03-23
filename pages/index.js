import React, { useEffect, useState } from "react";
import Head from 'next/head'
import { Link } from "../routes";
import { connect } from "react-redux";
import { Column } from '../src/static/styled-components/base'
import Home from '../src/components/web/home/Home'
import Map from '../src/components/web/Map'
import SlideWeb from '../src/components/web/SlideWeb'
import Template from '../src/components/templates/Web'
import setApi from '../src/api'



const IndexPage = () => {
  const [resellers, setResellers] = useState([]);
	const [images, setImages] = useState([])
  const [map, setMap] = useState(null)
  const [infobox, setInfobox] = useState()

  useEffect(() => {
  	async function async() {

      setApi()
  			.get('/institutional/homeBanners')
  			.then(res => {
  				setImages(res.data)
  			})
  			.catch(err => {

  			})

      try{
        const response = await setApi().get('/reseller')
        setResellers(response.data)
        const revendedores = response.data

        let map, infobox;
        function loadMapScenario() {
          map = new Microsoft.Maps.Map(document.getElementById('map'), {})
          setMap(map)
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
            Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked);

            //Add pushpin to the map.
            map.entities.push(pin);
          }
        }

        function pushpinClicked(e) {
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

        //adMapScenario();

      } catch (e) {
        console.log(e)
      }
  	}   
  	async();
  }, [])
  

  return (
    <Template>
      <Column style={{ width: "100%" }}>
        <SlideWeb images={images.map(img => img.image)} balls={true} />
        <Home />
        <Map map={map} resellers={resellers}/>
      </Column>
    </Template>
  );
};

IndexPage.getInitialProps = ({ reduxStore }) => {
  return {};
};

export default IndexPage
