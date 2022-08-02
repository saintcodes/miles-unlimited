import React, { useEffect, useState } from 'react'
import { ImageList, ImageListItem, ImageListItemBar, ListSubheader, IconButton } from '@mui/material'
// import { InfoIcon } from '@mui/icons-material'

function Home() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    fetch("/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts))
  }, [])

  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {posts.map((post) => (
        <ImageListItem key={post.image}>
          <img
            src={`${post.image}?w=248&fit=crop&auto=format`}
            srcSet={`${post.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={post.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={post.title}
            subtitle={post.content}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${post.title}`}
              >
                {/* <InfoIcon /> */}
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
        
  )
}

export default Home