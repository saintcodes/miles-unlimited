import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css'
import Button from '@mui/material/Button'
import Login from './Login'
import Nav from './Nav'
import About from './About'
import NewEntry from './NewEntry'
import Profile from './Profile'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [welcome, setWelcome] = useState(false);

  const handleLogIn = () => {

  }

  return (
    <BrowserRouter>
      <div className="login">
        <Button color="secondary" variant="outlined">LogOut</Button>
        {user && (
          <Nav 
            isLoggedIn={isLoggedIn} 
            setIsLoggedIn={setIsLoggedIn} 
            welcome={welcome} 
            user={user} 
            setUser={setUser}
          />
        )}
        <Switch>
          <Route path="/">
            <h1>Miles Unlimited</h1>
            <Login 
              user={user}
              onLogin={handleLogIn}
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}/>
          </Route>
          <Route path="/about">
            <About 
              user={user}
              onLogin={handleLogIn}
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}/>
          </Route>
          <Route path="/new">
            <NewEntry 
              user={user}
              onLogin={handleLogIn}
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}/>
          </Route>
          <Route path="/profile">
            <Profile 
              user={user}
              onLogin={handleLogIn}
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}/>
          </Route>
          <Route path="/home">
            <Home 
              user={user}
              onLogin={handleLogIn}
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}/>
          </Route>
        </Switch>
      </div>
      <br></br>
      <div className="login"></div>
    </BrowserRouter>
  );
}

export default App;
