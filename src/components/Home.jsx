import React from 'react'
import hero from '../assets/hero.jpg';
import Products from './Products';

function Home() {
  return (
    <div className="w-full h-screen px-10 gap-5">
        <div className="grid grid-cols-2 gap-10 h-3/4 pt-10">
          <div className="grid place-items-center justify-start">
              <div className="gap-5">
                <h2 className="text-6xl">NEW ARRIVALS THIS SEASON</h2>
                <p className="leading-6 pt-5">Check out the latest trends,Check out the latest trends</p>
                </div>
          </div>
          <div className="pt-10">
              <img src={hero} alt="logo" className="rounded-2xl"/>
          </div>
        </div>
        <hr />
        <Products />
    </div>
  )
}

export default Home