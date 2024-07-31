import React from "react";
import PinInput from "react-pin-input";
const PinInputField = () => {
  return (
    <PinInput
      length={6}
      initialValue=""
      secret
      secretDelay={100}
      onChange={(value, index) => {}}
      type="numeric"
      inputMode="number"
      style={{ padding: "10px",display:"flex",justifyContent:"flex-start" }}
      inputStyle={{ borderColor: "grey" }}
      inputFocusStyle={{ borderColor: "blue" }}
      onComplete={(value, index) => {}}
      autoSelect={true}
      regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
    />
  );
};

export default PinInputField;
