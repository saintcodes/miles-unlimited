import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Button from '@mui/material/Button'


function Login({user, onLogin, setIsLoggedIn}) {
  const history = useHistory()
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [errors, setErrors] = useState([])

  const handleChange = (e) => {
    let target = e.target
    let value = target.type === 'checkbox' ? target.checked : target.value
    let name = target.name
    setFormData((formData) => ({...formData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        setIsLoggedIn((isLoggedIn) => !isLoggedIn);
        history.push("/games")
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
    setFormData({
      username: "",
      password: "",
    });
  }

  return (
    <div className="login">
      <div>
        <br></br>
        <h2>placeholder header</h2>
        <br></br>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="username"
              id="username"
              placeholder="Enter your username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
          <br></br>
            <Button variant="contained">Sign In</Button> <br></br>
            <br></br>
            Need a Miles Unlimited account?&nbsp;
            <Link to="/">
              Create one here
            </Link>
            <br></br>
            <br></br>
            <>
              {errors.map((err) => (
                <div key={err}>{err}</div>
              ))}
            </>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login