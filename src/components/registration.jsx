import { useState } from 'react';
// import '';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupSection from './SignupSection';
import Nav from "./nav"

function Register() {
  const [email, setemail] = useState();
  const [user, seteuser] = useState();
  const [pass, setpass] = useState();
  const [imageIds, setImageIds] = useState([]);

  const [message ,setmessage] = useState()
  const handleImageClick = (imageId) => {
    setImageIds([...imageIds, imageId]);
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    let password = imageIds.join(",")
    
    const formdata = new FormData();
    formdata.append("name", user);
    formdata.append("email",email);
    formdata.append("password", password);
    console.log(user);
    console.log(email);
    console.log(password);
    
    // fetch('https://pitorial-authentication.onrender.com/createuser', {

    //   method: 'POST',
    //   body: formdata
    // }).then(res => res.json()).then(data => console.log("line28",data))
    //---------------------------------------------------------------------------------

    const url = 'https://pitorial-authentication.onrender.com/createuser';
    const data = { 
      name: user, 
      email: email,
      password : password

    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    
    fetch(url, options)
      .then(response => {
        if (!response.status) {
          throw new Error('Network response was not successfull');
        }
  
        return response.json();
      })
      .then(data => {
        console.log("line 61",data);
        if(data.status==="failed"){
            setmessage("User is already Registered")
        }
        else if(data.status==="succefully created"){
            setmessage("Congratulation you are succeddfully created your account....!")
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setmessage(error.message)
      });
    
    //----------------------------------------------------------------

    
    setemail("")
    seteuser("")
    setImageIds("")

  }
  return (
    <div className="container h-100">
                 <Nav/>

      <div className="row h-100 justify-content-center align-items-center">
        <form className="col-md-9" >
          <div className="AppForm shadow-lg">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="AppFormLeft">
                  <h1>Sign Up</h1>
                  <div className="form-group position-relative mb-4">
                    <input type="text" className="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" id="username" placeholder="User Name" onChange={((e) => { seteuser(e.target.value) })} required value={user}/>
                  </div>
                  <div className="form-group position-relative mb-4">
                    <input type="email" className="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" id="email" placeholder="Email Address" onChange={((e) => { setemail(e.target.value) })} required value={email}/>
                  </div>
                  <>
                    <div className="form-group position-relative mb-4">
                      <input type="text" className="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" hidden id="password" placeholder="Password" value={imageIds} onChange={((e) => { setpass(e.target.value) })} required />
                    </div>
                    <div className="password">
                      <div className="passimg" onClick={() => handleImageClick(1)} id="s01"><img src="images\10.png" alt="" className="patimg" /></div>
                      <div className="passimg" onClick={() => handleImageClick(2)} id="s02"><img src="images\11.png" alt="" className="patimg" /></div>
                      <div className="passimg" onClick={() => handleImageClick(3)} id="s03"><img src="images\12.png" alt="" className="patimg" /></div>
                      <div className="passimg" onClick={() => handleImageClick(4)} id="s04"><img src="images\13.png" alt="" className="patimg" /></div>
                      <div className="passimg" onClick={() => handleImageClick(5)} id="s05"><img src="images\14.png" alt="" className="patimg" /></div>
                      <div className="passimg" onClick={() => handleImageClick(6)} id="s06"><img src="images\15.png" alt="" className="patimg" /></div>
                      <div className="passimg" onClick={() => handleImageClick(7)} id="s07"><img src="images\16.png" alt="" className="patimg" /></div>
                      <div className="passimg" onClick={() => handleImageClick(8)} id="s08"><img src="images\17.png" alt="" className="patimg" /></div>
                      <div className="passimg" onClick={() => handleImageClick(9)} id="s09"><img src="images\18.png" alt="" className="patimg" /></div>
                      <div className="passimg" onClick={() => handleImageClick(10)} id="s10"><img src="images\19.png" alt="" className="patimg" /></div>
                      <div className="passimg" onClick={() => handleImageClick(11)} id="s11"><img src="images\20.png" alt="" className="patimg" /></div>
                      <div className="passimg" onClick={() => handleImageClick(12)} id="s12"><img src="images\21.png" alt="" className="patimg" /></div>
                      <div className="passimg" onClick={() => handleImageClick(13)} id="s13"><img src="images\22.png" alt="" className="patimg" /></div>
                      <div className="passimg" onClick={() => handleImageClick(14)} id="s14"><img src="images\23.png" alt="" className="patimg" /></div>
                      <div className="passimg" onClick={() => handleImageClick(15)} id="s15"><img src="images\24.png" alt="" className="patimg" /></div>
                    </div>
                  </>
                  <button className="btn btn-success btn-block shadow border-0 py-2 text-uppercase " onClick={handleSubmit}>
                    Sign Up
                  </button>
                </div>
                {message ? <div>{message}  <button onClick={()=>setmessage("")}> OK</button> </div>:""}
              </div>
              <SignupSection />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}


export default Register;
