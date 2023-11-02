import React from 'react';
import { Link } from 'react-router-dom';
import EmployeeGrid from '../components/EmployeeGrid';
import Header from '../components/Header';

const EmployeeList = () => {
  return (
    <div>
      <Header title="Current Employees"/>
      <Link to="/index" className='link'>
          Home
      </Link>
      <EmployeeGrid/>
    </div>
  );
};

export default EmployeeList;