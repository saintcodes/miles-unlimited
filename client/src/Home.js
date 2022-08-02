import React, { useEffect, useState } from 'react'
import { ImageList, ImageListItem, ImageListItemBar, ListSubheader, IconButton } from '@mui/material'
// import { InfoIcon } from '@mui/icons-material'

function Home() {
  const [posts, setPosts] = useState([])
//   const images = [
//     'travel_pics/travel1.jpeg', 
//     'travel_pics/travel2.jpeg', 
//     'travel_pics/travel3.jpeg', 
//     'travel_pics/travel4.jpeg',
//     'travel_pics/travel5.jpeg', 
//     'travel_pics/travel6.jpeg', 
//     'travel_pics/travel7.jpeg', 
//     'travel_pics/travel8.jpeg',
//     'travel_pics/travel9.jpeg',
//     'travel_pics/travel10.jpeg'
// ]
  
  useEffect(() => {
    fetch("/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts))
  }, [])

  return (
    <div>
    <ImageList sx={{ width: 1000, height: 1000, backgroundColor: 'primary.dark'}}>
      <ImageListItem key="Subheader" cols={2}>
        {/* <ListSubheader component="div"></ListSubheader> */}
      </ImageListItem>
      {posts.map((post) => (
        <ImageListItem key={post.image}>
          <img
            src={`${post.image}?w=248&fit=crop&auto=format`}
            srcSet={`${post.image}?w=248&fit=crop&auto=format&dpr=2 1x`}
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
    </div>
        
  )
}

export default Home