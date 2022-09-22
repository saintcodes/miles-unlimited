import React, { useState } from 'react'
import { Box } from '@mui/system'
import { Button, TextField } from '@mui/material'
import { useHistory } from 'react-router'

function UserProfile({setUser, user}) {
  const history = useHistory()
  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    image: user.image,
    bio: user.bio
  });

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
    let id = parseInt(e.target.id)
    fetch(`/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({formData}),
    }).then((r) => {
      if (r.ok) {
        // r.json().then((user) => setUser(user));
        history.push("/my-profile")
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
    setFormData({
      image: "",
      bio: user.bio,
    });
  }


  return (
    <div>
      <Box
          component="form"
          id={user.id}
          onSubmit={handleSubmit}
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            width: 800,
            height: 800,
            position: "absolute",
            top: 120,
            left: 100,
          }}
          noValidate
          autoComplete="off"
        >
          <h1>Update Image</h1>
          <hr/>
          <TextField 
            name="image" 
            label="New Image URL" 
            variant="standard"
            size="large" 
            value={formData.image} 
            onChange={handleChange} 
          />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Update Bio</h1>
            <hr/>
  
            <br></br>
          <TextField 
            fullwidth
            id="fullWidth"
            name="bio" 
            multiline
            rows={4}
            sx={{
              height: 100,
              width: 100
            }}
            label="Edit bio" 
            variant="standard" 
            size="large"
            value={formData.bio} 
            onChange={handleChange} 
          />
            <br></br>
            <br></br>
            <br></br>
          <Button color="primary" type="submit" variant="outlined">Update Changes</Button>
       </Box>
    </div>
  )
}

export default UserProfile