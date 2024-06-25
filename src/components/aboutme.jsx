import React from 'react';
import ProfilePic from  "../assets/Developer-photo.jpeg"


const AboutMe = () => {
  return (
    <section>
      <h2>About Me</h2>
      <img src = {
        ProfilePic
      } alt="Developer" />
      <p>Thanks for checking out my portolio if you can't tell, I am a very ametuerish developer with a lot of ambition and creativity. Feel free to puruse the site and get in touch! Thanks</p>
    </section>
  );
};

export default AboutMe;
