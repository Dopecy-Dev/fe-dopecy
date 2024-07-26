import React from "react";
import { Box, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import DragDrop from "./DragDrop";

function PersonalInformation() {
  return (
    <Box>
      <RadioGroup row>
        <FormControlLabel
          value="passport"
          control={<Radio />}
          label="Passport"
        />
        <FormControlLabel
          value="national_id"
          control={<Radio />}
          label="National ID"
        />
      </RadioGroup>
      <DragDrop />
    </Box>
  );
}

export default PersonalInformation;
