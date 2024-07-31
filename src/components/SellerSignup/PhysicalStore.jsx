import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import CustomTypography from "../typography/CustomTypography";
import TextInputField from "../../common/TextInputField";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
const PhysicalStore = () => {
  const [hasPhysicalStore, setHasPhysicalStore] = useState("");
  const handlePhysicalStoreChange = (event) => {
    setHasPhysicalStore(event.target.value);
  };
  const [stores, setStores] = useState([
    { location: "", dateOfOperation: null, timeOfOperation: null },
  ]);

  const handleAddStore = () => {
    setStores([
      ...stores,
      { location: "", dateOfOperation: null, timeOfOperation: null },
    ]);
  };
  const handleRemoveStore = (index) => {
    const newStores = stores.filter((_, i) => i !== index);
    setStores(newStores);
  };
  const handleChange = (index, field, value) => {
    const newStores = [...stores];
    newStores[index][field] = value;
    setStores(newStores);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", stores);
  };
  return (
    <Box>
      <FormControl sx={{ textAlign: "left", display: "flex" }}>
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
      {stores.map((store, index) => (
        <Box key={index} mb={2}>
          <CustomTypography
            text="Add Location"
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
            placeholder="Add Location"
            value={store.location}
            onChange={(e) => handleChange(index, "location", e.target.value)}
          />

          <CustomTypography
            text="Date of Operations"
            style={{
              fontWeight: "400",
              fontSize: 16,
              color: "#333333",
              textAlign: "left",
              mb: 1,
            }}
          />
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={10} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date of Operation"
                  value={store.dateOfOperation}
                  onChange={(date) =>
                    handleChange(index, "dateOfOperation", date)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      required
                      sx={{
                        "& .MuiInputBase-root": {
                          fontSize: 14,
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: 14,
                        },
                      }}
                      fullWidth
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>

          <CustomTypography
            text="Times of Operations"
            style={{
              fontWeight: "400",
              fontSize: 16,
              color: "#333333",
              textAlign: "left",
              mb: 1,
            }}
          />
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={10} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="Time of Operation"
                  value={store.timeOfOperation}
                  onChange={(time) =>
                    handleChange(index, "timeOfOperation", time)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      required
                      sx={{
                        "& .MuiInputBase-root": {
                          fontSize: 14,
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: 14,
                        },
                      }}
                      fullWidth
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={2} textAlign="center">
              <IconButton onClick={() => handleRemoveStore(index)}>
                <RemoveCircle color="error" />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      ))}

      <Button
        size="small"
        sx={{ display: "flex", justifyContent: "start" }}
        variant="contained"
        color="primary"
        onClick={handleAddStore}
      >
        Add Store{" "}
        <IconButton style={{ color: "white" }} onClick={handleAddStore}>
          <AddCircle />
        </IconButton>
      </Button>
    </Box>
  );
};

export default PhysicalStore;
