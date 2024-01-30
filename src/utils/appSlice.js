import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        courses: null,
        filteredCourses: null,
        searchTerm: '',
        showSyllabusSection: false,
        currentCourse: null
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
        },
        updateCurrentCourse: (state, action)=>{
            return {...state, currentCourse: action.payload}
        },
        toggleSyllabusSection: (state)=>{
            return {...state, showSyllabusSection: !state.showSyllabusSection}
        }
    }
});

export const { addCourses, updateSearchTerm, updateFilteredCourses, updateCurrentCourse, toggleSyllabusSection } = appSlice.actions;

export default appSlice.reducer;