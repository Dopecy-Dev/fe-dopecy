import { Box, IconButton, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";
import InfoIcon from "@mui/icons-material/Info";
const AvailableRevenueChart = () => {
  const options = {
    chart: {
      type: "donut",
    },
    labels: ["Revenue 1", "Revenue 2", "Revenue 3", "Revenue 4"],
    colors: ["#FDD64A", "#5E97F6", "#E877DA", "#FFC1C1"],
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "$452",
              fontSize: "24px",
              fontWeight: 600,
            },
          },
        },
      },
    },
  };

  const series = [25, 30, 20, 25];

  return (
    <Box sx={{ position: "relative", p: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Box>
          <Typography variant="subtitle2">Available Revenue</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ mr: 1, color: "#9E9E9E" }}>Show:</Typography>
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
          <IconButton size="small" sx={{ color: "#9E9E9E" }}>
            <InfoIcon />
          </IconButton>
        </Box>
      </Box>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={250}
      />
    </Box>
  );
};

export default AvailableRevenueChart;
