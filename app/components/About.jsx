var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This is a weather application on React. I have built this for The Complete Ract Web App Developer Course.
      </p>
      <p>
        Here are some of the tools I used
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react" target="_blank">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - I used Open Weather Map to search or weather data by city name.
        </li>
      </ul>
    </div>
  );
}

module.exports = About;
