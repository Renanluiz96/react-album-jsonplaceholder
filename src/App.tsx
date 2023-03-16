import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Listagem } from './pages/Listagem'

function App() {


  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/listagem' element={<Listagem/>} />
      </Routes>

    </div>
  )
}

export default App
