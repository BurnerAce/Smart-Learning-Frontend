import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/NavBar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import LeaderboardPage from './pages/LeaderboardPage'
import Error from './components/Error'
import Template from './components/Template'
import './App.css'


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/auth" element={<Template />} >
          <Route exact path="login" element={<LoginPage />} />
          <Route exact path="register" element={<RegisterPage />} />
        </Route>
        <Route exact path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
