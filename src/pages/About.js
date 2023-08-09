import ProfilePhoto from "../assets/profilePhoto.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1 className="heading">About Me:</h1>
        <p className="about-text about-text-top">
          I pride myself in taking on challenges, solving them, and being
          creative in the process.
        </p>
        <p className="about-text">
          As a graduate from the University of Texas Austin Full Stack Coding
          Bootcamp I have experience with React, JavaScript, HTML, CSS, MongoDB,
          Bootstrap and more.
        </p>
        <p className="about-text">
          Prior to web development, I was Director of Percussion in a large 6A
          high school. I was part of a team of directors that collectively led
          our student musicians to many great successes in the Fine Arts World.
        </p>
        <p className="about-text">
          My prior skills include teaching, music technology (Finale, audio
          design), Microsoft Office, classroom management, public speaking,
          public engagement, communication, and team collaboration across
          multiple platforms.
        </p>
        <p className="about-text">
          I have a Bachelor of Science in Music Education (EC-12) with
          performance emphasis.
        </p>
        <p className="about-text">
          My hobbies in life are learning new and interesting things, making
          music, and gardening.
        </p>
      </div>
      <div className="image-box">
        <img className="profile-pic" src={ProfilePhoto} alt="profilePic" />
      </div>
    </div>
  );
};

export default About;
