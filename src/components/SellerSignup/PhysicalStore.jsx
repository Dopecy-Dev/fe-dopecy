import React, { useState } from "react";
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
  TextField,
} from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { styled } from '@mui/material/styles';
import CustomTypography from "../typography/CustomTypography";
import TextInputField from "../../common/TextInputField";

// Custom styled DatePicker
const CustomDatePicker = styled(DatePicker)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    // backgroundColor: theme.palette.common.selectfieldbg,
    textAlign: 'left',
    borderColor: theme.palette.common.mainbg,
    '& fieldset': {
      borderColor: theme.palette.common.mainbg,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.common.mainbg,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.common.mainbg,
    },
    '& .MuiInputBase-input': {
      padding: '10px 14px',
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.primary,
  },
  '& .MuiPickersDay-root.Mui-selected': {
    backgroundColor: theme.palette.common.mainbg, // Change the selected date background color
    color: theme.palette.text.primary, // Change the selected date text color
    '&:hover': {
      backgroundColor: theme.palette.primary.dark, // Change the hover color of the selected date
    },
  },
}));

// Custom styled TimePicker
const CustomTimePicker = styled(TimePicker)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    // backgroundColor: theme.palette.common.selectfieldbg,
    textAlign: 'left',
    borderColor: theme.palette.common.mainbg,
    '& fieldset': {
      borderColor: theme.palette.common.mainbg,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.common.mainbg,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.common.mainbg,
    },
    '& .MuiInputBase-input': {
      padding: '10px 14px',
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.primary,
  },
  '& .MuiPickersDay-root.Mui-selected': {
    backgroundColor: theme.palette.common.mainbg, // Change the selected date background color
    color: theme.palette.text.primary, // Change the selected date text color
    '&:hover': {
      backgroundColor: theme.palette.common.mainbg, // Change the hover color of the selected date
    },
  },
}));

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
        <FormLabel
          sx={{
            color: 'text.main',
            fontWeight: 'bold',
          }}
        >
          Do you have a Physical Store?
        </FormLabel>
        <RadioGroup
          row
          aria-label="store-licenses"
          name="store-licenses"
          value={hasPhysicalStore}
          onChange={handlePhysicalStoreChange}
          sx={{ display: "flex", justifyContent: "start" }}
        >
          <FormControlLabel
            value="yes"
            control={<Radio sx={{
              color: 'text.main',
              '&.Mui-checked': {
                color: 'text.main',
              },
            }} />}
            label="Yes"
            sx={{
              color: 'text.main',
              '& .MuiFormControlLabel-label': {
                fontWeight: 'medium',
              }
            }}
          />
          <FormControlLabel
            value="no"
            control={<Radio sx={{
              color: 'text.main',
              '&.Mui-checked': {
                color: 'text.main',
              },
            }} />}
            label="No"
            sx={{
              color: 'text.main',
              '& .MuiFormControlLabel-label': {
                fontWeight: 'medium',
              }
            }}
          />
        </RadioGroup>
      </FormControl>
      <CustomTypography
        text="Number of Stores."
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
        placeholder="Number of Stores"
      />
      {stores.map((store, index) => (
        <Box key={index} mb={2}>
          <CustomTypography
            text="Add Location"
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
            placeholder="Add Location"
            value={store.location}
            onChange={(e) => handleChange(index, "location", e.target.value)}
          />

          <CustomTypography
            text="Date of Operations"
            style={{
              fontWeight: "400",
              fontSize: 16,
              color: "text.primary",
              textAlign: "left",
              mb: 1,
            }}
          />
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={10} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CustomDatePicker
                  value={store.dateOfOperation}
                  onChange={(date) =>
                    handleChange(index, "dateOfOperation", date)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      required
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
              color: "text.primary",
              textAlign: "left",
              mb: 1,
            }}
          />
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={10} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CustomTimePicker
                  value={store.timeOfOperation}
                  onChange={(time) =>
                    handleChange(index, "timeOfOperation", time)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      required
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
        sx={{
          display: "flex",
          justifyContent: "start",
          color: 'white',
          backgroundColor: 'common.mainbg',
          '&:hover': {
            backgroundColor: 'common.mainbg',
          },
          '&:focus': {
            outline: 'none',
            boxShadow: 'none',
          },
          '&.Mui-focused': {
            outline: 'none',
            boxShadow: 'none',
          },
        }}
        variant="contained"
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
