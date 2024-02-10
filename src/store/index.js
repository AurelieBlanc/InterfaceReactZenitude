import { configureStore } from "@reduxjs/toolkit"; 
import pageSlice from './pageSlice'; 

const store = configureStore({
    reducer: {
        pageCommand : pageSlice, 
    }, 
}); 

export default store; 