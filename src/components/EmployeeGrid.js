import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import store from '../reducers/store';

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

const getEmployeeDataFromStore = () => {
  const state = store.getState();
  const formData = state.form.formData;

  return formData.map((employee, index) => {
    // add id of employee , necessary to Grid functionnal
    return { id: index + 1, ...employee };
  });
};

const EmployeeGrid = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const employeeData = getEmployeeDataFromStore();
    console.log(store)
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
