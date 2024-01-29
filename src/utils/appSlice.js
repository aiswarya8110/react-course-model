import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        courses: null,
        filteredCourses: null,
        searchTerm: '',
        showSyllabusSection: false,
    },

    reducers: {
        addCourses: (state, action)=>{
            return {...state, courses: action.payload}
        },
        updateSearchTerm: (state, action)=>{
            return {...state, searchTerm: action.payload}
        },
        updateFilteredCourses: (state, action)=>{
            return {...state, filteredCourses: action.payload}
        } 
    }
});

export const { addCourses, updateSearchTerm, updateFilteredCourses } = appSlice.actions;

export default appSlice.reducer;