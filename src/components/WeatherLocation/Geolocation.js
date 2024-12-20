import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Clear from "./images/Clear.jpg";
import Clouds from "./images/Clouds.jpg";
import Drizzle from "./images/Drizzle.jpg";
import Rain from "./images/Rain.jpg";
import Snow from "./images/Snow.jpg";
import Thunderstorm from "./images/Thunderstorm.jpg";
import Fog from "./images/Fog.jpg";

const weatherImages = {
  Clear,
  Clouds,
  Drizzle,
  Rain,
  Snow,
  Thunderstorm,
  Fog,
};

export default function Geolocation() {
  const [weatherData, setWeatherData] = useState({
    locationName: "",
    weatherName: "Fog",
  });
  const weatherDataActive = function (name, weather) {
    const weatherMainList = [
      "Clear",
      "Clouds",
      "Drizzle",
      "Rain",
      "Snow",
      "Thunderstorm",
    ];

    const validatedWeather = weatherMainList.includes(weather)
      ? weather
      : "Fog";

    setWeatherData({
      locationName: name,
      weatherName: validatedWeather,
    });
  };

  const weatherSearch = function ({ latitude, longitude }) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude={part}&appid=b53e0e301571ed81576201a2a4fee23b`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json.name, json.weather[0].main);
        weatherDataActive(json.name, json.weather[0].main);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const accessToGeo = function ({ coords }) {
    const { latitude, longitude } = coords;
    const positionObj = {
      latitude,
      longitude,
    };

    weatherSearch(positionObj);
  };
  const askForLocation = function () {
    navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
      console.log(err); // 첫번째는 접근가능할 때, 두번째는 접근 못할 때.
    });
  };

  React.useEffect(() => {
    askForLocation();
  }, []);
  return (
    <BackgroundImg bgImage={weatherImages[weatherData.weatherName]}>
      <p>Location: {weatherData.locationName}</p>
      <p>Weather: {weatherData.weatherName}</p>
    </BackgroundImg>
  );
}

const BackgroundImg = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-position: center; */
`;
