import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>MERN Stack Developer</h5>
              </div>
              <h3>ONGOING</h3>
            </div>
            <p>
              Working on real-world web development practices. Focuses on backend API integration, 
              improving coding standards, and building scalable full stack solutions with MERN technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Esports Organizer</h4>
                <h5>Esports &amp; Gaming Communities</h5>
              </div>
              <h3>RECENT</h3>
            </div>
            <p>
              Successfully organized esports tournaments and gaming events. Managed team coordination, 
              event planning, scheduling, and demonstrated strong leadership and group collaboration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BIT (Bachelor of IT)</h4>
                <h5>Ongoing Academic Education</h5>
              </div>
              <h3>ONGOING</h3>
            </div>
            <p>
              Currently pursuing a Bachelor of Information Technology (BIT) degree. Expanding theoretical 
              foundation in computer systems, algorithms, database designs, and modern web application development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
