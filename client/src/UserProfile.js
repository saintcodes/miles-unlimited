import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { Button, TextField, Avatar } from '@mui/material'


function UserProfile({user}) {
  
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

  const handleUserImageUpdate = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <div className="formTitleLink5">
      <h1 className='user-'>{user.username}</h1>
      <Avatar alt={user.username} src={user.image} /> 
      <Box
          component="form"
          sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
          noValidate
          autoComplete="off"
          onSubmit={handleUserImageUpdate}
        >
          <TextField 
            name="image" 
            label="Image" 
            variant="standard" 
            value={formData.image} 
            onChange={handleChange} 
          />
            <br></br>
            <br></br>
          <Button color="primary" type="submit" variant="outlined">Update Photo</Button>
       </Box>
    </div>
  )
}

export default UserProfile