import React from "react";
import { Box, styled, Typography, Card, Button } from "@mui/material";

// const EmptyPlaylistBox = styled(Box)(({theme})=>({
//   borderRadius:'8px',
//   backgroundColor: '#292828ff',
//   color: theme.palette.text.primary,
//   width: '100%',
//   padding: '8px',
//   marginBottom: '8px',
//   marginRight: '8px',
// }))

// const CreatePlaylistBtn = styled('button')(({ theme }) => ({
//   background: '#ffffffff',
//   border: 'none',
//   borderRadius: '20px',
//   fontWeight: '700',
//   cursor: 'pointer',
//   padding: '10px',
//   marginTop: '20px',
// }))

const EmptyPlaylistBox = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: "20px",
  borderRadius: "8px",
}));

const CreatePlaylistBtn = styled(Button)({
  marginTop: "20px",
  fontWeight: "700",
});

const EmptyPlaylist = () => {
  return (
    <EmptyPlaylistBox>
      <Typography variant="body1" fontWeight={700}>
        Create your first playlist
      </Typography>
      <Typography variant="body2" fontWeight={400}>
        It's easy, we'll help you
      </Typography>
      <CreatePlaylistBtn variant="contained" color="secondary">
        Create playlist
      </CreatePlaylistBtn>
    </EmptyPlaylistBox>
  );
};

export default EmptyPlaylist;
