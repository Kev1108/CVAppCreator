import { createSlice } from "@reduxjs/toolkit";



const  experienceSlice = createSlice({
    name: 'experience',
    initialState: [{
        position:"", initialDate: null, finalDate:null, company: "", initialDateString: '', 
        finalDateString:'',responsabilities:''
    }],
    reducers: {
        addJob(state,action){
            state.push({
                position:"", initialDate: null, finalDate:null, company: "", initialDateString: '', 
                finalDateString:'',responsabilities:''
            });
        } ,
        setPosition(state,action){
            state[action.payload.index]['position'] = action.payload.text;
        },
        setDate(state,action){
            let date = action.payload.text;
            state[action.payload.index][action.payload.date] = date;
            const [month, year] = [date.getMonth() + 1, date.getFullYear()];
            state[action.payload.index][action.payload.date+'String'] = month.toString()+"-"+year.toString();          
        },
        setCompany(state,action){
            state[action.payload.index]['company'] = action.payload.text;
        },
        setResponsability(state,action){
            state[action.payload.index]['responsabilities'] = action.payload.text;
        }
    }
})

export const experienceActions = experienceSlice.actions;
export default experienceSlice;
