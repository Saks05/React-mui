/* eslint-disable no-unused-vars */
import { Margin } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddressForm from "../components/AddressForm";

const dummyData = [
  {
    address_code: "abc",
    name: "Sakshi",
    address_1: "123,West",
    city: "Pune",
    country: "India",
    email: "soni@mail.com",
  },
  {
    address_code: "bcd",
    name: "Guddu",
    address_1: "123,East",
    city: "Nashik",
    country: "India",
    email: "p@mail.com",
  },
  {
    address_code: "def",
    name: "Guddi",
    address_1: "123,North",
    city: "Bhusawal",
    country: "India",
    email: "guddi@mail.com",
  },
  {
    address_code: "efg",
    name: "Gaurav",
    address_1: "123,South",
    city: "Bihar",
    country: "India",
    email: "gaurav@mail.com",
  },
  {
    address_code: "ghi",
    name: "Ashwini",
    address_1: "123,NorthEast",
    city: "Gondia",
    country: "India",
    email: "ash@mail.com",
  },
  {
    address_code: "ijk",
    name: "Sneha",
    address_1: "123,NorthWest",
    city: "Nashik",
    country: "India",
    email: "sneha@mail.com",
  },
  {
    address_code: "klm",
    name: "Aastha",
    address_1: "123,SouthEast",
    city: "Indore",
    country: "India",
    email: "aastha@mail.com",
  },
  {
    address_code: "mno",
    name: "Kalpita",
    address_1: "234,North",
    city: "Goa",
    country: "India",
    email: "kalpita@mail.com",
  },
  {
    address_code: "opq",
    name: "Ravi",
    address_1: "234,East",
    city: "Solapur",
    country: "India",
    email: "ravi@mail.com",
  },
  {
    address_code: "qrs",
    name: "Pradyumann",
    address_1: "234,West",
    city: "Nashik",
    country: "India",
    email: "prady@mail.com",
  },
];
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
    height: 530,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <Button variant="contained" onClick={handleOpen}>
          Add New Address
        </Button>
      </Box>
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
              {dummyData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Button variant="text" onClick={handleOpen}>
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
            <AddressForm />
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default Address;
