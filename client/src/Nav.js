import React from 'react'
import { useHistory } from 'react-router-dom'
import nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function Nav({user, setUser, setIsLoggedIn}) {
  const history = useHistory()

  function handleLogout() {
    console.log('hello')
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/");
      }
    });
    setUser(null)
    setIsLoggedIn((isLoggedIn) => !isLoggedIn)
  }
  return (
    <Container>
      {user && (
        <Nav>
          <br></br>
            <span>
              Welcome back, {user.username}!
            </span> 
          <Nav.Link href="/all">
            DESTINATIONS
          {/* additional functionality by continent/region via drop down menu */}
          </Nav.Link>
          <Nav.Link href="/about">
            ABOUT
          </Nav.Link>
          <Nav.Link href="/new">
            NEW ENTRY
          </Nav.Link>
          <Nav.Link href="/profile">
            PROFILE
          </Nav.Link>
          <Nav.Link href="/" onClick={handleLogout}>
            LOGOUT
          </Nav.Link>
        </Nav>
      )}
    </Container>
  )
}

export default Nav