import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { Button, TextField } from '@mui/material'


function UserProfile({user, setUser}) {
  
  console.log(user)
  // const [canvasState, setCavnasState] = useState()
  const [formData, setFormData] = useState({
    username: user.username,
    password: user.password
  });

  // console.log("user line 13", user)
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
    // fetch("/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // }).then((r) => {
    //   if (r.ok) {
    //     r.json().then((user) => onLogin(user));
    //     // setIsLoggedIn((isLoggedIn) => !isLoggedIn);
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

  const handleUsernameUpdate = (e) => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <div className="formTitleLink5">
      <h1>{user.username}</h1>
      <Box
          component="form"
          sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
          noValidate
          autoComplete="off"
          onSubmit={handleUsernameUpdate}
        >
          <TextField 
            name="username" 
            label="Username" 
            variant="filled" 
            value={formData.username} 
            onChange={handleChange} 
            required
          />
            <br></br>
            <br></br>
          <Button color="error" type="submit" variant="outlined">Change Username</Button> 
            <br></br>
            <br></br>
            <br></br>
       </Box>
    </div>
  )
}

export default UserProfile