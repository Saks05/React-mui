import Box from "@mui/material/Box";
import { useState } from "react";
import WelcomeSection from "../components/WelcomeSection";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const Authenticate = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100wh",
        display: "flex",
        background: "#F2F3F5",
        overflow: "hidden",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <WelcomeSection />
      {showLogin ? (
        <LoginForm setShowLogin={setShowLogin} />
      ) : (
        <SignupForm setShowLogin={setShowLogin} />
      )}
     
    </Box>
  );
};

export default Authenticate;
