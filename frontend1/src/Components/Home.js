import './App.css';
import React from 'react';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Appointment from './Components/Appointment';
import Signup from './Components/signup';
import Signin from './Components/signin';
import Counsellor from './Components/addcouncellor';
import ContactUsPage from './Components/Contact';
import PackageList from '.Components/PackageList'; // Updated import

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/add-counsellor' element={<Counsellor />} exact />
          <Route path='/signup' element={<Signup />} exact />
          <Route path='/signin' element={<Signin />} exact />
          <Route path='/appointment' element={<Appointment />} exact />
          <Route path='/Contact' element={<ContactUsPage />} exact />
          <Route path='/product' element={<PackageList />} exact /> 
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
