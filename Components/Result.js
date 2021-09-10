import style from '../styles/Result.module.css'
import { useEffect, useState } from "react"
import Link from 'next/link'


const Result = ({courses, SetCourses}) => {
    const [gpa, setGpa] = useState(0)
    useEffect(() => {
        let units = courses.map(course => course.unit)
        console.log(units)
        let grades = courses.map(course => {
            switch (course.grade){
                case 'A':
                    return 5;
                    break;
                case 'B':
                    return 4;
                    break;
                case 'C':
                    return 3;
                    break;  
                case 'D':
                    return 2;
                    break; 
                case 'E':
                    return 1;
                    break;
                default:
                    return 0;
                    break; 
            }
        })
        console.log(grades)
        let weighted = grades.map((c, i) => c * units[i]).reduce((total, a) => total+a, 0)
        console.log(weighted)
        let total_units = units.reduce((total, a) => total + a, 0)
        console.log(total_units)
        let result = new Number(weighted/total_units).toPrecision(4)
        edit(result)
    })

    const edit = (res) => {
        setGpa(res)
    }

    const change = () => {
        SetCourses([])
    }
    return (
        <>
            <div className={style.Heading}>Cummulated Grade Point</div>
            <p className={style.lead}>Your CGPA is {gpa}</p>
            <button className={style.btn} onClick={change}>Go Back</button>
            {courses.map(course => (
                <>
                    <div className={style.leads}>
                        <p>{course.name}</p>
                        <p>{course.unit}units</p>
                        <p>{course.grade}</p>
                    </div>
                </>
            ))}
        </>
    )
}

export default Result