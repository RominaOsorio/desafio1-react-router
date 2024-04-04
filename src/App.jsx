import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import { Home, Contacto, NotFound } from './views'

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
