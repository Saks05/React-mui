/* eslint-disable no-unused-vars */
import { Margin, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddressForm from "../components/AddressForm";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import dummyData from "../constants/JSONFILE1.json";


const Address = () => {
  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 570,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formType,setFormType] = useState("");
  const [selectedItem,setSelectedItem] = useState({})
  const [country,setCountry]=useState("india")
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleSearch = (value) => {
    console.log("ye tera parameter hai bhai", value);
    if (value !== "") {
        const newArray = dummyData.filter((item) => (
            item.address_code.toLowerCase().includes(value.toLowerCase()) || 
            item.name.toLowerCase().includes(value.toLowerCase())
        ));
        if (newArray.length > 0) { // Changed newArray.length > 1 to newArray.length > 0
            console.log("newArray ko handleSearch me console kiya h",setFilterData(newArray));
        }
    } else {
        setPage(1);
    }
}

  const [filteredData,setFilterData]= useState([]);
  useEffect(()=>{

    console.log("og array", dummyData) ;
    // const newArray=[...dummyData];
    const newArray= dummyData.slice(page*rowsPerPage, page*rowsPerPage + rowsPerPage,);
    
    console.log("set filter ", setFilterData(newArray)) ;
    
    console.log ("start", page * rowsPerPage)
    console.log ("end ",  page * rowsPerPage + rowsPerPage)
    }, [ page, rowsPerPage] )
  


  return (
    <Box sx={{ height: "100%", width: "100%", marginTop: "10px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Typography variant="h5">Address</Typography>
        <Button variant="contained" onClick={()=>{handleOpen();setFormType("new")}} >
          Add New Address 
         
        </Button>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={8}>
          <Box sx={{marginTop:"12px"}}>
          <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-search">Search Address Code, Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-search"
            type='text' 
             onChange={(e)=>{handleSearch(e.target.value)}}
            endAdornment={
              <InputAdornment position="end">
                
            <ManageSearchIcon/>
              </InputAdornment>
            }
            label="Search Address Code, Name"
          />
        </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          
        <Box sx={{marginTop:"12px"}} > 
        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Country</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={country}
    label="Country"
    onChange={(e)=>{setCountry(e.target.value)}}
  >
    <MenuItem value={"India"}>India</MenuItem>
    {/* <MenuItem value={"USA"}>USA</MenuItem> */}
  </Select>
</FormControl>
        </Box>
          
        </Grid>
        </Grid>
        
        
       
      
      <Box>
        <TableContainer component={Paper} sx={{ marginTop: "15px" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>AddressCode</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Address_1</TableCell>
                <TableCell align="right">City&nbsp;</TableCell>
                <TableCell align="right">Country&nbsp;</TableCell>
                <TableCell align="right">Email&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Button variant="text" onClick={()=>{handleOpen();setFormType("update");setSelectedItem(row); console.log(row,"yeh row h")}}>
                      {row.address_code}
                    </Button>
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.address_1}</TableCell>
                  <TableCell align="right">{row.city}</TableCell>
                  <TableCell align="right">{row.country}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={dummyData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </TableContainer>
      </Box>
      <Box>
        <Modal
          open={open}
          onClose={handleClose}
          
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AddressForm onClose={handleClose} formType={formType} selectedItem={selectedItem}/>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default Address;
