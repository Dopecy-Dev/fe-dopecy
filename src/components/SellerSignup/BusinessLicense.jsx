import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import CustomTypography from "../typography/CustomTypography";
import TextInputField from "../../common/TextInputField";

const BusinessLicense = () => {
  const [hasBusinessLicense, setHasBusinessLicense] = useState("");
  const handleBusinessLicenseChange = (event) => {
    setHasBusinessLicense(event.target.value);
  };
  return (
    <Box>
      <FormControl sx={{ textAlign: "left", display: "flex", margin: '16px 0' }}>
        <FormLabel
          sx={{
            color: 'text.main', // Custom color for the label
            fontWeight: 'bold',    // Custom font weight for the label
            mb: 1,                 // Custom margin bottom for spacing
          }}
        >
          Do you have Business Licenses?
        </FormLabel>
        <RadioGroup
          row
          aria-label="business-licenses"
          name="business-licenses"
          value={hasBusinessLicense}
          onChange={handleBusinessLicenseChange}
          sx={{ display: "flex", justifyContent: "start" }}
        >
          <FormControlLabel
            value="yes"
            control={<Radio sx={{
              color: 'text.main',         // Custom color for the radio button
              '&.Mui-checked': {
                color: 'text.main',         // Custom color when checked
              },
            }} />}
            label="Yes"
            sx={{
              color: 'text.primary',           // Custom color for the label text
              '& .MuiFormControlLabel-label': {
                fontWeight: 'medium',          // Custom font weight for the label text
              }
            }}
          />
          <FormControlLabel
            value="no"
            control={<Radio sx={{
              color: 'text.main',         // Custom color for the radio button
              '&.Mui-checked': {
                color: 'text.main',         // Custom color when checked
              },
            }} />}
            label="No"
            sx={{
              color: 'text.primary',           // Custom color for the label text
              '& .MuiFormControlLabel-label': {
                fontWeight: 'medium',          // Custom font weight for the label text
              }
            }}
          />
        </RadioGroup>
      </FormControl>
      <CustomTypography
        text="Name"
        style={{
          fontWeight: "400",
          fontSize: 15,
          color: "text.primary",
          textAlign: "left",
        }}
      />
      <TextInputField
        variant="outlined"
        fullWidth
        InputLabelProps={{ shrink: true }}
        placeholder="Name"
      />
      <CustomTypography
        text="License Number."
        style={{
          fontWeight: "400",
          fontSize: 15,
          color: "text.primary",
          textAlign: "left",
        }}
      />
      <TextInputField
        variant="outlined"
        fullWidth
        InputLabelProps={{ shrink: true }}
        placeholder="Enter your license number"
      />
    </Box>
  );
};

export default BusinessLicense;
