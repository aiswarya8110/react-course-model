import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilteredCourses } from '../utils/appSlice';
const CourseList = ()=>{
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
            <div>
                <ul>
                    {filteredCourses.map((course)=>{
                        const {id, name } = course;

                        return <li key={id}>{name}</li>
                    })}
                </ul>
            </div>
        )
    }

    return (
        <div>
            <ul>
                {courses.map((course)=>{
                    const {id, name } = course;

                    return <li key={id}>{name}</li>
                })}
            </ul>
        </div>
    )
}

export default CourseList;