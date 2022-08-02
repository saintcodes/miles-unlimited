import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css'
import Login from './Login'
import Navigate from './Navigate'
import About from './About'
import NewEntry from './NewEntry'
import UserProfile from './UserProfile'
import Home from './Home'
import SignUp from './SignUp'

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  const handleLogIn = (user) => {
    setUser(user);
  }
  
  console.log("user:", user)

  return (
      <div className="login">
      <img alt="travel" src="https://www.elegantthemes.com/blog/wp-content/uploads/2017/06/shutterstock_102245596.jpg"/>
        {user && user.username ?
          <Navigate
            user={user} 
            setUser={setUser}
          /> : <></>
        }
        <Switch>
          <Route exact path="/sign-up">
            <SignUp 
              onLogin={handleLogIn}
              user={user}
              
            />
          </Route>
          <Route exact path="/about">
            <About 
              user={user}
              setUser={setUser}
              
            />
          </Route>
          <Route exact path="/new">
            <NewEntry 
              user={user}
              setUser={setUser}

            />
          </Route>
          <Route exact path="/my-profile">
            <UserProfile 
              user={user}
              setUser={setUser}
              
            />
          </Route>
          <Route exact path="/home">
            <Home 
              user={user}
              setUser={setUser}

            />
          </Route>
          <Route exact path="/">
            <Login 
              onLogin={handleLogIn}
              
            />
          </Route>
        </Switch>
      <img alt="travel" src="https://www.elegantthemes.com/blog/wp-content/uploads/2017/06/shutterstock_102245596.jpg"/>
      <br></br>
      </div>
  );
}

export default App;
