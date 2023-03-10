import React from "react";
import axios from "axios"

// const apiUrl = "https://aerodatabox.p.rapidapi.com/flights/airports/icao/SBGR/2023-03-07T00:00/2023-03-07T06:00"

// const api = axios.create({
//   baseURL:apiUrl
// })
// const options = {
//     method: 'GET',
//     url: 'https://aerodatabox.p.rapidapi.com/flights/airports/icao/SBGR/2023-03-07T00:00/2023-03-07T06:00',
//     params: {
//       withLeg: 'true',
//       withCancelled: 'true',
//       withCodeshared: 'true',
//       withCargo: 'true',
//       withPrivate: 'true',
//       withLocation: 'false'
//     },
//     headers: {
//       'X-RapidAPI-Key': '66173e4338msh5a33457ce127612p1df1dajsn83a0a313e41f',
//       'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com',
//     }
//   };

//   options.get('/chegadas', async (req, res) => {
//     let chegada = null;
//     let partida = null;
//     let data = buscar()

//     await data.then(function(response) {
//         console.log("Deu Certo")
//         // chegada = response.data.arrivals
//         // partida = response.data.departures
        
//     }).catch (function(error) {
//       console.log("Deu errado")
//         // console.error(error);
//     });

//     return res.json([chegada, partida])
        
// })
// options.get('/partidas', (req, res) => {
//     res.send('Partidas')
// })

// async function buscar () {
//     return axios.request(options)
// }

