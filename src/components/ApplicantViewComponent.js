import React from 'react'
import '../styles/ApplicantView.css'
import {useSelector} from 'react-redux'


const ApplicantViewComponent = () => {
  const applicant = useSelector((state)=> state.applicant);
  return (
  
          <div className='applicant-name'>
            <h1>{applicant.firstName + " " + applicant.lastName}</h1>
            <h3>{applicant.title}</h3>
            <hr></hr>
          </div>    

  )
  }

export default ApplicantViewComponent;