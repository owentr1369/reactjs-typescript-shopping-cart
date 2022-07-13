import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from "react-bootstrap"
import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container className='mb-4'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/store' element={<Store />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </Container>
  )
}

export default App
