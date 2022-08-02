import React from 'react'
import { useHistory } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function Navigate({user, setUser}) {
  const history = useHistory()

  function handleLogout() {
    console.log('hello')
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser({});
        history.push("/");
      }
    });
  }

  return (
    <Container className="navbar" style={{backgroundColor: "white"}}>
      {user && (
        <Nav>
          <br></br>
            <span>
              Welcome back, {user.username}!
            </span> 
          <br></br>
          <Nav.Link href="/all">
            DESTINATIONS
          {/* additional functionality by continent/region via drop down menu */}
          </Nav.Link>
          <br/>
          <Nav.Link href="/about">
            ABOUT
          </Nav.Link>
          <br/>
          <Nav.Link href="/new">
            NEW ENTRY
          </Nav.Link>
          <br/>
          <Nav.Link href="/my-profile">
            PROFILE
          </Nav.Link>
          <br/>
          <Nav.Link href="/" onClick={handleLogout}>
            LOGOUT
          </Nav.Link>
        </Nav>
      )}
    </Container>
  )
}

export default Navigate