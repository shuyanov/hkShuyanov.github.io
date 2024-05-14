import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

type TInputItem = {
  img: string;
  date: string;
  descriptions: string;
  size: "big" | "small";
  tags?: TTags[];
};

export type TTags = {
  title: string;
};

export default function BitCardPublick({
  img,
  date,
  descriptions,
  size,
  tags,
}: TInputItem) {
  return (
    <Card
      sx={{
        width: size === "small" ? 310 : 610,
        backgroundColor: "#B4D6F6B2",
        borderRadius: 5,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height={size === "small" ? "250" : "510"}
          image={img}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Полупрозрачный черный фон
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            paddingLeft: 2,
            paddingTop: 2,
          }}
        >
          <Typography variant="h5" component="div">
            {date}
          </Typography>
          <Typography variant="body2" color="inherit">
            {descriptions}
          </Typography>
        </Box>
      </CardActionArea>
      {tags?.map((item) => (
        <Button
          sx={{
            position: "absolute",
            bottom: 8,
            left: 8,
            borderRadius: 20,
            //   backgroundColor: "#00000047",
            ":hover": {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            },
          }}
          size="small"
          variant="outlined"
        >
          {item.title}
        </Button>
      ))}
      <IconButton
        sx={{
          position: "absolute",
          bottom: 8,
          right: 8,
          backgroundColor: "white",
          ":hover": {
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          },
        }}
        aria-label="add to favorites"
      >
        <StarIcon />
      </IconButton>
    </Card>
  );
}
