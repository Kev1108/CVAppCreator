import { createSlice } from "@reduxjs/toolkit";



const  educationSlice = createSlice({
    name: 'education',
    initialState: [{school:"", graduationDate: null, degree: "", graduationDateString: ''}],
    reducers: {
        addEducation(state,action){
            state.push({school:"",graduationDate: null, degree: "", graduationDateString: ''});
        } ,
        setSchool(state,action){
            state[action.payload.index]['school'] = action.payload.text;
        },
        setDate(state,action){
            let date = action.payload.text;
            state[action.payload.index]['graduationDate'] = date;
            const [month, year] = [date.getMonth() + 1, date.getFullYear()];
            state[action.payload.index]['graduationDateString'] = month.toString()+"-"+year.toString();
            
        },
        setDegree(state,action){
            state[action.payload.index]['degree'] = action.payload.text;
        }
    }
})

export const educationActions = educationSlice.actions;
export default educationSlice;

