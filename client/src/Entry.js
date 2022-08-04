import React, {useState} from 'react'
import { Modal, Box, Typography, Header, MainFeaturedPost, Grid, Main, Sidebar, Container } from '@mui/material'

function Entry({post, open, setOpen}) {
  // const [post, setPost] = useState({})
  const handleClose = () => setOpen(false);
  const [selectedPost, setSelectedPost] = useState("")
console.log("hi")
  // setSelectedPost(post)
  // console.log(post)
  // fetch(`/posts/${id}`)
  //   .then((res) => res.json())
  //   .then((post) => setPost(post))
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 760,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
    return (
      <Modal
        // id={id}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {post.content}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {post.content}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
  )
}

export default Entry