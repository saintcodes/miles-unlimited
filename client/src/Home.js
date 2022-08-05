import React, { useEffect, useState } from 'react'
import { FormControl, Avatar, Box, Button, Typography, Modal, TextField, ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import { useHistory } from 'react-router-dom'

function Home({user}) {
  const [posts, setPosts] = useState([])
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState({
    title: "",
    content: ""
  })
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  useEffect(() => {
    fetch("/posts")
    .then((res) => res.json())
    .then((posts) => setPosts(posts))
  }, [isLoading])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleOpen = (post) => {
    setOpen(true)
    setSelectedPost(post)
  }
  
  const handleClose = () => {
    setOpen(false)
    console.log(open);
  }

  function handleDelete(e) {
    setOpen(false)
    console.log(e.target.value)
     fetch(`/posts/${e.target.value}`, {
      method: "DELETE",
    }).then(() => setIsLoading(!isLoading))
    history.push("/home")
  }
  
  // function randomDate(start, end) {
  //   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  // }
  // const d = randomDate(new Date(2012, 0, 1), new Date());
  // console.log(d);
  
  function ChildModal({selectedPost}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};
    const [formData, setFormData] = useState ({
      title: "",
      content: ""
    })

    const handleChange = (e) => {
      const {name, value} = e.target
      setFormData((formData) => ({...formData,
        [name]: value
      }))
      console.log(formData)
    }

    function handleUpdate(selectedPost) {
      console.log(typeof(selectedPost.id))
      console.log('hello')
      fetch(`/posts/${selectedPost.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((r) => {
        if (r.ok) {
          r.json().then(() => setIsLoading(!isLoading))
          history.push('/home')
        }
      })
    }

    return (
      <React.Fragment>
        {user.id === selectedPost.user.id ?
        <Button 
          variant="outlined" 
          onClick={handleOpen}
        >Edit
        </Button>
        : null}
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <FormControl  sx={{ ...style, width: 400 }}>
            <h2 id="child-modal-title">{selectedPost.title}</h2>
            <p id="child-modal-description">{selectedPost.content}</p>
            <TextField 
            name="title" 
            label="Title" 
            variant="filled" 
            value={formData.title} 
            onChange={handleChange} 
            required
          />
          <br/>
            <TextField 
            multiline
            name="content" 
            label="Content" 
            variant="filled" 
            value={formData.content} 
            onChange={handleChange} 
            required
            />
            <br/>
            <br/>
            <Button variant="outlined" color="success" onClick={() => handleUpdate(selectedPost)} type="submit">Submit Changes</Button>
            <br/>
            <Button variant="outlined" color="error" onClick={handleClose}>Cancel</Button>&nbsp;
          </FormControl>
        </Modal>
      </React.Fragment>
    );
  }

  return (
    <div>
      <ImageList 
        sx={{ 
          width: 1600, 
          height: 1200, 
          position: "absolute", 
          top: 60,
          left: 100,
          backgroundColor: 'primary.dark',
          '&:hover': {
            color: 'red',
            backgroundColor: 'white'
          }
        }} 
        cols={4}
      >
        {posts.map((post) => (
          <ImageListItem
          key={post.id}
          onClick={()=>handleOpen(post)}
          sx={{'&:hover': {color: 'red', backgroundColor: 'white'}}}  
          >
            <img
              src={`${post.image}?w=248&fit=crop&auto=format`}
              srcSet={`${post.image}?w=248&fit=crop&auto=format&dpr=2 1x`}
              alt={post.id}
              value={post.user_id}
              loading="lazy"
            />
          <ImageListItemBar
            title={post.title}
            subtitle={post.content}
            sx={{height: 125}}
          />
          </ImageListItem>
        ))}
      </ImageList>

      {open ? <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <span style={{display: 'flex'}}>
          <strong><em>{selectedPost.user.username}</em></strong>
          </span>
          <Avatar alt={selectedPost.user.username} src={selectedPost.user.image} /> 
            <br></br>
            {/* {d} */}
        </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedPost.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {selectedPost.content}
          </Typography>
          <br></br>
        {user.id === selectedPost.user.id ? 
          <>
            <Button 
              variant="outlined" 
              color="error" 
              value={selectedPost.id} 
              onClick={handleDelete}>Delete
            </Button>
            &nbsp;
          </>
            : 
            null}
            <ChildModal 
              // handleUpdate={handleUpdate}
              selectedPost={selectedPost} 
            />
        </Box>
      </Modal>
      : null}
    </div>
  )
}

export default Home