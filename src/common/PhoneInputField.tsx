import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { styled } from '@mui/system';
const StyledPhoneInput  = styled(PhoneInput)(({ theme }) => ({
    '& .form-control': {
      borderRadius: '8px',
      backgroundColor: '#F2F2F2',
      border: 'none',
      width: '100%',
      height: '40px',
      color: 'black',
    },
    '& .form-control:focus': {
      borderColor: 'transparent',
      boxShadow: 'none',
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