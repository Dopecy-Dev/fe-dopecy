import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import DragDrop from "./DragDrop";
import CustomTypography from "../typography/CustomTypography";
import SelectField from "../../common/SelectField";
import TextInputField from "../../common/TextInputField";
import { FileUploader } from "react-drag-drop-files";
function PersonalInformation() {
  const [position, setPosition] = useState("");
  const [business, setBusiness] = useState("");
  const [logo, setLogo] = useState(null);
  const [hasBusinessLicense, setHasBusinessLicense] = useState("");
  const [hasPhysicalStore, setHasPhysicalStore] = useState("");
  const handleLogoChange = (file) => {
    setLogo(file);
  };
  const handleBusinessLicenseChange = (event) => {
    setHasBusinessLicense(event.target.value);
  };
  const handlePhysicalStoreChange = (event) => {
    setHasPhysicalStore(event.target.value);
  };

  return (
    <Box>
      <CustomTypography
        text="Position"
        style={{
          fontWeight: "400",
          fontSize: 16,
          color: "#333333",
          textAlign: "left",
        }}
      />
      <SelectField
        label="Position"
        value={position}
        onChange={(event) => setPosition(event.target.value)}
        options={[
          { value: "Position 1", label: "Position 1" },
          { value: "Position 2", label: "Position 2" },
          { value: "Position 3", label: "Position 3" },
        ]}
      />
      <CustomTypography
        text="Business"
        style={{
          fontWeight: "400",
          fontSize: 16,
          color: "#333333",
          textAlign: "left",
        }}
      />
      <SelectField
        label="Business"
        value={business}
        onChange={(event) => setBusiness(event.target.value)}
        options={[
          { value: "Business 1", label: "Business 1" },
          { value: "Business 2", label: "Business 2" },
          { value: "Business 3", label: "Business 3" },
        ]}
      />
      <CustomTypography
        text=" Company Brand Name"
        style={{
          fontWeight: "400",
          fontSize: 16,
          color: "#333333",
          textAlign: "left",
        }}
      />
      <TextInputField
        variant="outlined"
        fullWidth
        InputLabelProps={{ shrink: true }}
        placeholder=" Company Brand Name"
      />
      <CustomTypography
        text="Upload Your Brand Logo"
        style={{
          fontWeight: "400",
          fontSize: 16,
          color: "#333333",
          textAlign: "left",
        }}
      />
      <Typography
        variant="body2"
        sx={{
          backgroundColor: "#FFFFFF",
          textAlign: "center",
        }}
      >
        If you don't have one, no worries. Dopecy will create the best logo for
        your business.
      </Typography>
      <FileUploader
        handleChange={handleLogoChange}
        name="logo"
        types={["JPG", "PNG", "GIF"]}
      />
      {logo && (
        <img
          src={URL.createObjectURL(logo)}
          alt="Brand Logo"
          style={{ width: "100%", height: "auto", marginBottom: 10 }}
        />
      )}
      <FormControl sx={{ textAlign: "left" }}>
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
      {hasBusinessLicense === "yes" && (
        <>
          <CustomTypography
            text=" You can search our database by entering your license number."
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
        </>
      )}
      <FormControl sx={{ textAlign: "left" }}>
        <FormLabel>Do you have a Physical Store?</FormLabel>
        <RadioGroup
          row
          aria-label="store-licenses"
          name="store-licenses"
          value={hasPhysicalStore}
          onChange={handlePhysicalStoreChange}
          sx={{ display: "flex", justifyContent: "start" }}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      {hasPhysicalStore === "yes" && (
        <>
          <CustomTypography
            text="Number of Stores."
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
            placeholder="Number of Stores"
          />
        </>
      )}
      {/* <DragDrop /> */}
    </Box>
  );
}

export default PersonalInformation;
