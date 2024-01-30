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
        <div>
            <ul>
                {courses.map((course)=> {
                    const {name, id } = course;

                    return (
                    <li 
                    key={id} 
                    className="cursor-pointer" 
                    onClick={()=>handleClick(course)}>
                        {name}
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default CourseList;