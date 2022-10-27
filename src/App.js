import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Perfil from './views/Perfil'
import Layout from './components/Layout'
import Errorpage from './views/Errorpage'
import Personaje from './views/Personaje'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="perfil"
          element={<Perfil />}
        />
        <Route
          path="personaje/:nombreDelPokemon"
          element={<Personaje />}
        />
      </Route>
      <Route
        path="*"
        element={<Errorpage />}
      />
    </Routes>
  )
}

export default App
