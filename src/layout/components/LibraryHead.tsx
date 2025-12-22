import React from 'react'
import { Box, styled, Typography } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';

const LibraryHeader = styled('div')({
  display: 'flex',
  alignItems:'center',
  gap:'20px',
  padding: '8px'
})

const CreateLibraryButton = styled('button')(({ theme }) => ({
    background: theme.palette.background.paper,
    color: theme.palette.primary.main,
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
        color: theme.palette.action.hover,
    },
}))

const LibraryHead = () => {
  return (
    <LibraryHeader>
        <BookmarkIcon />
        <Typography variant='h2' fontWeight={700}>Your Library</Typography>
        <CreateLibraryButton>
            <AddIcon />
        </CreateLibraryButton>

    </LibraryHeader>
    
  )
}

export default LibraryHead
