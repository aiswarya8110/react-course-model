import React from "react";
import { toggleCourseComplete } from "../utils/appSlice";
import { useDispatch } from 'react-redux';
import checkImg from '../assets/check.png';

const EnrolledCourseCard = ({ course })=>{
    const dispatch = useDispatch();
    const {name, instructor, progress, thumbnail, dueDate, completed } = course;
    console.log(progress);
    const handleClick = (course)=>{
       dispatch(toggleCourseComplete(course));
    }

    return (
        <div className="w-full md:w-80 lg:w-96 capitalize shadow-lg rounded-lg text-slate-900">
            <img src={thumbnail} alt="course" className="w-full object-cover rounded-lg"/>
            <div className="p-3 pb-5">
                <h3 className="text-lg font-bold mb-1">{name}</h3>
                <h4 className="mb-2">{instructor}</h4>
                <div className="h-1 rounded-lg bg-slate-200 mb-2">
                    <div className='h-full bg-slate-900 rounded-lg' style={{width: `${progress}%`}}></div>
                </div>
                <p className="mb-2">{progress}% completed</p>
                <p>Due Date: {dueDate}</p>
                <button className="mt-2 bg-slate-900 text-white rounded-lg w-full px-4 py-2 hover:bg-slate-800 transition" onClick={()=> handleClick(course)}>
                    {completed ?   <>Completed<img src={checkImg} className="inline w-4 ml-1" alt="check" /></> : 'Mark as Complete'}
                </button>
            </div>
        </div>
    )
}

export default EnrolledCourseCard;