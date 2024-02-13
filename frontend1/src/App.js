// Home.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import PackageList from './Components/PackageList'; // Updated import
import TodoList from './Components/Tasks';
import Datafetch from './Components/Datafetch';

const HomePage = () => {
  const mainContainerStyle = {
    backgroundImage: 'url(".Components/background-image.webp")',
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const contentContainerStyle = {
    marginTop: '20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div style={mainContainerStyle}>
      <Container maxWidth="md" style={{ textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom color="primary">
          Welcome to Counseling & Visitor Management System
        </Typography>
        <Typography variant="h5" component="p" color="primary" gutterBottom>
          Where counseling meets convenience.
        </Typography>
        <Button variant="contained" color="primary" size="large" href="/signin">
          Get Started
        </Button>
      </Container>
      <Datafetch />
      <div style={contentContainerStyle}>
        <PackageList /> {/* Display the product list */}
        <TodoList />
        {/* ... other components ... */}
      </div>
    </div>
  );
};

export default HomePage;
