var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var WeatherError = require('WeatherError');
var openWeatherMap = require( 'openWeatherMap' );

var Weather = React.createClass({
  getInitialState: function() {
    return {
      location: '',
      temp: 0,
      isLoading: false,
      message: '',
      units: '&#8457;'
    };
  },
  handleSearch: function( location ) {
      var that = this;

      console.log( 'success', location );

      this.setState({ isLoading: true });

      openWeatherMap.getTemp( location )
      .then( function(temp) {
        // debugger;
        that.setState({
          location: location,
          temp: temp,
          isLoading: false,
          message: '',
        });
      })
      .catch( function(error) {
       //  debugger;
        that.setState({
          location: '',
          temp: 0,
          isLoading: false,
          message: error.message,
        });

        console.log('Error', error);
      });

  },
  render: function() {
    var {isLoading, temp, location, message, units} = this.state;

    function renderMessage() {
      if ( isLoading ) {
        return (
          <h3 className="text-center">Fetching weather...</h3>
        );
      } else if ( temp && location ) {
        return (
          <WeatherMessage temp={temp} location={location} units={units} />
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
