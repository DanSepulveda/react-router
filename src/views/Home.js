import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [pokemones, setPokemones] = useState([])

  const getPokemones = async () => {
    const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')

    setPokemones(respuesta.data.results)
  }

  useEffect(() => {
    getPokemones()
  }, [])

  return (
    <div>
      <h1>Home</h1>
      {pokemones.map((pokemon) => (
        <p>
          <Link to={`/personaje/${pokemon.name}`}>{pokemon.name}</Link>
        </p>
      ))}
    </div>
  )
}

export default Home
