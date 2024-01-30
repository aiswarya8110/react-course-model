import React from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateCurrentCourse } from "../utils/appSlice";
const CourseList = ({ courses })=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (course)=>{
        dispatch(updateCurrentCourse(course));
        navigate("/course-details");
    }

    return (
        <div className="flex justify-center">
            <ul className="w-full md:w-2/4 text-center">
                {courses.map((course)=> {
                    const {name, id } = course;

                    return (
                    <li 
                    key={id} 
                    className="capitalize cursor-pointer p-2 mb-4 text-lg font-semibold rounded-lg w-full" 
                    onClick={()=>handleClick(course)}>
                        {name}
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default CourseList;