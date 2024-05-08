import './App.css'
import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Sidebar from './components/Sidebar.jsx'
import Questions from './components/Questions.jsx'
import Footer from './components/Footer.jsx'

export default function App() {

  return (
    <>
      <Nav />
      <main>
        <Sidebar />
        <Questions />
      </main>
      <Footer />
    </>
  )
}
