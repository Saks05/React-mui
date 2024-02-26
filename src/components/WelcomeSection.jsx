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
      <Typography variant="h5" sx={{ color: "white", height: "10px" }}>
        Welcome
      </Typography>
      <Typography
        variant="h3"
        sx={{ color: "white", fontStyle: "bolder", height: "30px" }}
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
        Established in 2014, AMIRA Consultants LLP has been known for an unparalleled commitment to customer satisfaction.
As the technology evolves, we have focused on building and maintaining bots to streamline customer operation in accounts payable and purchasing specializing in maritime domains.
It’s this standard of excellence that has provided the impetus for us to grow into the business we are today. For more information, reach out today
        
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
