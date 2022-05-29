import React from 'react'
import '../styles/ProfileViewStyle.css'
import {useSelector} from 'react-redux'




const ProfileViewComponent = () => {

  return (
    <div className='profileView'>
        <h5>Profile</h5>
        <p>{useSelector(state=>state.applicant.profile)}</p>
    </div>
  )
}

export default ProfileViewComponent