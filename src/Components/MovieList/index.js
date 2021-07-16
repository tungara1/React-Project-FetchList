import {
  CircularProgress,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography
} from "@material-ui/core";
import useDebounce from "Hooks/useDebounce";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./redux/actions";

const useStyles = makeStyles({
  title: {
    display: "flex",
    alignItems: "center",
  },
  latestMovie: {
    paddingInlineStart: "1rem",
    paddingBlockStart: "0.75rem",
  },
  list: {
    "& li": {
      "& .MuiListItemText-secondary ": {
        color: "#afafaf",
      },
    },
  },
});

const MovieList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const selected_character =
    state.peopleReducer && state.peopleReducer.selected_character;
  const movies = state.movieReducer && state.movieReducer.movies;
  const loader = state.movieReducer && state.movieReducer.loader;

  const debouncedMovieList = useDebounce(movies, 1000);

  // sort array of object by date value
  const sortedMovies = debouncedMovieList.sort((a, b) => {
    return new Date(b.release_date) - new Date(a.release_date);
  });

  useEffect(() => {
    dispatch(actions.clearMovieList());
    if (!selected_character) return;
    selected_character.films &&
      selected_character.films.forEach((film) => {
        dispatch(actions.getMovieDetails(film));
      });
  }, [dispatch, selected_character]);

  if (!selected_character)
    return (
      <Grid container justifyContent="center" spacing={4}>
        <Grid item>
          <Typography variant="span" className={classes.title}>
            Please select character to see movie list.
          </Typography>
        </Grid>
      </Grid>
    );

  if (loader || sortedMovies.length === 0)
    return (
      <Grid container justifyContent="center" spacing={4}>
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    );

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" className={classes.title}>
          <span className="material-icons">movie</span>&nbsp;Movies list
        </Typography>
        <List dense={true} className={classes.list}>
          {sortedMovies.map((movie) => (
            <ListItem>
              <ListItemText
                primary={movie.title}
                secondary={movie.release_date}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" className={classes.title}>
          <span className="material-icons">fiber_new</span>&nbsp;Latest Movie
        </Typography>
        <List dense={true} className={classes.list}>
          <ListItem>
            <ListItemText
              primary={sortedMovies[0]?.title}
              secondary={
                <>
                  <p>Director: {sortedMovies[0]?.director}</p>
                  <p>Producer: {sortedMovies[0]?.producer}</p>
                  <p>{sortedMovies[0]?.opening_crawl}</p>
                </>
              }
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default MovieList;
