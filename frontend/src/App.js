import "./App.css";
import React, { useEffect } from "react";
import { Painel } from "./pages/Painel";
import axios from "axios";

export default function App() {
  useEffect(() => {
    axios.get(
        "https://aerodatabox.p.rapidapi.com/flights/airports/icao/SBGR/2023-03-07T00:00/2023-03-07T06:00",
        '66173e4338msh5a33457ce127612p1df1dajsn83a0a313e41f','aerodatabox.p.rapidapi.com')
        
        axios.get('/chegadas', async (req, res) => {
          let chegada = null;
          let partida = null;
          console.log(chegada)
          console.log(partida)
      
        .then(() => {
        console.log("Deu tudo certo");
      })
      .catch(() => {
        console.log("Deu errado");
      });
    }, []);

      
  })
    return(
      <Painel />
      )
}