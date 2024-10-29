import React, { useState, useEffect } from 'react'
import userData from '../data/users.json' // Adjust path as necessary
import UserCard from '../components/UserCard'
import empty from '../assets/empty.jpg'
import { useLocation } from 'react-router-dom'

const SearchResults = () => {
  const [results, setResults] = useState([])
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const query = params.get('query') || ''

    if (query) {
      const filteredResults = userData.filter(
        (user) =>
          user.first_name.toLowerCase().includes(query.toLowerCase()) ||
          user.last_name.toLowerCase().includes(query.toLowerCase()),
      )
      setResults(filteredResults)
    } else {
      setResults([])
    }
  }, [location.search])

  return (
    <div className="grid grid-cols-1 gap-4 p-10 sm:grid-cols-2 md:grid-cols-3">
      {results.length > 0 ? (
        results.map((user, index) => <UserCard key={index} user={user} />)
      ) : (
        <div className="flex flex-col items-center justify-center p-4 text-center col-span-full">
          <img src={empty} alt="No results found" className="w-64 h-64 mb-4" />
        </div>
      )}
    </div>
  )
}

export default SearchResults
