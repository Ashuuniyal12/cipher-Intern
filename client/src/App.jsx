import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'
import Follower from './pages/Follower'
import Header from './components/Header'

const App = () => {

  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/followers" element={<Follower />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
