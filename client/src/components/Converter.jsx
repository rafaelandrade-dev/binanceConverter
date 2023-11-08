import React, { useState, useEffect } from 'react'

import axios from 'axios'


const Converter = () => {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(()=>{
    axios.get("https://api.binance.com/api/v3/ticker/price").then((response)=>{
      setCoins(response.data);
    })
  })

      


  return (
    <div className=''>
      <form action="" className='flex'>
        <div>
          <input type="text" placeholder='Type a coin...' onChange={(e)=>setSearch(e.target.value)}/>
          {coins.filter((item)=>{
            if(search===""){
              return item
            } else if (item.name.includes(search)){
              return item
            }
          })
          .map((item)=>{
            return <p>{item.symbol}</p>
          })}
        </div>
      </form>
    </div>
  )
}

export default Converter