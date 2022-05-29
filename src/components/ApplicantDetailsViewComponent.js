import React from 'react'
import "../styles/ApplicantDetails.css"
import { useSelector } from 'react-redux'

const ApplicantDetailsViewComponent = () => {
  const applicantDetails = useSelector(state=> state.applicant);
  return (
    <div className="details-view">    
      <div><i className="bi bi-telephone"></i> <p>{applicantDetails.cellphone}</p></div>
      <hr></hr>
      <div><i className="bi bi-envelope"></i> <p>{applicantDetails.email}</p></div>
      <hr></hr>
      <div><i className="bi bi-geo-alt-fill"></i> <p>{applicantDetails.address}</p></div>
      <hr></hr>
      <div><i className="bi bi-flag-fill"></i> <p>{applicantDetails.country}</p></div>
      <hr></hr>
      <div><i className="bi bi-github"></i> <p>{applicantDetails.link}</p></div>
      <hr></hr>
    </div>
  )
}

export default ApplicantDetailsViewComponent