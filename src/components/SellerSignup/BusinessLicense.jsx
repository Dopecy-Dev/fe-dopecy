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
      <FormControl sx={{ textAlign: "left", display: "flex" }}>
        <FormLabel>Do you have Business Licenses?</FormLabel>
        <RadioGroup
          row
          aria-label="business-licenses"
          name="business-licenses"
          value={hasBusinessLicense}
          onChange={handleBusinessLicenseChange}
          sx={{ display: "flex", justifyContent: "start" }}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <CustomTypography
        text="Name"
        style={{
          fontWeight: "400",
          fontSize: 15,
          color: "#333333",
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
          color: "#333333",
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
