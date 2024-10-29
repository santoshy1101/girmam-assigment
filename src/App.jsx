import React from 'react'
import Navbar from './components/Navbar'
import { SearchProvider } from './context/SearchContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'



const App = () => {
  return (
    <SearchProvider>
    <Router>
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/results" element={<SearchResults />} />
      </Routes>
    </Router>
  </SearchProvider>
  )
}

export default App

