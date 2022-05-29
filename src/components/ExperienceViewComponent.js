import React from 'react'
import '../styles/ExperienceViewStyle.css'
import { useSelector } from 'react-redux'


 const ExperienceViewComponent = () => {
     const experience = useSelector(state=>state.experience);
  return (
    <div className='experienceView'>
        <h4>Experience</h4>
        {experience.map(experience =>(
            <div className="job" key = {experience.company}>
                <div className='time'>
                    <i className="bi bi-calendar"></i>
                    <span>{experience.initialDateString + " - " + experience.finalDateString }</span>
                </div>
                <h5>{experience.company}</h5>
                <div>
                    <p>{experience.position.toUpperCase()}</p>
                    <p>{experience.responsabilities}</p>
                </div>
            </div>
        ))}    
    </div>
  )
}

export default ExperienceViewComponent;