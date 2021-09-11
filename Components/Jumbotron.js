import Image from 'next/image'
import calculator from '../public/undraw_Calculator_0evy.svg'
import style from '../styles/Jumbotron.module.css'

const Jumbotron = () => {
    return (
        <div className={style.jumbotron}>
            <div className={style.calculator_svg}><Image src={calculator} width={1000} height={900} alt="calculator"/></div>
            <div className={style.content}>
                <p className={style.lead}>Calculate your college, high school and cummulative GPA, check your grade and understand how the GPA scale works.</p>
            </div>
        </div>
    )
}

export default Jumbotron
