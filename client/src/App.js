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

  return (
    
      <div className="login">
      {/* <img alt="travel" src="https://www.elegantthemes.com/blog/wp-content/uploads/2017/06/shutterstock_102245596.jpg"/> */}
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
              
            />
          </Route>
          <Route exact path="/my-profile">
            <UserProfile 
              user={user}
              
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
        <video id="backround-video"  autoPlay loop muted>
<<<<<<< HEAD
      {/* <source src='./vid_loop/beach.mp4' type="video/mp4"/> */}
=======
      <source src='https://cdn.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_01B_Bali_1080p_027_preview.mp4' type="video/mp4"/>
>>>>>>> 97bfc5458f9c7970823cd33f5d7478180456b6d1
     </video>
      {/* <img alt="travel" src="https://www.elegantthemes.com/blog/wp-content/uploads/2017/06/shutterstock_102245596.jpg"/> */}
      <br></br>
      </div>
  );
}

export default App;
