import { Box,} from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { CssBaseline } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import Authenticate from "./pages/Authenticate";

import { Outlet } from "react-router-dom";
import Routes from "./Routes";

function App() {
  
  return (
    <Box>
      <CssBaseline/>
      {/* <Authenticate/> */}
      <Routes/>
      <Outlet/>
    </Box>
  );
}

export default App;
