import React, { useState } from "react";
import { Grid, Input, Button } from "@material-ui/core";

function SearchField({ findFilm }) {
  const [value, setValue] = useState(undefined);

  const handleSubmit = e => {
    e.preventDefault();
    findFilm(value);
  };
  const handleChange = e => {
    setValue(e);
  };

  return (
    <Grid item xs={6}>
      <form onSubmit={e => handleSubmit(e)}>
        <Input
          id="outlined-basic"
          onChange={e => handleChange(e.target.value)}
        />
        <Button size="small" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Grid>
  );
}

export default SearchField;
