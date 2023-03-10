import React, { useEffect, useState } from "react";
import "./Painel.css";
import axios from "axios"

export const Painel = () => {
    

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

    //   console.log(options)

    //   options.get('/chegadas', async (req, res) => {
    //     let chegada = null;
    //     let partida = null;
    //     let data = buscar()
    
    //     await data.then(function(response) {
    //         chegada = response.data.arrivals
    //         partida = response.data.departures
            
    //     }).catch (function(error) {
    //         console.error(error);
    //     });
    
    //     return res.json([chegada, partida])
            
    // })
    // // options.get('/partidas', (req, res) => {
    // //     res.send('Partidas')
    // // })
    
    // async function buscar () {
    //     return axios.request(options)
    // }
    
  return (
    <div className="container">
        <header>
            <div id="hora">11:30</div>
            <div>PARTIDAS</div>
            <div>Aeroporto de Brasília</div>  
        </header>
        
      <thead className="menu">
        <tr className="item">
          <th>VOO</th>
          <th>COMPANHIA</th>
          <th>DESTINO</th>
          <th>PORTÃO</th>
          <th>HORA</th>
          <th>OBSERVAÇÃO</th>
        </tr>
      </thead>
      <tbody className="menu2">
        <tr className="item2">
          <td id="ponto">001</td>
          <td id="ponto">Azul</td>
          <td id="ponto">Bahia</td>
          <td id="ponto">08</td>
          <td id="ponto">09:20</td>
          <td id="ponto">Pousado</td>
        </tr>
      </tbody>
    </div>
  );
};
