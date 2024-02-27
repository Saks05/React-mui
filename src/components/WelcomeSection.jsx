import React from "react";
import { Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
const WelcomeSection = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        background:
          "linear-gradient(109.6deg, rgb(6, 183, 249) 11.2%, rgb(25, 74, 236) 91.1%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
      gap={4}
      p={2}
    >
      <Typography variant="h5" sx={{ color: "white", height: "40px" }}>
        Welcome
      </Typography>
      <Typography
        variant="h3"
        sx={{ color: "white", height: "70px",} }
      >
        AMIRA CONSULTANTS LLP.
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "white",
          marginTop: "50px",
          height: "auto",
          width: "450px",
          textAlign: "center",
         
         
        }}
      >
        Established in 2014, AMIRA Consultants LLP has been known for an
        unparalleled commitment to customer satisfaction.For more information,
        reach out today
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          columnGap: "10px",
          color: "white",
        }}
      >
        <LinkedInIcon />
        <GoogleIcon />
        <TwitterIcon />
      </Box>
    </Box>
  );
};

export default WelcomeSection;
