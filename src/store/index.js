import { configureStore } from "@reduxjs/toolkit";
import applicantSlice from "./ApplicantSlice"; 
import skillSlice from "./SkillsSlice";
import languageSlice from "./LanguagesSlice";
import educationSlice from "./EducationSlice";
import experienceSlice from "./ExperienceSlice";
import stepSlice from "./StepSelectorSlice";

const store = configureStore({
    reducer: {
        applicant: applicantSlice.reducer,
        skill: skillSlice.reducer,
        language: languageSlice.reducer,
        education: educationSlice.reducer,
        experience: experienceSlice.reducer,
        step: stepSlice.reducer
        
    }
})


export default store;