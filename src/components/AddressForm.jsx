import { Box, Grid, Typography } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";
import {  useFormik } from 'formik';
import * as yup from 'yup';
const AddressForm = () => {
    const validationSchema = yup.object({
        address_code:yup.string().required(),
       name:yup.string().required(),    
        email: yup
          .string('Enter your email')
          .email('Enter a valid email')
          .required('Email is required'),
        password: yup.string().required()
         
      });
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Box sx={{ backgroundColor: "Blue", height: "50px", width: "100%" }}>
            1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box sx={{ backgroundColor: "Blue", height: "50px", width: "100%" }}>
            2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box sx={{ backgroundColor: "Blue", height: "50px", width: "100%" }}>
            3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box sx={{ backgroundColor: "Blue", height: "50px", width: "100%" }}>
            {" "}
            4
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box sx={{ backgroundColor: "Blue", height: "50px", width: "100%" }}>
            {" "}
            5
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box sx={{ backgroundColor: "Blue", height: "50px", width: "100%" }}>
            {" "}
            6
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
          <Box sx={{ backgroundColor: "Blue", height: "50px", width: "100%" }}>
            {" "}
            7
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddressForm;
