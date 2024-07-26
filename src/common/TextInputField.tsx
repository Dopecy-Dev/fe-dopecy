
import { TextField } from '@mui/material';
import { styled } from '@mui/system';
const TextInputField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      backgroundColor: "#F2F2F2",
      marginBottom: 10,
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
      },
      "& .MuiInputBase-input": {
        padding: "10px 14px",
      },
    },
    "& .MuiInputLabel-root": {
      color: theme.palette.text.primary,
    },
  }));

  export default TextInputField