import React from 'react'

function About({user}) {

    console.log(user)

  return (
    <div>
      <h1>{user.username}</h1>

      Meet the Creators
    </div>
  )
}

export default About