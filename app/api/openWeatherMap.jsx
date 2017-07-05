var axios = require( 'axios' );

// API Key: bb23a44fb984187e642a9707fa936b4b
const API_KEY = 'bb23a44fb984187e642a9707fa936b4b';
const UNITS = 'imperial';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid='+API_KEY;

module.exports = {
  getTemp: function( location, unit ) {

    var encodedLocation = encodeURIComponent( location );
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&units=${unit}`;

    // debugger;

    return axios.get( requestURL )
    .then( function(response) {
      // debugger;

      console.log( response );

      if( typeof response.data.cod === "number" && typeof response.data.message === "string" ) {
          console.log( "Error", error.response.data.message );
      } else {
        console.log( response.data.main.temp );
        return response.data.main.temp;
      }

    })
    .catch( function(error) {
      if( typeof error.response.data.message === "string" ) {
        console.log( "Error", error.response.data.message );
        throw new Error( error.response.data.message );
        // return error.response.data.message;
      }
    });

  }

}
