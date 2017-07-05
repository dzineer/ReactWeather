var React = require('react');
var WeatherTemperature = require('WeatherTemperature');

// var WeatherMessage = React.createClass({
//
//   render: function() {
//     var {temp, location} = this.props;
//     return (
//       <h3>It is {temp} in {location}</h3>
//     );
//   }
// });

var WeatherMessage = ({temp, location, unit}) => {
//  var {temp, location} = props;
  return (
    <h3 className="text-center">It is {temp} <WeatherTemperature unit={unit}/> in {location}</h3>
  );
}

module.exports = WeatherMessage;
