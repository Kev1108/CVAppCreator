import React from 'react'
import { useSelector } from 'react-redux';
import { applicantActions } from '../store/ApplicantSlice';
import { useDispatch} from 'react-redux'
import { stepAction } from '../store/StepSelectorSlice';


const PersonalDetailsForm = () => {
    const applicant = useSelector(state=> state.applicant);
    const dispacth = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispacth(stepAction.changeStep('2'));
    }
    const readImage = (fileInput)=>{
        var reader = new FileReader();
        reader.readAsDataURL(fileInput.target.files[0]);
        reader.onload = (e)=>{
            dispacth(applicantActions.setImage(e.target.result))
        }
    }
  return (
    <form className='container' onSubmit={handleSubmit}>
    <h2>Step 1. Personal Information.</h2>
    <div className='row d-flex '>
        <div className='col-xs-10 col-md-5' >
            <label className='mt-3'>First Name:</label>
            <input type='text' value = {applicant.firstName} onChange = {(e)=>dispacth(applicantActions.setFirstName(e.target.value))} required></input>
        </div> 
        <div className='col-xs-10 col-md-5'>        
            <label className='mt-3'>
                Last Name:
            </label>
            <input type='text' value = {applicant.lastName} onChange = {(e)=>dispacth(applicantActions.setLastName(e.target.value))} required></input> 
        </div>
    </div>
    <div className='row  mt-2'>
        <div className='col-xs-10 col-md-6'>
            <label >
            Photo: 
            </label> 
            <input type='file' onChange = {readImage} ></input>         
        </div>  
    </div>
          
    <div className='row'>
        <div className='col-xs-10 col-md-8 mt-1'>
            <label>Ocupation:</label>
            <input type='text' value = {applicant.title} onChange = {(e)=>dispacth(applicantActions.setTitle(e.target.value))} required></input>
        </div>
        
    </div>
    <div className='row d-flex  mt-1'>
        <div className='col-xs-10 col-md-5'>
            <label>Phone number:</label>
            <input type='number' value = {applicant.cellphone} onChange = {(e)=>dispacth(applicantActions.setCellphone(e.target.value))} required></input>        
        </div> 
             
    </div>
    <div className='row d-flex  mt-1'>
        <div className='col-xs-10 col-md-5'>
            <label>email:</label>
            <input type='email' value = {applicant.email} onChange = {(e)=>dispacth(applicantActions.setEmail(e.target.value))} required></input>        
        </div> 
        <div className='col-xs-10 col-md-4' >
            <label>Nationality:</label>
            <input type='text' value = {applicant.country} onChange = {(e)=>dispacth(applicantActions.setCountry(e.target.value))} required></input>                             
        </div>
    <div className="row mt-1">
        <div className='col-xs-10 col-md-8'>
            <label>Github(optional):</label>
            <input type="text" value = {applicant.link} onChange = {(e)=>dispacth(applicantActions.setLink(e.target.value))}></input>
        </div>
            
    </div>  
    </div>
    <label>Address:</label>
    <input type="text" value = {applicant.address} onChange = {(e)=>dispacth(applicantActions.setAddress(e.target.value))} required></input>
    <div className='d-flex justify-content-end mt-3'><button type="submit" className="btn" style={{backgroundColor:"#C2DED1"}}>Next</button></div>
    
    
    
    </form>
  )
}

export default PersonalDetailsForm;