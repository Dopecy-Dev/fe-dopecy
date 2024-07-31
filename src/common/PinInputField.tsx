import React from "react";
import PinInput from "react-pin-input";

const PinInputField = () => {
  return (
    <div style={{ display: "flex", justifyContent: "start", width: "100%", padding: "10px" }}>
      <PinInput
        length={6}
        initialValue=""
        secret
        secretDelay={100}
        onChange={(value, index) => {}}
        type="numeric"
        inputMode="number"
        style={{ display: "flex", justifyContent: "space-between", width: "100%", maxWidth: "350px",marginLeft:"-15px" }}
        inputStyle={{
          borderColor: "grey",
          width: "100%",
          margin: "0 5px", 
          fontSize: "2rem",
        }}
        inputFocusStyle={{ borderColor: "blue" }}
        onComplete={(value, index) => {}}
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
      />
    </div>
  );
};

export default PinInputField;
