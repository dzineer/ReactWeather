var React = require('react');

// var WeatherError = React.createClass({
//
//   render: function() {
//     var {message} = this.props;
//     return (
//       <h3>{message}</h3>
//     );
//   }
// });

var WeatherError = (props) => {
  var {message} = props;
  return (
    <h3>{message}</h3>
  );
}

module.exports = WeatherError;
