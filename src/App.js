import React, { useState, useEffect } from 'react'
import Map from './views/Page/Map'
import './styles/Main.scss'
import Header from './views/Page/Header'
import Menu from './views/Page/Menu'
import Dashboard from './views/Page/Dashboard'

function App() {
  const [admin, setAdmin] = useState("Niger")

  const handleClick = (e) => {
    setAdmin(e)
  }

  useEffect(() => {
    console.log('Data:', admin);
  }, [admin]);

  return (
    <section>
      <header>
        <Header />
        <Menu />
      </header>
      <section>
        <Dashboard country={admin} />
      </section>
      <Map onClick={handleClick} />
    </section>
  )
}

export default App
