var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var WeatherTemperature = require('WeatherTemperature');
var WeatherError = require('WeatherError');
var openWeatherMap = require( 'openWeatherMap' );

const TEMP_C = 'C';
const TEMP_F = 'F';

var Weather = React.createClass({
  getInitialState: function() {
    return {
      location: '',
      temp: 0,
      isLoading: false,
      message: '',
      unit: TEMP_F
    };
  },
  handleSearch: function( options ) {
      var that = this;
      var unit = 'imperial';
      console.log( 'success', options );

      this.setState(options);
      this.setState({ isLoading: true });

      if( typeof options.unit === "string" && options.unit == 'F' ) {
        unit = 'imperial';
      } else if(  typeof options.unit === "string" && options.unit == 'C' ) {
        unit = 'metric';
      }

      openWeatherMap.getTemp( options.location, unit )
      .then( function(temp) {
        // debugger;
        that.setState({
          location: options.location,
          temp: temp,
          isLoading: false,
          message: '',
          unit: options.unit
        });
      })
      .catch( function(error) {
       //  debugger;
        that.setState({
          location: '',
          temp: 0,
          isLoading: false,
          message: error.message,
          unit: options.unit
        });

        console.log('Error', error);
      });

  },
  render: function() {
    var {isLoading, temp, location, message, unit} = this.state;

    function renderMessage() {
      if ( isLoading ) {
        return (
          <h3 className="text-center">Fetching weather...</h3>
        );
      } else if ( temp && location ) {
        return (
          <WeatherMessage temp={temp} location={location} unit={unit} />
        );
      }
    }

    function renderErrorMessage() {
      if( message.length > 0 ) {
        return (
          <WeatherError message={message} />
        )
      }
    }

    return (
      <div>
          <h1 className="text-center">Get Weather</h1>
          <WeatherForm onSearch={this.handleSearch} />
          {renderMessage()}
          {renderErrorMessage()}
      </div>
    );
  }
});

var message ='This is a message';
var name = 'Your name';

module.exports = Weather;
