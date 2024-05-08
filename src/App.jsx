import './App.css'
import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Filters from './components/Filters.jsx'
import Stats from './components/Stats.jsx'
import Questions from './components/Questions.jsx'

function App() {

  return (
    <>
      <Nav />
      <Filters />
      <Stats />
      <Questions />
    </>
  )
}

export default App
