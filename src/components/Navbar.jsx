import { Link } from "react-router-dom"


export const Navbar = () => {
    
   
    return (
        <nav >         
             
                <div className="logo">
                <img src="/Caffreydevlogo.png" alt="caffreydev logo"/>
                </div>           
                <div className="links">
                <Link to="">Home</Link>
                <Link to="/socials">Socials</Link>
                <Link to="/projects">Projects</Link>
                </div>
                
        </nav>
    )
}