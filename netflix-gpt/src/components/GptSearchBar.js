import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

  const langConfig = useSelector(store => store.config.lang);

  return (
    <div className='pt-[9%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input type="text" className='p-4 m-4 col-span-9' placeholder={lang[langConfig].gptSearchPlaceholder}/>
            <button className='m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3'>{lang[langConfig].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
