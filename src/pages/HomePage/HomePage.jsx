import React, { useState } from "react";
import { Container } from "@material-ui/core";
import FilterWidget from "../../components/FilterWidget";
import FilmTable from "../../components/FilmTable";
import SearchField from "../../components/SearchField";

function HomePage() {
  const [value, setValue] = useState(null);

  const findFilm = val => {
    setValue(val);
  };

  return (
    <Container>
      <SearchField value={value} findFilm={findFilm} />
      <FilterWidget />
      {value ? <FilmTable title={value} /> : null}
    </Container>
  );
}

export default HomePage;
