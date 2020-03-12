let map; 
function loadMapScenario(){
 map = new Microsoft.Maps.Map(document.getElementById('map'), {});
 return map
}



export default loadMapScenario()
