import { Grid } from "@material-ui/core";
import CharacterInput from "Components/CharacterInput";
import MovieList from "Components/MovieList";
import "./App.css";

function App() {
  return (
    <Grid className="card">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CharacterInput />
        </Grid>
        <Grid item xs={12}>
          <MovieList />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
