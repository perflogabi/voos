
const express = require('express');

const router = express.Router()

const axios = require("axios");

const options = {
    method: 'GET',
    url: process.env.API_URL,
    params: {
      withLeg: 'true',
      withCancelled: 'true',
      withCodeshared: 'true',
      withCargo: 'true',
      withPrivate: 'true',
      withLocation: 'false'
    },
    headers: {
      'X-RapidAPI-Key': process.env.RapidAPI_KEY,
      'X-RapidAPI-Host': process.env.RapidAPI_HOST,
    }
  };

//Get all Method
router.get('/chegadas', async (req, res) => {
    let chegada = null;
    let partida = null;
    let data = getByCodAirport()

    await data.then(function(response) {
        chegada = response.data.arrivals
        partida = response.data.departures
        
    }).catch (function(error) {
        console.error(error);
    });

    return res.json([chegada, partida])
        
})
router.get('/partidas', (req, res) => {
    res.send('Partidas')
})

async function getByCodAirport () {
    return axios.request(options)
}

module.exports = router;