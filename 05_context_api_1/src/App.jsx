import React from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <UserContextProvider>
        <h1>React JS</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
