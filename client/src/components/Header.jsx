import React from 'react'

const Header = () => {
  return (
    <header className='w-screen h-20 bg-yellow-100 flex items-center justify-around'>
      <h1 className='text-bold font-mono italic'>
        BinanceConverter
      </h1>
        <nav className='h-20 flex items-center'>
          <ul className='list-none flex gap-7'>
            <li>Conversor</li>
            <li>CangaçoTech</li>
          </ul>
        </nav>
    </header>
  )
}

export default Header