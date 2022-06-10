import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { experienceActions } from '../store/ExperienceSlice'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { stepAction } from '../store/StepSelectorSlice'


const ExperienceForm = () => {
    const experience = useSelector(state=>state.experience);
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(stepAction.changeStep('4'));

    }
  return (
    <div className='container'>
        <h2>Step 3. Work Experience</h2>
        <div className='d-flex justify-content-end'><button className='bi bi-plus mt-2' style={{backgroundColor:"inherit"}} onClick={()=>dispatch(experienceActions.addJob())}>Add Experience</button></div>
        <form onSubmit={handleSubmit}>
        {experience.map((job,i)=> 
            <div>
                <div className='row mt-3'>
                <div className='col-xs-10 col-md-4'>
                    <label>Initial Date:</label>
                    <DatePicker selected={job.initialDate} onChange={(d)=>dispatch(experienceActions.setDate({index:i,date:'initialDate',text:d}))} required />
    
                </div>
                <div className='col-xs-10 col-md-4'>
                    <label>Final Date:</label>
                    <DatePicker selected={job.finalDate} onChange={(d)=>dispatch(experienceActions.setDate({index:i,date:'finalDate',text:d}))} required/>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-xs-10 col-md-4'>
                    <label>Company Name:</label>
                    <input type="text" value={job.company} onChange={(e)=>dispatch(experienceActions.setCompany({index:i,text:e.target.value}))} required></input>
                </div>
                <div className='col-xs-10 col-md-4'>
                    <label>Position:</label>
                    <input type="text" value={job.position} onChange={(e)=>dispatch(experienceActions.setPosition({index:i,text:e.target.value}))} required></input>
                </div>
            </div>
            <div className='col-xs-10 col-md-4 mt-1'>
                <label>Job Description:</label>
                <textarea  value={job.responsabilities} onChange={(e)=>dispatch(experienceActions.setResponsability({index:i,text:e.target.value}))} required></textarea>
            </div>
            </div>
        )}
           <div className='d-flex justify-content-end'><button type="submit" className="btn" style={{backgroundColor:"#C2DED1"}}>Update Experience</button></div>
        </form>
        
        
        
    </div>
  )
}



export default ExperienceForm