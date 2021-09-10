import style from '../styles/ContentBox.module.css'

const ContentBox = ({children}) => {
    return (
        <div className={style.box}>
            <main>{children}</main>
        </div>
    )
}

export default ContentBox