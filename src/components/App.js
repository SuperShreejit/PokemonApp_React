import { useState, useEffect } from 'react'
import axios from 'axios'

import Pagination from './Pagination'
import PokemonList from './PokemonList'
import Loading from './Loading'

const pokeAPIUrl = "https://pokeapi.co/api/v2/pokemon/"

export default function App() {
  const [pokemons, setPokemons] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState(pokeAPIUrl)
  const [nextPageUrl, setNextPageUrl] = useState(pokeAPIUrl)
  const [prevPageUrl, setPrevPageUrl] = useState(pokeAPIUrl)
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setloading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
      .then(res => {
        setloading(false)
        setNextPageUrl(res.data.next)
        setPrevPageUrl(res.data.previous)
        setPokemons(res.data.results.map(result => result.name))
      })

    return (() => cancel())

  }, [currentPageUrl])

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  return (
    <main className="App">
      {
        loading ?
          <Loading/>
          : <>
            <h1>Pokemons</h1>
            <PokemonList pokemons={pokemons} />
            <Pagination 
              goToNextPage={nextPageUrl ? goToNextPage : null}
              goToPrevPage={prevPageUrl ? goToPrevPage : null}
            />
          </>
      }
    </main>
  )
}
