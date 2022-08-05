import React from 'react'
import { useHistory } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {Avatar} from '@mui/material'
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

function Navigate({user, setUser}) {
  const history = useHistory()

  function handleLogout() {
    console.log('hello')
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(() => "");
        history.push("/");
      }
    });
  }
console.log(user)

  return (
     <Container className="navigation-container">
      
      {user && (
        <Nav id='nav-bar'>
          <h3 className='logo-header'>Miles Unlimited</h3>
          <div id='ss-logos'>
          <FaFacebook className='logo' />
          <FaTwitter className='logo'/>
          <FaInstagram />
          </div>
          <br></br>
            <span className='user-span'>
              Welcome back, <strong><em>{user.username}!</em></strong>
            </span>
            &nbsp;&nbsp;
              <Avatar alt={user.username} src={user.image} /> 
          <br></br>
          <ul><Nav.Link href="/home">
            Home
          {/* additional functionality by continent/region via drop down menu */}
          </Nav.Link></ul>
          <br/>
          <ul><Nav.Link href="/about">
            About
          </Nav.Link></ul>
          <br/>
          <ul><Nav.Link href="/new">
            New Entry
          </Nav.Link></ul>
          <br/>
          <ul><Nav.Link href="/my-profile">
            Profile
          </Nav.Link></ul>
          <br/>
          <ul><Nav.Link href="/" onClick={handleLogout}>
            Logout
          </Nav.Link></ul>
        </Nav>
      )}
     </Container>
  )
}

export default Navigate