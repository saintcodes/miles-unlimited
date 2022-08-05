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

  console.log(user, user.username)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  console.log(user.username)
  const handleLogIn = (user) => {
    setUser(user);
  }

  console.log(user.username)
  return (
      <div>
        {user && user.username ?
          <Navigate 
            user={user} 
            setUser={setUser}
          /> : <></>
        }
        <Switch>
          <Route exact path="/sign-up">
            <SignUp 
              onLogin={() => handleLogIn}
              user={user}
              
            />
          </Route>
          <Route exact path="/about">
            <About 
              user={user}
              
            />
          </Route>
          <Route exact path="/my-profile">
            <UserProfile 
              user={user}
              setUser={setUser}
            />
          </Route>
          <Route exact path="/new">
            <NewEntry 
              user={user}

            />
          </Route>
          <Route exact path="/home">
            <Home 
              user={user}

            />
          </Route>
          <Route exact path="/">
            <Login  
              onLogin={handleLogIn}
              
            />
          </Route>
        </Switch>

      </div>
  );
}

export default App;
