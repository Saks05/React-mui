/* eslint-disable no-unused-vars */
import React from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Lottie from "lottie-web";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const Login = ({ setShowLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: null,
      password: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      navigate('/dashboard');},
  });
  

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
          width: "400px",
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: "#181818", textAlign: "center", marginTop: "10px" }}
          fontWeight="fontWeightMedium"
        >
          Login
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            id="email"
            fullWidth
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <FormControl variant="outlined" fullWidth sx={{ marginTop: "10px" }}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              fullWidth
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            variant="contained"
            type="submit"
            width="20px"
            fullWidth
            sx={{ marginTop: "10px" }}
            
          >
            Submit
          </Button>
        </form>
        <Button
          variant="outlined"
          type="submit"
          width="20px"
          fullWidth
          sx={{ marginTop: "10px" }}
          onClick={() => setShowLogin(false)}
        >
          SignUp
        </Button>
      </Box>
      <Box>
        <Player
          src="https://lottie.host/a2e58f25-b96b-494e-a202-d11040089c4f/2tcec0mM35.json"
          className="player"
          loop
          autoplay
          style={{ height: "300px", width: "300px" }}
        />
      </Box>
    </Box>
  );
};

export default Login;
