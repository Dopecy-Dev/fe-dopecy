import React from "react";
import { Container, Box, Grid, Paper } from "@mui/material";
import SellerDetails from "../../components/SellerSignup/SellerDetails";
import useStyles from "../../styles";
import Navbar from "../../components/SellerSignup/Navbar";
import bgsellersignup from "../../assets/images/bgsellersignup.svg";
import CustomTypography from "../../components/typography/CustomTypography";

function SellerSignup() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundImage: `url(${bgsellersignup})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(-90deg, #D9D9D900 0%, #000000 50%)",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0.6,
            p: 8,
          }}
        ></Box>
        <Container component="main" maxWidth="lg">
          <Grid container className={classes.mainContainer}>
            <Grid item xs={12} md={6} className={classes.welcomeTextContainer}>
              <Box className={classes.welcomeText} sx={{ zIndex: 1 }}>
                <CustomTypography
                  variant="h4"
                  text=" Welcome to Dopecy,"
                  style={{
                    fontWeight: "400",
                    fontSize: 26,
                    color: "text.white",
                    textAlign: "left",
                  }}
                />

                <CustomTypography
                  text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  style={{
                    fontWeight: "400",
                    fontSize: 26,

                    color: "text.white",
                    textAlign: "left",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ zIndex: 2, pt: 5 }}>
              <Paper
                elevation={3}
                className={classes.formPaper}
                sx={{ borderRadius: 5,minHeight:600,mb:2}}
              >
               <SellerDetails />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default SellerSignup;
