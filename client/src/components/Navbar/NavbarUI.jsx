import { useNavigate } from "react-router";
import '../Navbar/Navbar.css'
export default function NavbarUI() {
    const navigate = useNavigate()
    return(
        <>
        <nav id="feed_navBar" className="d-flex  justify-content-end"><button className="btn btn-light m-2" onClick={() => navigate('/create_post')}>Crear nuevo post</button></nav>
        </>        
    )
}