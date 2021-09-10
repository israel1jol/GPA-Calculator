import { useState } from 'react'
import Course from './Course'
import styles from '../styles/CourseNumField.module.css'


const CourseNumField = () => {
    const [courses, SetCourses] = useState([])

  const change = () => {
    let new_courses = []
    let num = document.getElementById('course_num').value
    for(let i = 0; i < num; i++){
      let obj = {id:0, name:"", units:"", grade:""}
      new_courses.push(obj)
    }
    SetCourses(new_courses);
    console.log(courses)
  }
  return (
    <>
        {courses.length === 0 ? <div>
          <div className={styles.Heading}>Enter the number of courses offered</div>
          <div className={styles.form_field}>  
          <div className={styles.Heading}>
            <div>
              <label htmlFor="" className={styles.form_label}>Courses Offered     </label>
              <input type="number" id="course_num" className={styles.form_input}/>
            </div>
            <button className={styles.btn_green} onClick={change}>Go</button>
        </div></div></div>
        : <Course courses={courses}/>}
    </>
  )
}

export default CourseNumField