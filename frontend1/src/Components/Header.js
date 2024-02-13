import React, { useState } from 'react';
import { AppBar, Toolbar, Tab, Tabs, Typography, Avatar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CampaignIcon from '@mui/icons-material/Campaign';
import img1 from '../images/img1.jpg'; // Replace with your logo image path

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position='sticky' sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        {/* Logo */}
        <Avatar alt="img1" src={img1} sx={{ marginRight: '10px' }} />
        
        {/* Logo text */}
        <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <CampaignIcon sx={{ color: 'white', marginRight: '5px' }} />
          <Typography variant="h6" component="div" sx={{ color: 'white' }}>
            COUNSELLING AND VISITOR MANAGEMENT SYSTEM
          </Typography>
        </div>

        {/* Tabs */}
        <Tabs
          value={value}
          onChange={handleChange}
          textColor='inherit'
          indicatorColor='primary'
        >
          {/* Your Tabs */}
          <Tab
            component={NavLink}
            to='/'
            label="Home"
            sx={{ color: 'yellow' }}
          />
          <Tab
            component={NavLink}
            to='/add-counsellor'
            label="Add Counsellor"
            sx={{ color: 'yellow' }}
          />
          <Tab
            component={NavLink}
            to='/signin'
            label="Sign In"
            sx={{ color: 'yellow' }}
          />
          <Tab
            component={NavLink}
            to='/signup'
            label="Sign Up"
            sx={{ color: 'yellow' }}
          />
          <Tab
            component={NavLink}
            to='/appointment'
            label="Appointment"
            sx={{ color: 'yellow' }}
          />
          {/* Contact Tab */}
          <Tab
            component={NavLink}
            to='/contact'
            label="Contact"
            sx={{ color: 'yellow' }}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
