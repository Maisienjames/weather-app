import React from "react";
import PropTypes from "prop-types";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__maxTemperature">
        Max: {temperature.max}&deg;C
      </div>
      <div className="forecast-details__minTemperature">
        Min: {temperature.min}&deg;C
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}%</div>
      <div className="forecast-details__wind_speed">Speed: {wind.speed}mph</div>
      <div className="forecast-details__wind_direction">
        Direction: {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    description: PropTypes.string,
    icon: PropTypes.string,
    humidity: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
