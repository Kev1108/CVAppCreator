import React from 'react'
import '../styles/ApplicantImage.css'
import { useSelector } from 'react-redux'


 const ApplicantImageComponent = () => {
 const image = useSelector(state=>state.applicant.image) 
  return (
    <div className='imageBox'>
         <div><img src={image} alt="Add an image" /></div>
        </div>
  )
}

export default ApplicantImageComponent;
