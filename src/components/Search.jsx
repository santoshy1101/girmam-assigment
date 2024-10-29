import React, { useEffect, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { useSearch } from '../context/SearchContext'
import { useLocation } from 'react-router-dom'

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('')
  const { searchQuery } = useSearch()
  const { pathname } = useLocation()

  const handleSearch = () => {
    onSearch(query)
  }

  useEffect(() => {
    pathname.includes('result') && searchQuery && setQuery(searchQuery)
  }, [])

  return (
    <div className="flex items-center pl-3 bg-white border border-gray-300 rounded-md shadow-sm w-90 sm:w-[100%] focus-within:ring-2 focus-within:ring-blue-500">
      <span className="flex items-center pr-2 text-gray-400">
        <IoIosSearch size={20} />
      </span>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch()
          }
        }}
        className="w-full py-3 border-0 rounded-r-md focus:outline-none focus:ring-0"
      />
    </div>
  )
}

export default Search
