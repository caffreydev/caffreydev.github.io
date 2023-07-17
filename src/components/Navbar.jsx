import { Link, NavLink } from "react-router-dom"


export const Navbar = () => {
    
   
    return (
        <nav className={window.innerWidth <= 480 ? "mobile-nav" : "desktop-nav"}>         
             
                <div className="logo">
                <img src="/src/assets/Caffreydevlogo.png" alt="caffreydev logo"/>
                </div>           
                <div className="links">
                <Link to="">Home</Link>
                <Link to="/socials">Socials</Link>
                <Link to="/projects">Projects</Link>
                </div>
                
        </nav>
    )
}