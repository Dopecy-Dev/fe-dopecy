import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Box, Typography, Toolbar } from '@mui/material';
import { Dashboard, Category, People, VerifiedUser, Store, ShoppingCart, LocalOffer, Event, Restaurant, Loyalty } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#ffffff',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mt: 2, mb: 4 }}>
        <Avatar sx={{ width: 56, height: 56 }} src="https://via.placeholder.com/150" />
        <Typography variant="h6" sx={{ mt: 1 }}>Zeinab Nikoo</Typography>
        <Typography variant="body2" color="textSecondary">zeinabnikoo@gmail.com</Typography>
      </Box>
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon><Dashboard /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/admin/shop-categories">
          <ListItemIcon><Category /></ListItemIcon>
          <ListItemText primary="Shop Categories" />
        </ListItem>
        <ListItem button component={Link} to="/product-categories">
          <ListItemIcon><Category /></ListItemIcon>
          <ListItemText primary="Product Categories" />
        </ListItem>
        <ListItem button component={Link} to="/user-management">
          <ListItemIcon><People /></ListItemIcon>
          <ListItemText primary="User Management" />
        </ListItem>
        <ListItem button component={Link} to="/seller-verification">
          <ListItemIcon><VerifiedUser /></ListItemIcon>
          <ListItemText primary="Seller Verification" />
        </ListItem>
        <ListItem button component={Link} to="/shop-management">
          <ListItemIcon><Store /></ListItemIcon>
          <ListItemText primary="Shop Management" />
        </ListItem>
        <ListItem button component={Link} to="/product-management">
          <ListItemIcon><ShoppingCart /></ListItemIcon>
          <ListItemText primary="Product Management" />
        </ListItem>
        <ListItem button component={Link} to="/marketing-management">
          <ListItemIcon><LocalOffer /></ListItemIcon>
          <ListItemText primary="Marketing Management" />
        </ListItem>
        <ListItem button component={Link} to="/club-management">
          <ListItemIcon><Loyalty /></ListItemIcon>
          <ListItemText primary="Club Management" />
        </ListItem>
        <ListItem button component={Link} to="/events-management">
          <ListItemIcon><Event /></ListItemIcon>
          <ListItemText primary="Events Management" />
        </ListItem>
        <ListItem button component={Link} to="/restaurant-management">
          <ListItemIcon><Restaurant /></ListItemIcon>
          <ListItemText primary="Restaurant's Management" />
        </ListItem>
        <ListItem button component={Link} to="/coupons">
          <ListItemIcon><LocalOffer /></ListItemIcon>
          <ListItemText primary="Coupons" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
