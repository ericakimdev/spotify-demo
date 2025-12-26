import React from "react";
import {
  Typography,
  Card as MaterialCard,
  CardMedia,
  CardContent,
  styled,
} from "@mui/material";
import PlayButton from "./PlayButton";

interface CardProps {
  name: string;
  image: string;
  artistName: string | undefined;
}

const CardContainer = styled(MaterialCard)(({ theme }) => ({
  maxWidth: 260,
  backgroundColor: theme.palette.background.paper,
  padding: "10px",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  position: "relative",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    "& .play-button": {
      opacity: 1,
      transform: "translateY(-8px)",
    },
  },
}));

const PlayButtonDiv = styled("div")({
  position: "absolute",
  bottom: "8px",
  right: "8px",
  opacity: 0,
  transition: "all 0.3s ease",
  zIndex: 1,
});

const Card = ({ image, name, artistName }: CardProps) => {
  return (
    <CardContainer>
      <div style={{ position: "relative", width: "100%" }}>
        <CardMedia
          component="img"
          sx={{ height: 200, borderRadius: "4px" }}
          image={image}
        />
        <PlayButtonDiv className="play-button">
          <PlayButton />
        </PlayButtonDiv>
      </div>

      <CardContent>
        <Typography variant="body1" fontWeight={700} noWrap>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {artistName ?? "No Artist Name"}
        </Typography>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
