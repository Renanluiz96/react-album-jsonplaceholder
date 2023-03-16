import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Album } from './pages/Album'
import { Home } from './pages/Home'

function App() {


  return (
    <div >
      <h1>Galeria de fotos</h1>
      <hr />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/album/:id' element={<Album/>}/>


      </Routes>

    </div>
  )
}

export default App
