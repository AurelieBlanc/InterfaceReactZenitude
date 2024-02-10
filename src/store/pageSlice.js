import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    fontButton: "Protest Revolution", 
    colorButton: true, 
    bannerButton: true, 
}

const pageSlice = createSlice ({
    name: "pageCommand", 
    initialState, 
    reducers: {
        updatePolice: (state, action) => {
                const stateCopy={...state}; 
                stateCopy.fontButton=action.payload; 
                return stateCopy; 

                // ...state, 
                // fontButton: action.payload,  
            
        }, 
        updateColor: (state, action) => {
            return {
                ...state, 
                colorButton: action.payload, 
            }
        }, 
        updateBanner: (state, action) => {
            return {
                ...state, 
                bannerButton: action.payload, 
            }
        }
    }
})




export const { updatePolice, updateColor, updateBanner } = pageSlice.actions; 
export default pageSlice.reducer; 