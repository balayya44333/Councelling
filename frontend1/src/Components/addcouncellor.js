import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Grid, Typography, Card, CardContent } from '@mui/material';
import axios from 'axios';

const CounselorList = () => {
  const [counselors, setCounselors] = useState([]);
  const [newCounselor, setNewCounselor] = useState({
    name: '',
    specialty: '',
    experience: 0,
  });

  useEffect(() => {
    fetchCounselors();
  }, []);

  const fetchCounselors = async () => {
    try {
      const response = await axios.get('/api/counselors'); // Replace '/api/counselors' with your API endpoint
      setCounselors(response.data);
    } catch (error) {
      console.error('Error fetching counselors:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCounselor({ ...newCounselor, [name]: value });
  };

  const addCounselor = async () => {
    try {
      const response = await axios.post('/api/counselors', newCounselor); // Replace '/api/counselors' with your API endpoint
      setCounselors([...counselors, response.data]); // Update the counselors list including the new counselor
      setNewCounselor({ name: '', specialty: '', experience: 0 });
    } catch (error) {
      console.error('Error adding counselor:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Counselors
      </Typography>
      <Grid container spacing={3}>
        {counselors.map((counselor) => (
          <Grid item xs={12} sm={6} md={4} key={counselor._id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {counselor.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Specialty: {counselor.specialty}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Experience: {counselor.experience} years
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" align="center" gutterBottom>
        Add New Counselor
      </Typography>
      <form onSubmit={(e) => { e.preventDefault(); addCounselor(); }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Name" name="name" value={newCounselor.name} onChange={handleInputChange} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Specialty" name="specialty" value={newCounselor.specialty} onChange={handleInputChange} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth type="number" label="Experience" name="experience" value={newCounselor.experience} onChange={handleInputChange} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth type="submit">
              Add Counselor
            </Button>
          </Grid>
        </Grid>
      </form>
      {/* Display the newly added counselor */}
      {newCounselor.name && (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {newCounselor.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Specialty: {newCounselor.specialty}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Experience: {newCounselor.experience} years
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default CounselorList;
