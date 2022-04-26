import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
const Home = () => {
    return (
       <Router>
     
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
  
    </Router>
    )
}

export default Home
