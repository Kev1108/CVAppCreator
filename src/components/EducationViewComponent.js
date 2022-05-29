import React from 'react'
import '../styles/EducationView.css'
import {useSelector} from 'react-redux'


function EducationViewComponent() {
  const education = useSelector(state=>state.education);
  return (
    <div className='educationView'>
        <h4>Education</h4>
            {education.map((academic,index) => 
              <div className='educationSection' key = {index}>
                <div className = 'periodStyle'>
                  <div>
                    <p>{academic.graduationDateString}</p>
                    </div>
                  <i className="bi bi-caret-right-fill"></i>
                  </div>
                <div className = 'educationDetails'>
                  <h5>{academic.degree}</h5>
                  <p>{academic.school}</p>
                </div>
              </div>
              
            )}

        
    </div>
  )
}

export default EducationViewComponent
