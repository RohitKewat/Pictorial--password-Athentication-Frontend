
import Register from "./components/registration"
import { BrowserRouter ,Route,Router,Routes} from "react-router-dom"
import Login from "./components/login"
import Home from "./components/home"
import Aboutus from "./components/aboutus"
import User from "./components/userPage"
const App=()=>{
   
  
  return(

    <>

    <BrowserRouter>
    <Routes>


      <Route path="/" element={ <Home/>}/>

      <Route path="/registration" element={ <Register/>}/>
      <Route path="/login" element={ <Login/>}/>
      <Route path="/aboutus" element={ <Aboutus/>}/>
      <Route path="/user" element={ <User/>}/>



       </Routes>

    
    </BrowserRouter>
    </>
  )
}

export default App 