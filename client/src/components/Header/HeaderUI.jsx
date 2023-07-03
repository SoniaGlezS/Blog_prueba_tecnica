
import { Link } from "react-router-dom"
import "../Header/Header.css"
import logo from '../Header/images/logo80_dias.JPG'

export default function HeaderUI(){
    return(
        <header className="row d-flex justify-content-center align-items-center" id="header_main_container">
            <div className="header_content">
                <Link to={'/'}>
                    <img src={logo} alt="logo" className="mt-4" id="logo"/>
                </Link>
                <p className="h1 flex-grow-1" id="blog_name">Días</p>
            </div>
        </header>
    )
}