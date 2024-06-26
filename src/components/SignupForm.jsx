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

import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {  useFormik } from 'formik';
import * as yup from 'yup';
import { Player } from '@lottiefiles/react-lottie-player';

const SignupForm = ({ setShowLogin }) => {

  const [showPassword, setShowPassword] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const validationSchema = yup.object({
    firstName:yup
        .string('Enter your firstName')
        .required("firstName is required"),
    lastName:yup.string().required("lastName is required"),    
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
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
      <Box sx={{ display: "flex", flexDirection: "column", rowGap: "10px", width: "400px" }}>
        <Typography variant="h5" sx={{ color: "#181818", textAlign: "center" ,fontSize:"30px"}}fontWeight='fontWeightMedium'>
          SignUp
          
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField label="FirstName" variant="outlined" id="firstName" fullWidth
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName} />

          <TextField label="LastName" variant="outlined" id="lastName" fullWidth
            margin='dense'
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName} />

          <TextField label="Email" variant="outlined" id="email" fullWidth
            margin='dense'
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email} />
          <FormControl variant="outlined" fullWidth sx={{ marginTop: "9px" }}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              fullWidth
              id="password"
              name="password"
              label="Password"
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
            // label="Password"
            />
          </FormControl>
          <Button variant="contained" type='submit' width="20px" fullWidth sx={{ marginTop: "10px" }} >Submit</Button>
        </form>
        <Button variant="outlined" type='submit' width="20px" fullWidth sx={{ marginTop: "10px" }} onClick={() => setShowLogin(true)}>Login</Button>
       
      </Box>
      <Box>
            <Player src='https://lottie.host/42146a2f-c4b9-4726-82e6-cc52d0a5b4ff/Mfuxy4F6VM.json'
              className='player'
               loop
              autoplay
              style={{ height: '200px', width: '500px' }}/>
    </Box>
    </Box>
  )
}

export default SignupForm
