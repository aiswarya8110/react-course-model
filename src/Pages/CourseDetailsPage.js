import { useSelector, useDispatch } from 'react-redux';
import { toggleSyllabusSection } from '../utils/appSlice';
const CourseDetailsPage = ()=>{
    const dispatch = useDispatch();
    const currentCourse = useSelector((store)=> store.app.currentCourse)
    const showSyllabusSection = useSelector((store)=> store.app.showSyllabusSection);

    const handleClick = ()=>{
        dispatch(toggleSyllabusSection());
    }

    if(!currentCourse) return <h2 className='text-center'>No course details found</h2>

    const { name, instructor, duration, description, enrollmentStatus, schedule, location, prerequisites, syllabus } = currentCourse;
    return (
        <div className='m-5 flex flex-col justify-start items-center text-slate-800 capitalize'>
            <div>
                <p className='px-4 py-2'><span className='text-lg font-bold mr-2'>Course Name </span>{name}</p>
                <p className='px-4 py-2'><span className='text-lg font-bold mr-2'>Instructor's Name </span>{instructor}</p>
                <p className='px-4 py-2'><span className='text-lg font-bold mr-2'>Description </span>{description}</p>
                <p className='px-4 py-2'><span className='text-lg font-bold mr-2'>Enrollment status </span>{enrollmentStatus}</p>
                <p className='px-4 py-2'><span className='text-lg font-bold mr-2'>Course duration </span>{duration}</p>
                <p className='px-4 py-2'><span className='text-lg font-bold mr-2'>Schedule </span>{schedule}</p>
                <p className='px-4 py-2'><span className='text-lg font-bold mr-2'>Location </span>{location}</p>
                <p className='px-4 py-2'><span className='text-lg font-bold mr-2'>Pre-requisites </span>{prerequisites.join(", ")}</p>
                <div className='px-4 py-2 border border-slate-400 cursor-pointer rounded-lg' onClick={handleClick}><span className='text-lg font-bold mr-2'>Syllabus <small>(click to expand)</small> </span>
                {showSyllabusSection && (
                    <div className='px-4 py-2'>
                        <ul>
                            {syllabus.map((item)=>{
                                const { week, topic, content } = item;
                                return (
                                    <li className='mb-4' key={week} >
                                        <p><span className='text-lg font-semibold mr-2'>Week</span>{week}</p>
                                        <p><span className='text-lg font-semibold mr-2'>Topic</span>{topic}</p>
                                        <p><span className='text-lg font-semibold mr-2'>Content</span>{content}</p>
                                    </li>
                                )
                            })}
                        </ul>  
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default CourseDetailsPage;