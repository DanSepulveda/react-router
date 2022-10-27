import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Personaje = () => {
  const [url, setUrl] = useState('')
  const parametros = useParams()
  const nombre = parametros.nombreDelPokemon

  const getPokemon = async () => {
    let resultado = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    setUrl(resultado.data.sprites.front_shiny)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <div>
      <img src={url} />
    </div>
  )
}

export default Personaje
