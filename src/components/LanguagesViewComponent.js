import React from 'react'
import '../styles/languagesView.css'
import {useSelector} from 'react-redux'

const LanguagesViewComponent = () => {
  const language = useSelector(state=>state.language);
  return (
    <div className='languagesView'>
        <h4>Languages</h4>
        <div className='languages'>
          {language.map((language,index)=> <div key={index}> <p>{language}</p></div>)}            
        </div>
    </div>
  )
}

export default LanguagesViewComponent