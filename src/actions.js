import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0
}
//check

const createSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        incer:()=>{

        }
    },
})
export const {incer}=createSlice.actions

export default createSlice.reducers