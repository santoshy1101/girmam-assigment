import React from 'react'
import Logo from '../assets/logo.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import Search from './Search'
import { useSearch } from '../context/SearchContext'

const Navbar = () => {
  const { pathname } = useLocation()
  const { setSearchQuery } = useSearch()
  const navigate = useNavigate()

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <div
      className={`flex items-center justify-between p-4 px-8 border-b md:flex-row gap-x-4 flex-col `}
    >
      <div
        className="flex items-center mb-4 cursor-pointer md:mb-0"
        onClick={() => navigate('/')}
      >
        <img src={Logo} alt="Girman Technologies logo" className="mr-2" />
        <div>
          <h1 className="text-xl font-bold">Girman</h1>
          <p className="text-sm text-gray-500">TECHNOLOGIES</p>
        </div>
      </div>
      <div
        className={`${pathname.includes('results') && 'w-[80%] md:w-[40%]'}`}
      >
        {pathname.includes('results') ? (
          <Search onSearch={handleSearch} />
        ) : (
          <div className="flex space-x-4">
            <a
              onClick={() => navigate('/results')}
              className="font-bold text-blue-600 underline cursor-pointer underline-offset-4"
            >
              SEARCH
            </a>
            <a
              href="https://girmantech.com/"
              target="_blank"
              className="font-semibold text-gray-800"
            >
              WEBSITE
            </a>
            <a
              href="https://www.linkedin.com/company/girmantech/"
              target="_blank"
              className="font-semibold text-gray-800"
            >
              LINKEDIN
            </a>
            <a
              href="mailto:contact@girmantech.com"
              className="font-semibold text-gray-800"
            >
              CONTACT
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
