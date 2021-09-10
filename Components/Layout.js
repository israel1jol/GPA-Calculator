import Nav from './Nav'
import ContentBox from './ContentBox'
import style from '../styles/Layout.module.css'
import CourseNumField from './CourseNumField'

const Layout = ({children}) => {
    return (
        <div>
            <Nav />
            <main className={style.main}>
                {children}
                <ContentBox ><CourseNumField /></ContentBox>
            </main>
        </div>
    )
}

export default Layout