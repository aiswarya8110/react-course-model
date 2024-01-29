import React from 'react';
import Search from '../components/Search';
import CourseList from '../components/CourseList';
import useCourses from '../utils/hooks/useCourses';

const CourseListPage = ()=>{
    useCourses();
    return (
        <>
            <Search />
            <CourseList />
        </>
    )
}

export default CourseListPage;