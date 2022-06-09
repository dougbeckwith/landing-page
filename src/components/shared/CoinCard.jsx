import React from 'react'

const CoinCard = ({crypto}) => {
  return (
    <div
      name='featured'
      key={crypto.id}
      className='bg-white shadow-lg shadow-[#c0c3ce] w-[250px] h-[250px] sm:w-[180px] sm:h-[200px] border-[#b0b3be] border rounded-md flex flex-col justify-center items-center'>
      <img className='w-[50px]' src={crypto.image} alt='' />
      <p className='text-center break-words font-semibold'>{crypto.id}</p>
      <p>${crypto.current_price.toLocaleString('en-US')}</p>
      <p
        className={
          crypto.price_change_percentage_24h > 0 ? 'text-[green]' : 'text-[red]'
        }>
        {crypto.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>
  )
}

export default CoinCard
