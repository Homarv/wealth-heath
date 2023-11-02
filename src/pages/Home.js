import React from 'react';
import { Link } from 'react-router-dom';
import FormToCreateEmployee from '../components/FormToCreateEmployee';
import Header from '../components/Header';

const Home = () => {
  return  (
    <div>
      <Header title="HRnet"/>
      <div className="container">
        <Link to = "/employee-list" className='link'> View Current Employees</Link>
        <h2>Create Employee</h2>
      <FormToCreateEmployee/>
      </div>
    </div>
  );
};

export default Home;