import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Button, TextField , Box } from '@mui/material'


function NewEntry({user}) {
  const history = useHistory()
  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    "title": "",
    "content": "",
    "image": ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...formData, 
        user_id: user.id})
    }).then((res) => {
      if (res.ok) {
      res.json().then((data) => console.log(data))
      history.push("/home")
    } else {
      res.json().then((err) => setErrors(err.errors));
    }})
    setFormData({
      title: "",
      content: "",
      image: ""
    });
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    console.log(name, value)
    setFormData((formData) => ({...formData,
      [name]: value}))
  }

  return (
    <div>
      <h1 style={{margin: 100}}>New Post</h1>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{
            margin: 0,
            textAlign: "left",
            position: "absolute",
            top: 150,
            left: 100,
            outline: "thick",
            border: "black"
          }}
        >
          <br/>    
          <br/>    
          <br/>    
          <br/>    
        <TextField
          id="standard-textarea"
          name="title"
          label="title"
          placeholder="Title"
          variant="standard"
          size="large"
          color="secondary"
          value={formData.title}
          onChange={handleChange}
          required
          sx={{
            height: "auto",
            width: 400,
          }}
        />
        <br/>
        <TextField
          id="standard-textarea"
          name="image"
          label="image (optional)"
          placeholder="Add an Image"
          variant="standard"
          size="large"
          color="secondary"
          value={formData.image}
          onChange={handleChange}
          sx={{
            height: "auto",
            width: 400,
          }}
        />
          <br/>
          <br/>
        <TextField
          multiline
          id="outlined-multiline-static"
          rows={4}
          name="content"
          label="content"
          variant="standard"
          placeholder="Start new blog entry..."
          size="large"
          color="secondary"
          value={formData.content}
          onChange={handleChange}
          required
          sx={{
            height: 200,
            width: 800,
          }}
        />
        <br/>
        <Button
          type="submit"
          variant="contained"
        >Publish</Button>
      </Box>
    </div>
  )
}

export default NewEntry