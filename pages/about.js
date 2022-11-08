const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h2 className="about-title">About Me</h2>
        <p>
          I'm a full-stack developer with a passion for learning and sharing
          knowledge. I love to build things and I'm always looking for new
          challenges.
        </p>
        <p>
          I'm currently working as a full-stack developer trainee at{" "}
          <a href="https://www.jalasoft.com/" target="_blank" rel="noreferrer">
            Jalasoft
          </a>
          .
        </p>
      </div>
      <div className="about-right">
        <img src="/images/profile.jpg" alt="Rafael de Paula" />
      </div>
    </div>
  );
};

export default About;
