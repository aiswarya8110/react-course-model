import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilteredCourses } from '../utils/appSlice';
import CourseList from './CourseList';
const CourseContainer = ()=>{
    const dispatch = useDispatch();
    const { courses, searchTerm, filteredCourses } = useSelector((store)=> store.app);

    useEffect(()=>{
        if(searchTerm){
            const filteredCourses = courses.filter((course)=> course.instructor.includes(searchTerm) || course.name.includes(searchTerm) );
            dispatch(updateFilteredCourses(filteredCourses));
        }
        else{
            dispatch(updateFilteredCourses(courses))
        }
    },[searchTerm])

    if(!courses) return <h3 className='text-center'>Loading Courses..</h3>

    if(filteredCourses){
        return (
            <>
                <h2 className='text-slate-800 text-center font-bold text-3xl my-3 md:text-4xl lg:text-6xl lg:my-5'>Courses</h2>
                <CourseList courses={filteredCourses} />
            </>
        )
    }

    return (
        <>
            <h2 className='text-slate-800 text-center font-bold text-3xl my-3 md:text-4xl lg:text-6xl lg:my-5'>Courses</h2>
            <CourseList courses={courses} />
        </>
    )
}

export default CourseContainer;