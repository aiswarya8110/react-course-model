import React from 'react';
import { useSelector } from 'react-redux';
import EnrolledCourseCard from '../components/EnrolledCourseCard';
const Dashboard = ()=>{
    const courses = useSelector((store)=> store.app.courses);

    if(!courses) return <h2>No Enrolled Courses</h2>

    return (
        <>
            <h1 className='text-slate-800 text-center font-bold text-3xl my-3 md:text-4xl lg:text-6xl lg:my-5'>Enrolled Courses</h1>
            <div className='flex h-screen flex-wrap justify-center items-center gap-5 p-4'>
                {courses.map((course)=> <EnrolledCourseCard key={course.id} course={course} />)}
            </div>
        </>
        
    )
}

export default Dashboard;