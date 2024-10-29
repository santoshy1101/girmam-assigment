import React from 'react'
import heroBackgound from '../assets/heroBackground.png'
import Search from '../components/Search'
import blueLogo from '../assets/blueLogo.svg'

const Home = () => {
  return (
    <div
      className="relative h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${heroBackgound})` }}
    >
      <div className="absolute inset-0 opacity-50 bg-gradient-to-b from-white to-blue-600"></div>
      <div className="relative flex items-center justify-center">
        <div className="flex flex-col items-center mt-10 gap-y-2">
          <div className="flex items-center mb-4 gap-x-5 ">
            <img
              src={blueLogo}
              alt="Girman logo"
              className="w-16 h-16 sm:w-24 sm:h-24"
            />
            <h1 className="text-4xl font-semibold sm:text-7xl">Girman</h1>
          </div>
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Home
