import React, { useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup
} from "@material-ui/core";

function FilterWidget({ title, fields }) {
  const [fieldStatus, setFieldStatus] = useState(false);

  const handleChange = () => {
    setFieldStatus(!fieldStatus);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Genres</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={fieldStatus}
              onChange={handleChange}
              value="comedy"
            />
          }
          label="Comedy"
        ></FormControlLabel>
      </FormGroup>
    </FormControl>
  );
}

export default FilterWidget;
