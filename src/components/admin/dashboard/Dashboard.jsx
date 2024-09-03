import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import Layout from '../layout/Layout';
import BusinessValueChart from '../charts/BusinessValueChart';
import AvailableRevenueChart from '../charts/AvailableRevenueChart';

const DashboardCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: '#3260391A',
}));

const Dashboard = () => {
  return (
    <Layout>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <DashboardCard>
              <CardContent sx={{ textAlign: "left" }}>
                <Typography sx={{ color: "#326039", fontWeight: 600, fontSize: "2.5rem" }} variant="h5">56</Typography>
                <Typography variant="subtitle1">Total Menus</Typography>
              </CardContent>
            </DashboardCard>
          </Grid>
          <Grid item xs={12} md={3}>
            <DashboardCard>
              <CardContent sx={{ textAlign: "left" }}>
                <Typography sx={{ color: "#326039", fontWeight: 600, fontSize: "2.5rem" }} variant="h5">12k</Typography>
                <Typography variant="subtitle1">Total Revenue</Typography>
              </CardContent>
            </DashboardCard>
          </Grid>
          <Grid item xs={12} md={3}>
            <DashboardCard>
              <CardContent sx={{ textAlign: "left" }}>
                <Typography sx={{ color: "#326039", fontWeight: 600, fontSize: "2.5rem" }} variant="h5">20</Typography>
                <Typography variant="subtitle1">Total Orders</Typography>
              </CardContent>
            </DashboardCard>
          </Grid>
          <Grid item xs={12} md={3}>
            <DashboardCard>
              <CardContent sx={{ textAlign: "left" }}>
                <Typography sx={{ color: "#326039", fontWeight: 600, fontSize: "2.5rem" }} variant="h5">65</Typography>
                <Typography variant="subtitle1">Total Clients</Typography>
              </CardContent>
            </DashboardCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              Business Value
            </Typography>
            <Box sx={{ backgroundColor: '#FFFFFF', borderRadius: '8px', p: 2 }}>
              <BusinessValueChart />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              Available Revenue
            </Typography>
            <Box sx={{ backgroundColor: '#FFFFFF', borderRadius: '8px', p: 2 }}>
              <AvailableRevenueChart />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Dashboard;
