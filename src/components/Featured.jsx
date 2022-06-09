import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Button from './shared/Button'
import CoinCard from './shared/CoinCard'
import {v4 as uuidv4} from 'uuid'

const Featured = () => {
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=6&page=1&sparkline=false'
  const [cryptoData, setCryptoData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const data = res.data
        setCryptoData(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const coinList = cryptoData.map((crypto) => {
    return <CoinCard key={uuidv4()} crypto={crypto} />
  })

  return (
    <div className='w-full bg-[#f5f8ff] py-[80px] text-lg'>
      <div className='container px-5 m-auto flex flex-col lg:flex-row lg:justify-between'>
        <div className='flex order-last lg:order-first flex-wrap justify-center gap-3 pt-10 lg:pt-0 lg:w-2/5'>
          {!isLoading && coinList}
        </div>
        <div className='flex flex-col lg:justify-center lg:w-2/5 w-full'>
          <h1 className='text-4xl md:text-5xl font-bold pt-10 lg:pt-0'>
            Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin
          </h1>
          <p className='py-5'>
            See all available assets: Cryptocurrencies and NFT's
          </p>
          <Button text='Top 100 Coins' />
        </div>
      </div>
    </div>
  )
}

export default Featured
