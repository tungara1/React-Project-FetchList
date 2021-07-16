import { Grid, LinearProgress, makeStyles, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./redux/actions";

const useStyles = makeStyles({
  linearProgress: {
    width: "100%",
  },

  autocomplete: {
    width: "100%",
    color: "#fff",

    "& .MuiInputLabel-root, & .MuiInputBase-root, & svg": {
      color: "#fff",
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
    },
    "& fieldset, & .MuiInputBase-root:hover fieldset": {
      borderColor: "#fff",
      outlineColor: "#fff",
    },
  },
});

const CharacterInput = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const classes = useStyles();

  const [autoCompletePeople, setautoCompletePeople] = useState([]);

  const people = state.peopleReducer && state.peopleReducer.people;
  const loader = state.peopleReducer && state.peopleReducer.loader;

  useEffect(() => {
    if (people) {
      setautoCompletePeople(people.results);
    }
  }, [people]);

  useEffect(() => {
    try {
      dispatch(actions.getAllPeople());
    } catch (err) {}
  }, [dispatch]);

  const handleChange = (event, newValue) => {
    dispatch(actions.setSelectedCharacter(newValue));
  };

  return (
    <Grid container justifyContent="center" spacing={4}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        {loader ? (
          <LinearProgress className={classes.linearProgress} />
        ) : (
          <Autocomplete
            id="character-select"
            className={classes.autocomplete}
            options={autoCompletePeople}
            autoHighlight
            autoComplete={false}
            onChange={(event, newValue) => handleChange(event, newValue)}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a character"
                variant="outlined"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default CharacterInput;
