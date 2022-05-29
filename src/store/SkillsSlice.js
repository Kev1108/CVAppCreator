import { createSlice } from "@reduxjs/toolkit";

const skillSlice = createSlice({
    name: 'skill',
    initialState: [""],
    reducers:{
        addSkill(state){
            state.push("");
        },
        setSkill(state,action){
            state[action.payload.index] = action.payload.text;
        }
    }
})
export const skillActions = skillSlice.actions;
console.log(skillActions);
export default skillSlice