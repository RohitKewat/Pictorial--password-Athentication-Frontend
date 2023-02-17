import Nav from "./nav";
import { useNavigate } from "react-router-dom";
import "./home.css";
const Home=()=>{
 const navigate = useNavigate(); 
    return (
      <>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="left-column">
              <h2 className="left-heading">
                Enhancing User Authentication with Pictorial Password in React
              </h2>
              <p className="left-paragraph">
                In this project, we will develop a graphical password
                authentication system using React. Graphical passwords are an
                effective alternative to traditional alphanumeric passwords,
                providing a higher level of security and ease of use. Our goal
                is to develop a React-based system that enhances user security
                and provides a user-friendly experience.
              </p>
              <button
                className="btn success"
                onClick={() => navigate("/registration")}
              >
                Live Demo
              </button>
              {/* <button className="btn info">Live Demo</button> */}
            </div>
            <div className="right-column">
              <img src="images/bgilogo.jpg" alt="" width={400} />
            </div>
          </div>
        </div>
      </>
    );
}

export default Home