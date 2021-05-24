import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./card.css";
const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    minWidth: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  media: {
    height: 140,
    width: 140,
    borderRadius: 150,
    transform: "translateX(40%)",
  },
});

export default function MediaCard({ img, name, description, url, urla }) {
  const classes = useStyles();
  if (urla === undefined) {
    urla = "#";
  }
  return (
    <div className="o-card">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom={true}
              variant="h5"
              component="h2"
              align="center"
            >
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="o-card-space-buttons" disableSpacing={false}>
          <Button href={urla} className="o-card-button-a" size="small">
            Adoptar
          </Button>
          <Button href={url} className="o-card-button-b" size="small">
            Perfil
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
