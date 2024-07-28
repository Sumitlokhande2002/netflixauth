import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG } from './constant'

const GptSearch = () => {
  return (
    <div>
      <img className="absolute -z-20" src={BG}></img>
  <GptSearchBar/>
    </div>
  )
}

export default GptSearch
