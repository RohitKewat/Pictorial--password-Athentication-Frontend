import Nav from "./nav"
import "./aboutus.css";

const Aboutus=()=>{

    return (
      <>
        <Nav />
        <div className="container3" id="service">
          <h1 className="mainheading">About The Project Developers</h1>
          {/* Rohit */}
          <div className="service1">
            <img src="images/rohit.png" alt="" className="project1" />
            <h2 className="subheading">Rohit Kewat</h2>
            <p className="description">
              As a highly skilled and motivated full-stack developer, I have a
              passion for using the latest technologies to build dynamic and
              efficient web solutions. With a solid foundation in Node.js,
              React, MongoDB, HTML, CSS, JavaScript, and Express.js, I am able
              to create seamless user experiences and manage data effectively.
            </p>
            {/* Social Icon */}
            <div className="social-menu">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/rohit-kewat/"
                    target="blank"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/RohitKewat" target="blank">
                    <i className="fab fa-github" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/__r_k_________/"
                    target="blank"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* kuldeep */}
          <div className="service2">
            <img src="images/kuldeep.png" alt="" className="project2" />
            <h2 className="subheading">Kuldeep Kaware</h2>
            <p className="description">
              I am a Freelance Web Designer. I work with small business owners,
              startups, and individuals who want to get more online visibility.
              I have a broad technical skill set and three years of expertise in
              front-end web development. Capable of multitasking and juggling
              numerous urgent projects simultaneously. Always up to date on the
              newest trends and technology.
            </p>
            <div className="social-menu">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/kuldeep-kaware/"
                    target="blank"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/kuldeepkaware123" target="blank">
                    <i className="fab fa-github" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/kuldeep_kaware/"
                    target="blank"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h1 className="mainheading">About The Project Mentor</h1>
          <div className="service1">
            <img src="images/anveshsir.png" alt="" className="project2" />
            <h2 className="subheading">Dr. Anvesh Singh</h2>
            <p className="description">
              Assistant Professor at Bansal Institute of Science & Technology
              Bhopal.
            </p>
          </div>
        </div>
      </>
    );
}

export default Aboutus