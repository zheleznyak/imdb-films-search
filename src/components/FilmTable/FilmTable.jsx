import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { useFilmsList } from "../../services/Service";
import { Grid } from "@material-ui/core";

function FilmTable({ title }) {
  const films = useFilmsList(null, title);

  if (!films) return <LinearProgress />;

  return (
    <>
      <Grid container spacing={4} direction="row" alignItems="stretch">
        <Grid item xs={12}>
          <h4>Serach results of "{films.query}".</h4>
          <p>In total: {films.results.length} results</p>
        </Grid>
        {films.results.map(film => {
          const {
            title,
            id,
            year,
            titleType: filmType,
            runningTimeInMinutes: duration
          } = film;
          return (
            <Grid item xs={3} key={id}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    src={film.image.url}
                    title="film.title"
                    component="img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <strong>Title: {title}</strong>
                      <br />
                      <strong>Year:</strong> {year}
                      <br />
                      <strong>Type:</strong> {filmType}
                      <br />
                      <strong>Duration</strong> {duration} min
                      <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default FilmTable;
