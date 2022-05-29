import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { educationActions } from '../store/EducationSlice'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { stepAction } from '../store/StepSelectorSlice'


const EducationalBackgroundForm = () => {
  const education = useSelector(state=>state.education);
  const dispacth = useDispatch();
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispacth(stepAction.changeStep('3'));
    
  }

  return (
    <div className='container mt-2'>
      <h2>Step.2 Educational Background</h2>
      <div className='d-flex justify-content-end'><button className='bi bi-plus mt-2' style={{backgroundColor:"inherit"}} onClick={()=>dispacth(educationActions.addEducation())}>Add Education</button></div>
      <form onSubmit={handleSubmit}>
           { education.map((academic,i)=>
            <div className='row mt-3'>
            <div className='col-xs-10 col-md-4'>
                <label>Graduation Year:</label>
                <DatePicker selected={academic.graduationDate} onChange={(date)=>dispacth(educationActions.setDate({index:i,text:date}))} dateFormat='yyyy/MM/dd' required/>
            </div>
            <div className='col-xs-10 col-md-6'>
                <label>Degree:</label>
                <input type='text' value={academic.degree} onChange={(e)=>dispacth(educationActions.setDegree({index:i,text:e.target.value}))} required></input>
            </div>
            <div className='col-xs-10 col-md-6'>
                <label>Academic Institution:</label>
                <input type='text' value={academic.school} onChange={(e)=>dispacth(educationActions.setSchool({index:i,text:e.target.value}))} required></input>
            </div>
            </div> )}
            <div className='d-flex justify-content-end'><button type="submit" className="btn mt-2" style={{backgroundColor:"#C2DED1"}}>Update Education</button></div>
        </form>
      
      
    </div>
  )
}



export default EducationalBackgroundForm