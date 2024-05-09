import './App.css'
import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Sidebar from './components/Sidebar.jsx'
import Questions from './components/Questions.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [ maxUserHP, setMaxUserHP] = useState(20)
  const [ userHP, setUserHP] = useState(maxUserHP)

  return (
    <>
      <Nav />
      <main>
        <Sidebar
          userHP={userHP}
          maxUserHP={maxUserHP}
         />
        <Questions
          userHP={userHP}
          setUserHP={setUserHP}
         />
      </main>
      <Footer />
    </>
  )
}
