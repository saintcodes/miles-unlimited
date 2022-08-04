import React, { useEffect, useState } from 'react'
import { Box, Button, Typography, Modal, ImageList, ImageListItem, ImageListItemBar, ListSubheader, IconButton } from '@mui/material'
import {useHistory} from 'react-router-dom'
import Entry from './Entry'

function Home({user}) {
  const [posts, setPosts] = useState([])
  const history = useHistory()
  // const [post, setPost] = useState({})
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  // const style = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 400,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
  // };

  useEffect(() => {
    fetch("/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts))
  }, [])

  // const routeChange = (e) => {
  //   let postId = parseInt(e.target.alt)
  //   console.log(typeof(postId))
    
  //   // fetch(`/posts/${postId}`, {
      
  //   // })
  //   history.push(`entry/${postId}`)
  // }
  
  return (
    <div>
      <ImageList 
        sx={{ 
          width: 1600, 
          height: 1200, 
          position: "relative", 
          top: 200,
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
            onClick={handleOpen}
            key={post.id}
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
      {handleOpen ? <Entry post={post} open={open} setOpen={setOpen}/> : <></>}
          </ImageListItem>
        ))}
      </ImageList>

      {/* <Modal
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
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}
    </div>
  )
}

export default Home