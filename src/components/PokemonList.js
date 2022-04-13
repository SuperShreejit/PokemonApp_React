import React from 'react'

export default function PokemonList({ pokemons }) {
  return (
    <div className='pokemon'>
      {pokemons.map(pokemon => (
        <p key={pokemon}>{pokemon}</p>
      ))}
    </div>
  )
}
