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

  return (
    <Box>
      <CustomTypography
        text="Position"
        style={{
          fontWeight: "400",
          fontSize: 16,
          color: "text.primary",
          textAlign: "left",
        }}
      />
      <SelectField
        // label="Position"
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
          color: "text.primary",
          textAlign: "left",
        }}
      />
      <SelectField
        // label="Business"
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
          color: "text.primary",
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
          color: "text.primary",
          textAlign: "left",
        }}
      />

      {/* <FileUploader
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
      )} */}
      <DragDrop />


    </Box>
  );
}

export default PersonalInformation;
