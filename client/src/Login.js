import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system';

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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e, 'hello')
    // fetch("/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // }).then((r) => {
    //   if (r.ok) {
    //     r.json().then((user) => onLogin(user));
    //     setIsLoggedIn((isLoggedIn) => !isLoggedIn);
    //     history.push("/home")
    //   } else {
    //     r.json().then((err) => setErrors(err.errors));
    //   }
    // })
    // setFormData({
    //   username: "",
    //   password: "",
    // });
  }

  return (
    <div>
      <div className="formTitleLink3">
      <h1>Miles Unlimited</h1>
        <Box
          component="form"
          x={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off" 
          onSubmit={handleSubmit}
        >
          <div>
            <TextField id="username" label="Username" variant="filled" required/>
            <br/>
            <TextField id="password" label="Password" type="password" variant="filled" required/>
          </div>
          <div>
          <br></br>
            <Button onSubmit={handleSubmit} variant="contained">Sign In</Button> <br></br>
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
        </Box>
      </div>
    </div>
  );
}

export default Login