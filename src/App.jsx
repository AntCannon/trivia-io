import './App.css'
import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Filters from './components/Filters.jsx'
import Stats from './components/Stats.jsx'

function App() {

  return (
    <>
      <Nav />
      <Filters />
      <Stats />
    </>
  )
}

export default App
