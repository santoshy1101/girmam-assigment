import React, { useState, useEffect } from 'react'
import userData from '../data/users.json' // Adjust path as necessary
import UserCard from '../components/UserCard'
import { useSearch } from '../context/SearchContext';
import empty from "../assets/empty.jpg"

const Profile = () => {
  const { searchQuery } = useSearch()
  const [results, setResults] = useState([])

  useEffect(() => {
    if (searchQuery) {
      const filteredResults = userData.filter(
        (user) =>
          user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.last_name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setResults(filteredResults)
    } else {
      setResults([])
    }
    
  }, [searchQuery])

  return (
    <div className="grid grid-cols-1 gap-4 p-10 sm:grid-cols-2 md:grid-cols-3">
    {results.length > 0 ? (
      results.map((user, index) => <UserCard key={index} user={user} />)
    ) : (
      <div className="flex flex-col items-center justify-center p-4 text-center col-span-full">
        <img
          src={empty} // Replace with your image URL
          alt="No results found"
          className="w-64 h-64 mb-4" // Adjust size as needed
        />
      </div>
    )}
  </div>
  
  )
}

export default Profile
