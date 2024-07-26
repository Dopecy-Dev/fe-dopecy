import React from "react";
import { Box, Stack } from "@mui/material";
import CustomTypography from "../typography/CustomTypography";
import underReview from "../../assets/images/underReview.svg";
const UnderReview = () => (
  <Stack spacing={3} sx={{ mt: 5 }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="img"
        src={underReview}
        alt="success"
        width={50}
        height={50}
      />
    </Box>

    <CustomTypography
      text="application Under Review"
      style={{
        fontWeight: "700",
        fontSize: 20,
        color: "#333333",
        textAlign: "center",
      }}
    />
    <CustomTypography
      text="Thank you for your request to open a new shop with us.  We have received your application and it is currently under review. We will notify you as soon as the process is complete."
      style={{
        fontWeight: "400",
        fontSize: 16,
        color: "#333333",
        textAlign: "center",
      }}
    />
  </Stack>
);

export default UnderReview;
