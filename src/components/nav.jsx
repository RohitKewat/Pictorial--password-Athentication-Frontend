import { useNavigate } from "react-router-dom"


const Nav=()=>{
    const navigate = useNavigate() 
   
    return(
        
        <>
           <button onClick={()=>navigate("/")}>Home </button>
           <button onClick={()=>navigate("/login")}>Login</button>
           <button onClick={()=>navigate("/registration")}>registration</button>
           <button onClick={()=>navigate("/aboutus")}> About us </button>
        </>
    )
}

export default Nav