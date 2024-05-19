import React from "react"
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Management from './pages/Management'
import Add from './pages/Add'
import Transfer from './pages/Transfer'
import Reports from './pages/Reports'

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/management" element={<Management />} />
          <Route path="/add" element={<Add />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>          
    </Router>
  )
}
export default App
