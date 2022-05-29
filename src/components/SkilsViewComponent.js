import React from 'react'
import '../styles/SkillsViewStyle.css'
import {useSelector} from 'react-redux'


const SkilsViewComponent = () => {
  const skill = useSelector(state=>state.skill);
  return (
    <div className='skillView'>
        <h5>Skills</h5>
       {skill.map((sk,i)=><li key = {i}>{sk}</li>)}
        
        
    </div>
  )
}

export default SkilsViewComponent