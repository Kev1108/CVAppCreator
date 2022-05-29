import React from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { skillActions } from '../store/SkillsSlice'
import { languageActions } from '../store/LanguagesSlice'
import { stepAction } from '../store/StepSelectorSlice'


const SkillsLanguagesForm = () => {
  const skill = useSelector(state=>state.skill);
  const language = useSelector(state => state.language);
  const handleSubmit = (e)=>{
      e.preventDefault()
      dispacth(stepAction.changeStep('5'))
  }
  const dispacth = useDispatch();
  return (
    <div className='container mt-3 ' >
        <h2>Step 4. Skills & Languages</h2>
        <form  onSubmit={handleSubmit}>
            <h4 className='mt-1'>Skills</h4>
            <div id='skills' className=' mt-1'>
            <button className='bi bi-plus' style = {{backgroundColor:"inherit", maxHeight:"30px"}} onClick ={()=>dispacth(skillActions.addSkill())} ></button>          
                <div className='col-xs-10 col-md-4'>
                    {skill.map((sk,i)=><input className ='mt-2' type="text" value={sk} onChange = {(e)=>dispacth(skillActions.setSkill({index:i, text:e.target.value}))} required></input>)}        
                </div>
            </div>
            <h4 className='mt-1'>Languages</h4>
            <div id = 'languages' className=' mt-3'>
            <button className='bi bi-plus' style = {{backgroundColor:"inherit", maxHeight:"30px"}} onClick ={()=>dispacth(languageActions.addLanguage())} ></button>
            
                <div className='col-xs-10 col-md-4'>
                    {language.map(((l,i)=><input type="text" className='mt-2' value={l} onChange={(e)=>dispacth(languageActions.setLanguage({index:i,text:e.target.value}))} required></input>))}                                    
                </div>    
            </div>              
            <button  type='submit' className='btn mt-2' style={{backgroundColor:"#C2DED1"}}>Next</button>
        </form>
    </div>
  )
}






export default SkillsLanguagesForm