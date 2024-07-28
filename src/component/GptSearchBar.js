import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import lang from './utils/language'
import openai from './utils/openai'

const GptSearchBar = () => {

    const searchText=useRef(null)
  
    const handleGptSearchClick=async()=>{
        console.log(searchText.current.value)
        const gptQuery="act as a movie recommendation system and suggest some movies for the query:"+searchText.current.value+".only give me 5 movies name, comma separated like the example result given ahed.example Result:sholay, gadar, Don, golmaal"

            const gptResults= await openai.chat.completions.create({
              messages: [{ role: 'user', content: gptQuery}],
              model: 'gpt-3.5-turbo',
            });
            console.log(gptResults.choices)
          }

    const langKey=useSelector(store=>store.config.lang)
    console.log(langKey)
  return (
    <div>
            <div>
        <h1>hello</h1>
        <div className="justify-center">
          <form className="p-3 m-3 bg-black w-6/12 rounded-sm flex justify-center mx-auto mt-16" onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText}className="w-5/6 p-1 " type="text" placeholder={lang[langKey].gptSearchPlaceHolder}/>
            <button className="text-white px-4 bg-red-800 ml-5 p-1 rounded-md cursor-pointer" onClick={handleGptSearchClick}>{lang[langKey].search}</button>
          </form>
          
          </div>         
    </div>
      
    </div>
  )
}

export default GptSearchBar
