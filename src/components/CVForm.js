import React from 'react'
import PersonalDetailsForm from './PersonalDetailsForm'
import  EducationalBackgroundForm  from './EducationalBackgroundForm'
import ExperienceForm from './ExperienceForm'
import SkillsLanguagesForm from './Skills&LanguagesForm'
import ProfileForm from './ProfileForm'

import { useSelector } from 'react-redux'


const CVForm = () => {
  const currentStep = useSelector(state=>state.step.formStep);
  
  
  return (
    <div>  
        {currentStep === '1' && <PersonalDetailsForm/>}
        {currentStep === '2' && <EducationalBackgroundForm/>}
        {currentStep === '3' && <ExperienceForm/>}
        {currentStep === '4' && <SkillsLanguagesForm/>}
        {currentStep === '5' && <ProfileForm/>}
    </div>
  );
}

export default CVForm