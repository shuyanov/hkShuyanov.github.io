import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type TInputItem = {
  img: string;
  date: string;
  descriptions: string;
};

export default function InputItem({ img, date, descriptions }: TInputItem) {
  return (
    <Card
      sx={{
        width: 310,
        backgroundColor: "#B4D6F6B2",
        borderRadius: 5,
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="250" image={img} />
        <CardContent
          sx={{
            textAlign: "start",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descriptions}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
