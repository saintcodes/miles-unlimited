import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import  { Button, TextField} from '@mui/material'
import { Box } from '@mui/system'

function SignUp({user, onLogin}) {
  const history = useHistory()
  const [signUpForm, setSignUpForm] = useState({
    username: "",
    password: "",
    hasAgreed: false
  })
  const [errors, setErrors] = useState([])

  const handleChange = (e) => {
    console.log('hello')
    let target = e.target
    let value = target.type === 'checkbox' ? target.checked : target.value
    let name = target.name
    setSignUpForm((signUpForm) => ({...signUpForm,
      [name]: value
    }))
    console.log(signUpForm)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(signUpForm)
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(signUpForm),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        // setIsLoggedIn((isLoggedIn) => !isLoggedIn);
        history.push("/home")
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
    setSignUpForm({
      username: "",
      password: "",
    });
  }

  return (
    <div>
      <div 
        className="formTitleLink4" 
        style={{backgroundColor: 'smoke', opacity: 0.9}}
      >
      <h1>Miles Unlimited</h1>
        <Box
          component="form"
          sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField 
            name="username" 
            label="Username" 
            variant="filled" 
            value={signUpForm.username} 
            onChange={handleChange} 
            required
          />
            <br/>
          <TextField 
            name="password" 
            label="Password" 
            type="password" 
            variant="filled" 
            value={signUpForm.password} 
            onChange={handleChange} 
            required
          />
            <br></br>
          <div style={{color: "red"}}>
            {errors.map((err) => (
              <div key={err}>{err}</div>
            ))}
          </div>
            <br></br>
          <Button type="submit" variant="contained">Sign Up</Button> <br></br>
        <div>
            <br></br>
          Already have a Miles Unlimited account?&nbsp;
          <a href="/">
            Log in here!
          </a>
          <br></br>
          <br></br>
        </div>
       </Box>
      </div>
    </div>
  );
}

export default SignUp