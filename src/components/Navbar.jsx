import { Link, NavLink } from "react-router-dom"


export const Navbar = () => {
    
   
    return (
        <nav>         
                <img className="logo" src="./src/assets/Caffreydevlogo.png" />
                <Link to="/home" className="nav-link">Home</Link>
                
          
        </nav>
    )
}