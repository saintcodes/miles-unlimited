import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system';

function Login({onLogin}) {
  const history = useHistory()
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [errors, setErrors] = useState([])

  const handleChange = (e) => {
    console.log('hello')
    const {name, value} = e.target
    setFormData((formData) => ({...formData,
      [name]: value
    }))
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        history.push("/home")
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
      <div className="formTitleLink3" style={{backgroundColor: 'white', opacity: 0.9}}>
      <h1>Miles Unlimited&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </h1>
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
            value={formData.username} 
            onChange={handleChange} 
            required
          />
            <br/>
          <TextField 
            name="password" 
            label="Password" 
            type="password" 
            variant="filled" 
            value={formData.password} 
            onChange={handleChange} 
            required
          />
            <br></br>
          <div style={{color: "red"}}>
            {errors.map((err) => (
              <div key={err}>{err}</div>
            ))}
          </div>
            {/* <br></br> */}
          <Button type="submit" variant="contained">Sign In</Button> <br></br>
        <div>
            {/* <br></br> */}
          Need a Miles Unlimited account?&nbsp;
          <a href="/sign-up">
            Create one here
          </a>
          {/* <br></br>
          <br></br> */}
        </div>
       </Box>
      </div>
  );
}

export default Login