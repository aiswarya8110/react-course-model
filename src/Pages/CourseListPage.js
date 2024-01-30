import React from 'react';
import Search from '../components/Search';
import useCourses from '../utils/hooks/useCourses';
import CourseContainer from '../components/CourseContainer';
import { Link } from 'react-router-dom';

const CourseListPage = ()=>{
    useCourses();
    return (
        <>
            <Link to="/dashboard" className='bg-gray-900 text-white px-4 py-2 rounded-lg'>
                Dashboard
            </Link>
            <Search />
            <CourseContainer />  
        </>
    )
}

export default CourseListPage;