
import { TextField } from '@mui/material';
import { styled } from '@mui/system';
const TextInputField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      backgroundColor: "common.selectfieldbg",
      marginBottom: 10,
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

  export default TextInputField