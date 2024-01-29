import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCourses } from '../appSlice';
const useCourses = ()=>{
    const dispatch = useDispatch();
    const getCourses = async()=>{
        const response = await fetch('http://localhost:3000/courses');
        const courses = await response.json();
        console.log(courses);
        dispatch(addCourses(courses));
    }
    useEffect(()=>{
        getCourses();
    },[])
}

export default useCourses;