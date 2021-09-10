import style from '../styles/Course.module.css'
import { useState } from 'react';
import Result from './Result';
import Head from 'next/head'

const Course = ({courses}) => {
    const [courseIndex, setCourseIndex] = useState(0)
    const [courseObj, setCourseObj] = useState(courses)
    const [err, setErr] = useState([''])

    const eraseErrMessage = () => {
        setErr([''])
    }

    const edit = () =>{
        eraseErrMessage()
        let err_arr = []
        let new_course_obj = [...courseObj]
        let course_name = document.getElementById(`name_for_${courseIndex}`).value
        let course_units = document.getElementById(`units_for_${courseIndex}`).value
        let course_grade = document.getElementById(`grade_for_${courseIndex}`).value
        let obj = {
                id:courseIndex+1,
                name:course_name !== '' ? course_name : err_arr.push(`course name missing for course ${courseIndex+1}`),
                unit:course_units > 0 ? parseInt(course_units) : err_arr.push(`course units missing for course ${courseIndex+1}`),
                grade:course_grade !== '' ? course_grade : err_arr.push(`course grade missing for course ${courseIndex+1}`)
            }
    
        new_course_obj[courseIndex] = obj
        if(err_arr.length === 0){
            setCourseObj(new_course_obj)
            setCourseIndex(courseIndex+1)
        }
        else{
            setErr(err_arr)
        }

    }
    return (
         <div className={style.form_field}>
            { courseIndex < courseObj.length ?<div>
            <div className={style.Heading}>Entry {courseIndex+1}</div>
            {err.length > 1 ? <div className={style.err_box}>{err[err.length-1]}</div> : <div></div>}
                <>
                    <div className={style.form_div} key={courseIndex}>
                            <input type="text" id={`name_for_${courseIndex}`} className={style.NameBox} placeholder='COURSE TITLE e.g CSC120...' required/> 
                            <div></div>
                            <input type="number" id={`units_for_${courseIndex}`} className={style.UnitsBox} placeholder='UNITS' required/> 
                            <select name="" id={`grade_for_${courseIndex}`} className={style.SelectBox} required>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                            </select>
                            <button className={style.btn_green} onClick={edit}>{courseIndex < courseObj.length-1 ? 'Add Course' : 'Calculate GPA'}</button>
                    </div> 
                </>
            </div> : <Result courses={courseObj} />}
        </div> 
    )
}

export default Course