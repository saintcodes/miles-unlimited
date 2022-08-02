import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css'
// import Button from '@mui/material/Button'
import Login from './Login'
import Navigate from './Navigate'
import About from './About'
import NewEntry from './NewEntry'
import UserProfile from './UserProfile'
import Home from './Home'
import SignUp from './SignUp'

function App() {
  const [user, setUser] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [welcome, setWelcome] = useState(false);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  const handleLogIn = (user) => {
    setUser(user);
    // setWelcome((welcome) => !welcome);
  }
  
  console.log("user:", user)
  // console.log("welcome:", welcome)
  // console.log("isLoggedIn", isLoggedIn)

  return (
    <BrowserRouter>
      <div className="login">
      <img alt="travel" src="https://www.elegantthemes.com/blog/wp-content/uploads/2017/06/shutterstock_102245596.jpg"/>
        {user && (
          <Navigate
            // isLoggedIn={isLoggedIn} 
            // setIsLoggedIn={setIsLoggedIn} 
            // welcome={welcome} 
            user={user} 
            setUser={setUser}
          />
        )}
        <Switch>
          <Route path="/sign-up">
            <SignUp 
              user={user}
              onLogin={handleLogIn}
              // setIsLoggedIn={setIsLoggedIn}
              // isLoggedIn={isLoggedIn}
            />
          </Route>
          <Route path="/about">
            <About 
              user={user}
              onLogin={handleLogIn}
              // setIsLoggedIn={setIsLoggedIn}
              // isLoggedIn={isLoggedIn}
            />
          </Route>
          <Route path="/new">
            <NewEntry 
              user={user}
              onLogin={handleLogIn}
              // setIsLoggedIn={setIsLoggedIn}
              // isLoggedIn={isLoggedIn}
            />
          </Route>
          <Route path="/my-profile">
            <UserProfile 
              user={user}
              onLogin={handleLogIn}
              // setIsLoggedIn={setIsLoggedIn}
              // isLoggedIn={isLoggedIn}
            />
          </Route>
          <Route path="/home">
            <Home 
              user={user}
              onLogin={handleLogIn}
              // setIsLoggedIn={setIsLoggedIn}
              // isLoggedIn={isLoggedIn}
            />
          </Route>
          <Route path="/">
            <Login 
              user={user}
              onLogin={handleLogIn}
              // setIsLoggedIn={setIsLoggedIn}
              // isLoggedIn={isLoggedIn}
            />
          </Route>
        </Switch>
      <img alt="travel" src="https://www.elegantthemes.com/blog/wp-content/uploads/2017/06/shutterstock_102245596.jpg" />
      </div>
      <br></br>
      <div className="login"></div>
    </BrowserRouter>
  );
}

export default App;
