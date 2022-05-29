import React from 'react'
import ApplicantViewComponent from './ApplicantViewComponent';
import ApplicantDetailsViewComponent from './ApplicantDetailsViewComponent';
import  ApplicantImageComponent  from './ApplicantImageComponent';
import EducationViewComponent from './EducationViewComponent';
import ProfileViewComponent from './ProfileViewComponent';
import SkilsViewComponent from './SkilsViewComponent';
import  ExperienceViewComponent  from './ExperienceViewComponent';
import LanguagesViewComponent from './LanguagesViewComponent';
import '../styles/template.css'

export const CVTemplate = React.forwardRef((props,ref) => {
  
  return (
    <div className='main-view' ref={ref}>
      <div className='left-side'>
        <div className= 'blue-side'>
          <ApplicantImageComponent />
          <ApplicantDetailsViewComponent />
        </div>
        <div className = 'gold-side'>
          <ProfileViewComponent />
          <SkilsViewComponent />
          
        </div>
      </div>
        <div className='white-side'>
        <ApplicantViewComponent />
        <EducationViewComponent />
        <ExperienceViewComponent />
        <LanguagesViewComponent />
        
      </div>
    
    
    </div>
  );
})
