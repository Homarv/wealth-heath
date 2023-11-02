import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';

const columns = [
  { field: 'first-name', headerName: 'First Name', width: 150 },
  { field: 'last-name', headerName: 'Last Name', width: 150 },
  { field: 'start-date', headerName: 'Start Date', width: 150 },
  { field: 'department', headerName: 'Department', width: 150 },
  { field: 'date-of-birth', headerName: 'Date of Birth', width: 150 },
  { field: 'street', headerName: 'Street', width: 150 },
  { field: 'city', headerName: 'City', width: 150 },
  { field: 'state', headerName: 'State', width: 150 },
  { field: 'zip-code', headerName: 'Zip Code', width: 150 },
];

const getEmployeeDataFromLocalStorage = () => {
  const localStorageData = localStorage;
  return Object.keys(localStorageData).map((key) => {
    const parsedData = JSON.parse(localStorageData[key]);
    return { id: key, ...parsedData };
  });
};

const EmployeeGrid = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const employeeData = getEmployeeDataFromLocalStorage();
    console.log (employeeData)
    setRows(employeeData);
  }, []);

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        components={{
          Toolbar: GridToolbarQuickFilter,
        }}
      />
    </div>
  );
};


export default EmployeeGrid;
