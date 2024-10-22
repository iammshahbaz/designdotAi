import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Homepage from './pages/Homepage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
