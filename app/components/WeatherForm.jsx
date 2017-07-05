var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var options = {};

    var location = this.refs.location.value;
    debugger;
    var unit = this.refs.unit.value;

    if(location.length > 0) {
      this.refs.location.value = '';
      options.location = location;
    }

    if(unit.length > 0) {
      options.unit = unit;
    }

    this.props.onSearch( options );

  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>

          <div>
            <select ref="unit" placeholder="Enter city name" >
              <option defaultValue="-1">Choose Temperature Unit</option>
              <option value="F">Fahrenheit</option>
              <option value="C">Celcius</option>
            </select>
          </div>

          <div>
            <input type="text" ref="location" placeholder="Enter city name" />
          </div>

          <div>
            <button className="button hollow expanded">Get Weather</button>
          </div>

        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
