var React = require('react');
var WeatherInput = require('WeatherInput');
var WeatherOutput = require('WeatherOutput');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp){
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function (errorMessage){
      that.setState({
          isLoading: false
      });
      alert(errorMessage)
    });
  },
  render: function(){
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location){
        return <WeatherOutput temp={temp} location={location}/>
      }
    }

    return(
      <div>
        <h3>Get Weather</h3>
        <WeatherInput onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
