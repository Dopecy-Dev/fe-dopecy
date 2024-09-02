import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, Typography, IconButton, MenuItem, Select } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const BusinessValueChart = () => {
  const options = {
    chart: {
      id: 'business-value-chart',
      toolbar: {
        show: false,
      },
    },
    colors: ['#003C11'],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        style: {
          colors: '#9E9E9E',
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#9E9E9E',
          fontSize: '12px',
        },
      },
    },
    stroke: {
      width: 2,
    },
    markers: {
      size: 5,
      colors: ['#003C11'],
    },
    grid: {
      borderColor: '#E6E6E6',
    },
  };

  const series = [
    {
      name: 'Business Value',
      data: [10, 30, 50, 90, 70, 40],
    },
  ];

  return (
    <Box sx={{ position: 'relative', p: 2 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 1,
        }}
      >
        <Box>
        <Typography variant="subtitle2">
          Business Value
        </Typography>
        <Typography sx={{textAlign:"left",color:"#326039"}} variant="subtitle1" fontWeight="bold">
          5.987,35
        </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ mr: 1, color: '#9E9E9E' }}>Show:</Typography>
          <Select
            defaultValue="This month"
            variant="standard"
            disableUnderline
            sx={{ mr: 2 }}
          >
            <MenuItem value="This month">This month</MenuItem>
            <MenuItem value="Last month">Last month</MenuItem>
            <MenuItem value="This year">This year</MenuItem>
          </Select>
          <IconButton size="small" sx={{ color: '#9E9E9E' }}>
            <InfoIcon />
          </IconButton>
        </Box>
      </Box>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={250}
      />
    </Box>
  );
};

export default BusinessValueChart;
