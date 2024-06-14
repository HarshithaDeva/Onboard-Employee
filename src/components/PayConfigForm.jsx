import React from "react";
import { Autocomplete, Box, TextField } from "@mui/material";

const PayConfigForm = ({
  formData,
  payOptionIndex,
  handleAutocompleteChange,
}) => {
  const names = [
    "Ravi",
    "Vishal Raj",
    "Ram",
    "Abhi",
    "Rahul Raj",
    "Surya",
    "Akshay",
    "Anil",
  ];

  return (
    <>
      <Box>
        <Box className="cardInput cardPayInput">
          <label>
            Level {`${payOptionIndex + 1}`} Approvers
            <Autocomplete
              id={`free-solo-demo-${payOptionIndex}`}
              freeSolo
              multiple
              options={names || []}
              value={formData.payOption[payOptionIndex]}
              onChange={(event, newValue) => handleAutocompleteChange(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </label>
        </Box>
      </Box>
    </>
  );
};

export default PayConfigForm;
