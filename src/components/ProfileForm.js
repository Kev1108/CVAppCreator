import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { applicantActions } from '../store/ApplicantSlice';
import {stepAction} from '../store/StepSelectorSlice';

const ProfileForm = (props) => {
  const profile = useSelector(state=>state.applicant.profile);
  const dispacth = useDispatch();
  const handleChange = (e) =>{
    dispacth(applicantActions.setProfile(e.target.value));
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispacth(stepAction.changeFilledState());
  }
  return (
    <div className='container mt-2'>
        <h2 className='mt-1'>Step 5.  Profile.</h2>
        <form className="col-xs-10"onSubmit={handleSubmit}>
            <textarea style={{width:"100%"}} value = {profile} onChange = {handleChange} required></textarea>
            <div className='d-flex justify-content-end'><button  type='submit' className='btn' style={{backgroundColor:"#C2DED1"}}>Finish</button></div>
        </form>
    </div>
  )
}

export default ProfileForm