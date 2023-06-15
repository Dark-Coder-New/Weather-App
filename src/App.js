import React, {useState} from "react";
import summer from "./images/summer.jpg";
import winter from "./images/winter.jpg";
 let arr = ["January","February","March","April","May","June","July","August","September","October","November","December"];


const App = () => {

    let [latitude, setLatitude] = useState("");
    let [longitude, setLongitude] = useState("");
    let [hemishpere, setHemishpere] = useState("");
    let [month, setMonth] = useState("");
    let [condition, setCondition] = useState("");
     
  function getLocation(){
      if(navigator.geolocation){

           navigator.geolocation.getCurrentPosition(
              (location) =>{ 
                   console.log(location);
                    setLatitude(location.coords.latitude);
                    setLongitude(location.coords.longitude);
                     
                // latitude >0 ? setHemisphere("Northen Hrmisphere") : latitude < 0 ? setHemisphere("Southern Hemisphere") : setHemisphere("Equator");
                  
                if(location.coords.latitude > 0){
                  setHemishpere("Northen Hemishpere");
                }else if(location.coords.latitude < 0){
                  setHemishpere("Southern Hemishpere");
                }
                else{
                  setHemishpere("Equator");
                }
                           
              }
           );
         
       }

      // get current month: 

     
      let month = new Date().getMonth() // 0-11
      setMonth(month);

  }

    //  if(hemishpere=="Northen Hemishpere" && month>=2 &&  month<=9) || (hemishpere=="Southern Hemishpere" && month<2 ||  month>9){
    //      setCondition(true)
    //  }



  return(
    <div>
          <h1>Latitude: {latitude}</h1>
          <h1>Longitude: {longitude}</h1>
          <h1>Hemisphere: {hemishpere}</h1>
          <h1>Month: {month}</h1>

            
            
          {
             (month!=="" && hemishpere) && (
                   (hemishpere=="Northen Hemishpere" && month>=2 &&  month<=9) || (hemishpere=="Southern Hemishpere" && month<2 ||  month>9)? (
                      <div>
                            <h1> Summer Season</h1>
                            <img src={summer} alt="Summer Season" />
                      </div>
                    ): (
                      <div>
                      <h1> Winter Season</h1>
                      <img src={winter} alt="Winter Season" />
                    </div>
                    )
             )
          }



           <button onClick={getLocation}> Get Location</button>
    </div>
  )
}

export default App;


