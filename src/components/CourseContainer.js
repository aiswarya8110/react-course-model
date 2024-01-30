import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilteredCourses } from '../utils/appSlice';
import CourseList from './CourseList';
const CourseContainer = ()=>{
    const dispatch = useDispatch();
    const { courses, searchTerm, filteredCourses } = useSelector((store)=> store.app);

    useEffect(()=>{
        if(searchTerm){
            const filteredCourses = courses.filter((course)=> course.instructor === searchTerm || course.name === searchTerm);
            dispatch(updateFilteredCourses(filteredCourses));
        }
        else{
            dispatch(updateFilteredCourses(courses))
        }
    },[searchTerm])

    if(!courses) return <h3>Loading Courses..</h3>

    if(filteredCourses){
        return (
            <CourseList courses={filteredCourses} />
        )
    }

    return (
        <CourseList courses={courses} />
    )
}

export default CourseContainer;