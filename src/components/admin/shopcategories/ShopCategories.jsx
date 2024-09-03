import React from 'react';
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
  CircularProgress,
  Typography,
  ButtonGroup,
} from '@mui/material';
import { styled } from '@mui/system';
import Layout from '../layout/Layout';
import BusinessValueChart from '../charts/BusinessValueChart';
import AvailableRevenueChart from '../charts/AvailableRevenueChart';
import CustomTypography from '../../typography/CustomTypography';
import ContainedButton from '../../buttons/ContainedButton';
import bin from '../../../assets/images/bin.svg'
import pencil from '../../../assets/images/pencil-write.svg'

const shopCategories = [
  {
    id: 1,
    name: 'Costco Wholesale',
    description: 'MediBloom Wellness Center: Cultivate',
    location: '123 Main Street, New York, USA',
    openHours: 'Open 24/7'
  },
  {
    id: 2,
    name: 'Walmart Supercenter',
    description: 'Health & Wellness Hub: Empower',
    location: '456 Market Avenue, San Francisco, USA',
    openHours: 'Open 24/7'
  },
  {
    id: 3,
    name: 'Target',
    description: 'FitLife Health Store: Revitalize',
    location: '789 Broadway Street, Los Angeles, USA',
    openHours: 'Open 9 AM - 10 PM'
  },
  {
    id: 4,
    name: 'Best Buy',
    description: 'TechGuru Electronics: Innovate',
    location: '101 Main Plaza, Chicago, USA',
    openHours: 'Open 10 AM - 9 PM'
  },
  {
    id: 5,
    name: 'Home Depot',
    description: 'BuildIt Construction Supplies: Transform',
    location: '202 Industrial Road, Houston, USA',
    openHours: 'Open 6 AM - 10 PM'
  },
  {
    id: 6,
    name: 'Whole Foods Market',
    description: 'Organic Haven: Nourish',
    location: '303 Green Valley, Austin, USA',
    openHours: 'Open 8 AM - 9 PM'
  },
  {
    id: 7,
    name: 'Apple Store',
    description: 'iGenius Tech Center: Innovate',
    location: '404 Tech Lane, Cupertino, USA',
    openHours: 'Open 10 AM - 8 PM'
  },
  {
    id: 8,
    name: 'CVS Pharmacy',
    description: 'HealthExpress Pharmacy: Care',
    location: '505 Medical Blvd, Miami, USA',
    openHours: 'Open 24/7'
  },
  {
    id: 9,
    name: 'IKEA',
    description: 'HomeStyle Furniture: Create',
    location: '606 Interior Street, Seattle, USA',
    openHours: 'Open 9 AM - 8 PM'
  },
];


const ShopCategories = () => {
  return (
    <Layout>
      <Box sx={{ p: 3 }}>
        <CustomTypography
          text="Shop Categories"
          style={{
            fontWeight: "500",
            fontSize: 34,
            lineHeight: "30px",
            color: "#000000",
            textAlign: "left",
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <ContainedButton
            // style={{}}
            text="Add New Category"
          />
        </Box>

        <TableContainer
          component={Paper}
          sx={{ boxShadow: "none", borderRadius: "10px" }}
        >
          <Table
            sx={{
              minWidth: 650,
              border: "1px solid #E0E0E0",
            }}
            size="large"
          >
            <TableHead sx={{ backgroundColor: "#F5F5F5" }}>
              <TableRow>
                <TableCell
                  sx={{
                    color: "#000000",
                    fontSize: "16px",
                    fontFamily: "Noto Serif",
                    fontWeight: "700",
                  }}
                  align="left"
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{
                    color: "#000000",
                    fontSize: "16px",
                    fontFamily: "Noto Serif",
                    fontWeight: "700",
                  }}
                  align="left"
                >
                  NAME
                </TableCell>
                <TableCell
                  sx={{
                    color: "#000000",
                    fontSize: "16px",
                    fontFamily: "Noto Serif",
                    fontWeight: "700",
                  }}
                  align="left"
                >
                  DESCRIPTION
                </TableCell>
                <TableCell
                  sx={{
                    color: "#000000",
                    fontSize: "16px",
                    fontFamily: "Noto Serif",
                    fontWeight: "700",
                  }}
                  align="left"
                >
                  LOCATION
                </TableCell>
                <TableCell
                  sx={{
                    color: "#000000",
                    fontSize: "16px",
                    fontFamily: "Noto Serif",
                    fontWeight: "700",
                  }}
                  align="left"
                >
                  OPEN HOURS
                </TableCell>
                <TableCell
                  sx={{
                    color: "#000000",
                    fontSize: "16px",
                    fontFamily: "Noto Serif",
                    fontWeight: "700",
                  }}
                  align="left"
                >
                  ACTIONS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shopCategories.map((category) => (
                <TableRow
                  key={category.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      fontFamily: "Noto Serif",
                    }}
                    component="th"
                    scope="row"
                  >
                    {category.id}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      fontFamily: "Noto Serif",
                    }}
                    align="left"
                  >
                    {category.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      fontFamily: "Noto Serif",
                    }}
                    align="left"
                  >
                    {category.description}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      fontFamily: "Noto Serif",
                    }}
                    align="left"
                  >
                    {category.location}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      fontFamily: "Noto Serif",
                    }}
                    align="left"
                  >
                    {category.openHours}
                  </TableCell>
                  <TableCell
                    // sx={{ display: "flex", gap: "0.5rem" }}
                    align="left"
                  >

                    <ButtonGroup
                      disableElevation
                      // variant="contained"
                      aria-label="Disabled button group"
                      sx={{
                        backgroundColor: '#FAFBFD',
                      }}
                    >
                      <Button> <Box sx={{ p: 0.5 }} component={'img'} src={pencil} alt='edit icon'></Box></Button>
                      <Button> <Box sx={{ p: 0.5 }} component={'img'} src={bin} alt='delete icon'></Box></Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Box>
    </Layout>
  );
};

export default ShopCategories;
