import { useNavigate } from "react-router-dom"
import './navbar.css';

const Nav=()=>{
    const navigate = useNavigate() 
   
    return(
<div>
        <header>
          <h1>Pictorial Password Authentication</h1>
        </header>
        <nav>
          <ul>
           <span onClick={()=>navigate("/")}><li>Home</li></span>
           <span onClick={()=>navigate("/login")}><li>Login</li></span>
           <span onClick={()=>navigate("/registration")}><li>Registration</li></span>
           <span onClick={()=>navigate("/aboutus")}><li>About Us</li></span>
          </ul>
          <div className="handle">Menu</div>
        </nav>
      </div>
      
    )
}

export default Nav