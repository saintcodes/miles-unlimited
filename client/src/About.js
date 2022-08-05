import React from 'react'


function About({ user }) {

  console.log(user)

  return (
    <div>

      <div className='about-description'>
        
        <video id='about-video' autoPlay loop muted>
          <source src='https://player.vimeo.com/external/398880351.sd.mp4?s=22770dede9d23a9ff4d5b8067470a96d37021f83&profile_id=164 '></source>
        </video>
        
        <div className='about-text'>
          <h1>About Us</h1>
          <span>A travel blog.</span>
          <p> Miles unlimited was established in Aug of 2022 by web-development students:
            Ignacio Yz, and Sinclair Shang as a class project. Despite pursuing a relatively
            sedentary profession, we both share an ambition to expand our miles, experiences,
            and understanding of the divine world which we inhabit. We hope you enjoy our site!
          </p>
        </div>

      </div>

     

      <div className='mission-div' >
        <h1> Mission </h1>
        <p>Our mission is to deliver a high quality, and aestheically pleasing
          platform. We encourage members to share and connect with each other's global
          experiences, allegories, tips, stories. </p>
      </div>







    </div>
  )
}

export default About