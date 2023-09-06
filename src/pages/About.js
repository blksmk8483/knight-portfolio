// MY ORIGINAL VS
// import ProfilePhoto from "../assets/profilePhoto.jpg";
// import "../styles/About.css";

// const About = () => {
//   return (
//     <div className="container about-page">
//       <div className="text-zone">
//         <h1 className="heading">About Me:</h1>
//         <p className="about-text about-text-1 about-text-top">
//           I pride myself in taking on challenges, solving them, and being
//           creative in the process.
//         </p>
//         <p className="about-text about-text-2">
//           As a graduate from the University of Texas Austin Full Stack Coding
//           Bootcamp I have experience with React, JavaScript, HTML, CSS, MongoDB,
//           Bootstrap and more.
//         </p>
//         <p className="about-text about-text-3">
//           Prior to web development, I was Director of Percussion in a large 6A
//           high school. I was part of a team of directors that collectively led
//           our student musicians to many great successes in the Fine Arts World.
//         </p>
//         <p className="about-text about-text-4">
//           My prior skills include teaching, music technology (Finale, audio
//           design), Microsoft Office, classroom management, public speaking,
//           public engagement, communication, and team collaboration across
//           multiple platforms.
//         </p>
//         <p className="about-text about-text-5">
//           I have a Bachelor of Science in Music Education (EC-12) with
//           performance emphasis.
//         </p>
//         <p className="about-text about-text-6">
//           My hobbies in life are learning new and interesting things, making
//           music, and gardening.
//         </p>
//       </div>
//       <div className="image-box">
//         <img className="profile-pic" src={ProfilePhoto} alt="profilePic" />
//       </div>
//     </div>
//   );
// };

// export default About;

// ----------
// My version that just went off the rails 😆

// import React, { useState } from "react";
// import ProfilePhoto from "../assets/profilePhoto.jpg";
// import "../styles/About.css";

// const About = () => {
//   const [showText, setShowText] = useState(false);

//   const handleButtonClick = () => {
//     setShowText(true);
//   };

//   return (
//     <div className={`container about-page ${showText ? "show-text" : ""}`}>
//       <div className="image-box">
//         <div className="center-contents">
//           {!showText && (
//             <button className="show-text-button" onClick={handleButtonClick}>
//               Show Text
//             </button>
//           )}
//           <div className={`profile-pic ${showText ? "hidden" : ""}`}>
//             <img src={ProfilePhoto} alt="profilePic" />
//           </div>
//           {showText && (
//             <div className="text-zone">
//               <h1 className="heading">About Me:</h1>
//               <p className="about-text about-text-1 about-text-top">
//                 I pride myself in taking on challenges, solving them, and being
//                 creative in the process.
//               </p>
//               <p className="about-text about-text-2">
//                 As a graduate from the University of Texas Austin Full Stack
//                 Coding Bootcamp I have experience with React, JavaScript, HTML,
//                 CSS, MongoDB, Bootstrap and more.
//               </p>
//               <p className="about-text about-text-3">
//                 Prior to web development, I was Director of Percussion in a
//                 large 6A high school. I was part of a team of directors that
//                 collectively led our student musicians to many great successes
//                 in the Fine Arts World.
//               </p>
//               <p className="about-text about-text-4">
//                 My prior skills include teaching, music technology (Finale,
//                 audio design), Microsoft Office, classroom management, public
//                 speaking, public engagement, communication, and team
//                 collaboration across multiple platforms.
//               </p>
//               <p className="about-text about-text-5">
//                 I have a Bachelor of Science in Music Education (EC-12) with
//                 performance emphasis.
//               </p>
//               <p className="about-text about-text-6">
//                 My hobbies in life are learning new and interesting things,
//                 making music, and gardening.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

// -------------

import React, { useState } from "react";
import ProfilePhoto from "../assets/profilePhoto.jpg";
import "../styles/About.css";

const About = () => {
  const [showText, setShowText] = useState(false);

  const handleButtonClick = () => {
    setShowText(true);
  };

  return (
    <div className={`about-container ${showText ? "show-text" : ""}`}>
      <div className="box">
        {!showText ? (
          <div className="image-box">
            <img src={ProfilePhoto} alt="Profile" />
          </div>
        ) : (
          <div className="text-box">
            <h1>About Me</h1>
            <p>
              Your text content goes here. You can provide a brief description
              about yourself.
            </p>
          </div>
        )}
      </div>
      {!showText && (
        <button className="show-text-button" onClick={handleButtonClick}>
          Show Text
        </button>
      )}
    </div>
  );
};

export default About;
