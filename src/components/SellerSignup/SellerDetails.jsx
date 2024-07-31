import React, { useState } from "react";
import {
  Button,
  Box,
  Typography,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import useStyles from "../../styles";
import CustomTypography from "../typography/CustomTypography";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "react-phone-input-2/lib/style.css";
import PhoneInputField from "../../common/PhoneInputField";
import TextInputField from "../../common/TextInputField";
import { Stepper, Step, StepLabel, StepConnector, styled } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PersonalInformation from "./PersonalInformation";
import UnderReview from "./UnderReview";
import PinInputField from "../../common/PinInputField";
import SelectField from "../../common/SelectField";
import BusinessLicense from "./BusinessLicense";
import PhysicalStore from "./PhysicalStore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const steps = [
  "Personal Information",
  "Business Type",
  "Business License",
  "Physical Stores",
];

const StyledStepConnector = styled(StepConnector)(({ theme, activeStep }) => ({
  "& .MuiStepConnector-line": {
    borderColor: activeStep > 0 ? "#1C5237" : "#C4C4C4",
    borderTopWidth: 3,
  },
}));

const CustomStepIcon = styled("div")(({ active, completed }) => ({
  display: "flex",
  // color: active || completed ? "white" : "#C4C4C4",
  alignItems: "center",
  justifyContent: "center",
  height: 40,
  width: 40,
  borderRadius: "50%",
  backgroundColor: completed || active ? "#1C5237" : "#C4C4C4",
  color: "white",
}));

const StepIconComponent = (props) => {
  const { active, completed, icon } = props;

  return (
    <CustomStepIcon active={active} completed={completed}>
      {completed ? <CheckCircleIcon /> : <span>{icon}</span>}
    </CustomStepIcon>
  );
};
function SellerDetails() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const [activeStep, setActiveStep] = useState(0);
  const [title, setTitle] = useState("");
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  return (
    <Box className={classes.formContainer}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
        Create Your Dopecy Shop
      </Typography>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<StyledStepConnector activeStep={activeStep} />}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={StepIconComponent}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 ? (
        <Box>
          <CustomTypography
            text="Title"
            style={{
              fontWeight: "400",
              fontSize: 16,
              color: "#333333",
              textAlign: "left",
            }}
          />
          <SelectField
            label="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            options={[
              { value: "Mr", label: "Mr" },
              { value: "Mrs", label: "Mrs" },
              { value: "Ms", label: "Ms" },
            ]}
          />
          <CustomTypography
            text="Name"
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
            placeholder="Name"
          />
          <CustomTypography
            text="Last Name"
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
            placeholder="Last Name"
          />
          <CustomTypography
            text="Email"
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
            placeholder="Email or phone number"
            sx={{ mb: 1 }}
          />
          <CustomTypography
            text="Phone number"
            style={{
              fontWeight: "400",
              fontSize: 16,
              color: "#333333",
              textAlign: "left",
            }}
          />
          <PhoneInputField
            value={phone}
            onChange={(phone) => setPhone(phone)}
          />
          <CustomTypography
            text="For easy , fast Access & second Verification Create 6 digits unique passcode"
            style={{
              fontWeight: "400",
              fontSize: 14,
              color: "#333333",
              textAlign: "left",
            }}
          />
          <PinInputField />
          <CustomTypography
            text="Company / Business name (If Applicable)"
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
            placeholder="Company / Business name"
            sx={{ mt: 1 }}
          />
          <CustomTypography
            text="Physical Address"
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
            placeholder="Physical Address"
            sx={{ mt: 1 }}
          />
          <CustomTypography
            text="zip Code"
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
            placeholder="zip Code"
            sx={{ mt: 1 }}
          />
          <CustomTypography
            text="Password"
            style={{
              fontWeight: "400",
              fontSize: 16,
              color: "#333333",
              textAlign: "left",
              mt: 1,
            }}
          />
          <TextInputField
            variant="outlined"
            fullWidth
            type={showPassword ? "text" : "password"}
            InputLabelProps={{ shrink: true }}
            placeholder="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <CustomTypography
            text="Confirm Password"
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
            type={showConfirmPassword ? "text" : "password"}
            InputLabelProps={{ shrink: true }}
            placeholder="Confirm Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowConfirmPassword}>
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      ) : activeStep === 1 ? (
        <PersonalInformation />
      ) : activeStep === 2 ? (
        <BusinessLicense />
      ) : activeStep === 3 ? (
        <PhysicalStore />
      ) : (
        <UnderReview />
      )}

      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          <ArrowBackIcon />
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleNext}
          className={classes?.nextButton}
        >
          {activeStep === steps.length - 1 ? "Submit" : "Next"}
        </Button>
      </Box>
    </Box>
  );
}

export default SellerDetails;
