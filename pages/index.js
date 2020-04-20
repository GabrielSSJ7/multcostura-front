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
    
    setTimeout(() => {
      loadMapScenario()
    }, 1500)

  }, [])
  

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
      <Column style={{ width: "100%" }}>
        <SlideWeb images={images.map(img => img.image)} balls={true} />
        <Home />
        {/*Map map={map} resellers={resellers}/>*/}
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: "center", marginTop: '100px' }}>
          <h1 style={{ color: "#5B5B5B" }}>Nossa localização em São Paulo!</h1>
          <div 
            key='as' 
            id="map-contato" 
            style={{ 
              width: "70%", 
              height: "500px", 
              marginBottom: "10px", 
              marginTop: "10px", 
              border: "7px solid #DCDCDC",
              borderRadius: "10px" 
            }}
          />
        </div>
      </Column>
    </Template>
  );
};

IndexPage.getInitialProps = ({ reduxStore }) => {
  return {};
};

export default IndexPage
