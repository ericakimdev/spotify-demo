import React from "react";
import { Box, styled, Typography, Button } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddIcon from "@mui/icons-material/Add";

const LibraryHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "8px",
  justifyContent: "space-between",
});

// const CreateLibraryButton = styled("button")(({ theme }) => ({
//   background: theme.palette.background.paper,
//   color: theme.palette.primary.main,
//   border: "none",
//   cursor: "pointer",
//   "&:hover": {
//     color: theme.palette.action.hover,
//   },
// }));

const LibraryHead = () => {
  const handleCreatePlaylist = () => {
     // create 
  };

  return (
    <LibraryHeader>
      <BookmarkIcon sx={{ marginRight: "20px" }} />
      <Typography variant="h2" fontWeight={700}>
        Your Library
      </Typography>
      <Button onClick={handleCreatePlaylist}>
        <AddIcon />
      </Button>
    </LibraryHeader>
  );
};

export default LibraryHead;
