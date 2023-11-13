import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Converter = () => {
  const [coins, setCoins] = useState([]);
  const [records1, setRecords1] = useState([]);
  const [records2, setRecords2] = useState([]);

  useEffect(() => {
    axios.get("https://api.binance.com/api/v3/ticker/price")
      .then((response) => {
        setCoins(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const Filter1 = (event) => {
    setRecords1(coins.filter(f => f.symbol.toUpperCase() == event.target.value.toUpperCase()))
  }

  const Filter2 = (event) => {
    setRecords2(coins.filter(f => f.symbol.toUpperCase() == event.target.value.toUpperCase()))
  }
  console.log(coins)

  return (
    <div className='h-full flex justify-center gap-32'>
      <div className='fixed text-center'>
        <h4 className='font-bold'>Exemplos de moedas:</h4>
        <ul>
          <li>YOYOBNB</li>
          <li>POWRBNB</li>
          <li>VENBTC</li>
          <li>RCNBNB</li>
          <li>BATETH</li>
        </ul>
      </div>
      <div className='flex-col justify-center mt-80'>
        <div className='text-center font-bold mb-5 text-3xl'>
            {records1.length > 0 ? (<h1 id='preco_moeda1' key={records1[0].symbol}>{records1[0].price}</h1>) : <h1>Pesquise</h1>}
            {records1.slice(1).map((t, i) => <li key={i}>{t.price}</li>)}
        </div>
        <input 
            type="text" 
            className='hover:shadow-lg p-4 rounded-full border w-full mb-6' 
            onChange={Filter1} 
            placeholder="Type a coin..."
          />

        <table className='table border w-full'>
          {
          records1.length > 0 ? (          
          <thead>
            <tr>
              <th>Sigla</th>
              <th>Preço</th>
            </tr>
          </thead>) : <p className='text-center'>Moeda não encontrada</p>
          }
          <tbody>
          { 
              records1.map((item, i) => (
              <tr key={i} className="border">
                <td className='text-center'>{item.symbol}</td>
                <td className={ item.price < 0.001 ? "bg-red-100" : "bg-green-100"
              }>{item.price}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
      <div className='flex-col justify-center mt-80'>
        <div className='text-center font-bold mb-5 text-3xl'>
            {records2.length > 0 ? (<h1 id='preco_moeda2' key={records2[0].symbol}>{records2[0].price}</h1>) : <h1>Pesquise</h1>}
            {records2.slice(1).map((t, i) => <li key={i}>{t.price}</li>)}
        </div>
        <input 
            type="text" 
            className='hover:shadow-lg p-4 rounded-full border w-full mb-6' 
            onChange={Filter2} 
            placeholder="Type a coin..."
          />

        <table className='table border w-full'>
          {
          records2.length > 0 ? (          
          <thead>
            <tr>
              <th>Sigla</th>
              <th>Preço</th>
            </tr>
          </thead>) : <p className='text-center'>Moeda não encontrada</p>
          }
          <tbody>
          { 
              records2.map((item, i) => (
              <tr key={i} className="border">
                <td className='text-center'>{item.symbol}</td>
                <td className={ item.price < 0.001 ? "bg-red-100" : "bg-green-100"
              }>{item.price}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>



    </div>
  )
}

export default Converter;