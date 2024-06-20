import React from 'react';
import ProfilePic from  "../assets/Developer-photo.jpeg"


const AboutMe = () => {
  return (
    <section>
      <h2>About Me</h2>
      <img src = {
        ProfilePic
      } alt="Developer" />
      <p>I am a very ametuerish developer with a lot of ambition and creativity.</p>
    </section>
  );
};

export default AboutMe;
