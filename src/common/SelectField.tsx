import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { styled } from "@mui/system";

const CustomFormControl = styled(FormControl)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: theme.palette.common.selectfieldbg,
    textAlign:"left",
    borderColor: theme.palette.common.mainbg,
    "& fieldset": {
      borderColor: theme.palette.common.mainbg,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.common.mainbg,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.common.mainbg,
    },
    "& .MuiInputBase-input": {
      padding: "10px 14px",
    },
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.text.primary,
  },
}));

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  // backgroundColor: theme.palette.common.mainbg,
  "&:hover": {
    backgroundColor: theme.palette.common.mainbg,
  },
  "&.Mui-selected": {
    backgroundColor: theme.palette.common.mainbg,
    color: theme.palette.common.white,
  },
  "&.Mui-selected:hover": {
    backgroundColor: theme.palette.common.mainbg,
  },
}));

const SelectField = ({ label, value, onChange, options }) => {
  return (
    <CustomFormControl fullWidth variant="outlined" margin="normal">
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        label={label}
      >
        {options.map((option) => (
          <CustomMenuItem
          key={option.value} value={option.value}>
            {option.label}
          </CustomMenuItem>
        ))}
      </Select>
    </CustomFormControl>
  );
};

export default SelectField;
