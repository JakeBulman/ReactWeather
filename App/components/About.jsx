var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>Welcome to the About page. This app links you to the weather in the town you search for.</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.githup.io/react">React</a> -
          This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweatherapp.org">Open Weather App</a> -
          I used Open Weather App to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
}

module.exports = About;
