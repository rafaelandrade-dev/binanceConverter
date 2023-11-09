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
        setRecords1(response.data);
        setRecords2(response.data);
      })
      .catch(err => console.log(err));
  });

  const Filter1 = (event) => {
    setRecords1(coins.filter(f => f.symbol.toUpperCase().includes(event.target.value.toUpperCase())))
  }

  const Filter2 = (event) => {
    setRecords2(coins.filter(f => f.symbol.toUpperCase().includes(event.target.value.toUpperCase())))
  }

  return (
    <div className='h-full flex justify-center gap-44'>
      <div className='flex-col justify-center mt-96'>
        <input 
            type="text" 
            className='hover:shadow-lg p-4 rounded-full border w-full mb-6' 
            onChange={Filter1} 
            placeholder="Type a coin..."
          />

        <table className='table border w-full'>
          <thead>
            <tr>
              <th>Sigla</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
          { 
              records1.map((item, i) => (
              <tr key={i} className="border">
                <td className='text-center'>{item.symbol}</td>
                <td className={ item.price < 0.001 ? "bg-red-100" : "bg-green-100"
              }>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex-col justify-center mt-96 mb-10'>

        <input 
            type="text" 
            className='hover:shadow-lg p-4 rounded-full border w-full mb-6' 
            onChange={Filter2} 
            placeholder="Type a coin..."
          />

        <table className='table border w-full'>
          <thead>
            <tr>
              <th>Sigla</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            { 
              records2.map((item, i) => (
              <tr key={i} className="border">
                <td className='text-center'>{item.symbol}</td>
                <td className={ item.price < 0.001 ? "bg-red-100" : "bg-green-100"
              }>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </div>
  )
}

export default Converter;