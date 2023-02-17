import Nav from "./nav"
import "./aboutus.css";
const User=()=>{

    return (
      <>
        <Nav />
        <div className="container shadow-lg" id="userbox">
          <div className="service1">
            <img src="images/user.png" alt="" className="project1" />
            <h2 className="subheading">Welcome 👋,</h2>
            <p className="description">
              We're excited to have you as a part of our community! Our platform
              is designed to help you achieve your goals and connect with
              like-minded individuals. As a registered user, you have access to
              a wide range of features, tools, and resources. Whether you're
              here to learn, grow, or connect, we've got you covered. Thanks
              again for joining us, and we look forward to helping you reach new
              heights!
            </p>
          </div>
        </div>
      </>
    );
}

export default User