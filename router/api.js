const express = require('express')
const api = express();
const axios = require('axios');
const { validateWeather } = require('../validator/api')

///weather route
api.get("/weather", validateWeather, async (req, res) => {
    // Get the city from the query parameters
    const city = req.query.city;
    const apiKey = "a64085b80b93bf7eab65e7c45e01ab4d"; 
    const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    let weather;
    let  customWeather;
    let response;
    let error = null;
    try {
      response = await axios.get(APIUrl);
      weather = response.data;
      customWeather = {'city' : weather["name"], 'temperature': weather["main"].temp +`°C`, 'weather': weather["weather"][0].main}
    } catch (error) {
      weather = null;
      error = "Error, Please try again";
    }
    res.json(customWeather);
  });

module.exports = api ;
