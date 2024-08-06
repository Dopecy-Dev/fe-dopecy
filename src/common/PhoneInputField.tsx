import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { styled } from '@mui/system';
const StyledPhoneInput  = styled(PhoneInput)(({ theme }) => ({
    '& .form-control': {
      borderRadius: '8px',
      backgroundColor: 'transparent',
      // border: 'none',
      borderColor: theme.palette.text.main,
      width: '100%',
      height: '40px',
      color: theme.palette.text.primary,
    },
    '& .form-control:focus': {
      borderColor: theme.palette.common.mainbg,
      // color: theme.palette.text.primary, // Change text color on focus
    },
  }));

  const PhoneInputField = ({ value, onChange, country = 'us' }) => {
    return (
      <StyledPhoneInput
        country={country}
        value={value}
        onChange={onChange}
      />
    );
  };

  export default PhoneInputField