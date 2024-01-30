import React from 'react';
import Search from '../components/Search';
import useCourses from '../utils/hooks/useCourses';
import CourseContainer from '../components/CourseContainer';
import { Link } from 'react-router-dom';

const CourseListPage = ()=>{
    useCourses();
    return (
        <div className='p-4'>
            <div className='flex justify-end mb-5'>
            <Link to="/dashboard" className='bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800'>
                Dashboard
            </Link>
            </div>
            <Search />
            <CourseContainer />  
        </div>
    )
}

export default CourseListPage;