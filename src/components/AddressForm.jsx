import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
const AddressForm = ({onClose,formType,selectedItem}) => {
    const validationSchema = yup.object({
       address_code:yup.string().required('Address code is required'),
       name:yup.string().required('Name is required'), 
       address_1: yup.string().required('Address 1 is required'),
       city: yup.string().required('City is required'),
       country:yup.string().required('Country is required'),  
       email: yup
          .string('Enter your email')
          .email('Enter a valid email')
          .required('Email is required'),
        
         
      });
      const [initialValues,setInitialValues] = useState({
        address_code: null,
        name: null,
        address_1: null,
        city: null,
        country:null,
        email:null
      });
      console.log(selectedItem,"yeloo agya selected item addressForm me")
    
      useEffect(() => {
        if (formType === "update" && selectedItem != null) {
          setInitialValues({ ...selectedItem });
          console.log(selectedItem,"YEh selected item h bhaai")
        }
      }, [formType, selectedItem]);
     
      const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize:true,
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
     
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom="20px" >
         {formType=="new"?"Add new address":"Update Address"}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          
            
            <TextField label="Address code" variant="outlined" id="address_code" fullWidth
            name="address_code"
            value={formik.values.address_code}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address_code && Boolean(formik.errors.address_code)}
            helperText={formik.touched.address_code && formik.errors.address_code} />
           
          
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          
          
            <TextField label="Name" variant="outlined" id="name" fullWidth
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name} />
          
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        
            <TextField label="Address 1" variant="outlined" id="address_1" fullWidth
            name="address_1"
            value={formik.values.address_1}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address_1 && Boolean(formik.errors.address_1)}
            helperText={formik.touched.address_1 && formik.errors.address_1} />
           
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        
            <TextField label="City" variant="outlined" id="city" fullWidth
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city} />
            
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        
            <TextField label="Country" variant="outlined" id="country" fullWidth
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.country && Boolean(formik.errors.city)}
            helperText={formik.touched.country && formik.errors.country} />
            
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        
            <TextField label="Email" variant="outlined" id="email" fullWidth
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email} />
           
        </Grid>
        
        <Grid item xs={12} sm={6} md={12}>
        <Stack direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
              spacing={2}>
        <Button variant="outlined" width="20px"  onClick={()=>{onClose()}} sx={{ marginTop: "10px",paddingRight:"29px",paddingLeft:"29px" }}>Cancel</Button>
        <Button variant="contained" type='submit' width="20px"   sx={{ marginTop: "10px", paddingRight:"29px",paddingLeft:"29px"}} >Submit</Button>

        </Stack>
        </Grid>
        
       
      </Grid>
   </form>
    </Box>
  );
};

export default AddressForm;
