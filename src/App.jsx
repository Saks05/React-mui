import { Box,} from "@mui/material";
import { useState } from "react";
import  LoginForm from "./components/LoginForm";
import WelcomeSection from "./components/WelcomeSection";
import SignupForm from "./components/SignupForm";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100wh",
        display: "flex",
        background: "#F2F3F5",
        overflow:'hidden',
         flexDirection:{xs:'column',md:"row"}
      }}
    >
     
      <WelcomeSection />
      {showLogin ? <LoginForm setShowLogin={setShowLogin } /> : <SignupForm setShowLogin={setShowLogin } /> }
      
    </Box>
  );
}

export default App;
