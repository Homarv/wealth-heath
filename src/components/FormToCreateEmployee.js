// FormToCreateEmployee.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveFormData } from './../reducers/form.reducer';
import CountryDropdown from './CountriesDropdown';
import { ModalCreateEmployee } from '@homarv/npm-component'

const FormToCreateEmployee = () => {
  const dispatch = useDispatch(); // Utilisez le hook useDispatch pour obtenir la fonction dispatch
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function formDataToJson(formData) {
    const jsonData = {};
    for (const [key, value] of formData.entries()) {
      jsonData[key] = value;
    }
    return jsonData;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataJson = formDataToJson(formData);

    // Utilisez la fonction dispatch pour envoyer une action au store
    dispatch(saveFormData(formDataJson));

    setIsFormSubmitted(true);
    // Le reste de votre code...
  };

  const handleCloseModal = () => {
    setIsFormSubmitted(false); 
  };

  return (
    <div className='container-form'>
      <form onSubmit={handleSubmit} className="form-create-employee">
        <label htmlFor="first-name">First Name</label>
        <input id="first-name" type="text" name="first-name" required />

        <label htmlFor="last-name">Last Name</label>
        <input id="last-name" type="text" name="last-name" required />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" name="date-of-birth" type="date" required />

        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" name="start-date" type="date" required />

        <div className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" name="street" type="text" required />

          <label htmlFor="city">City</label>
          <input id="city" name="city" type="text" required />

          <CountryDropdown />

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" name="zip-code" type="number" required />
        </div>

        <label htmlFor="department">Department</label>
        <select id="department" name="department" required>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
        
        <button className='btn' type='submit'> Envoyer </button>
      </form>

      {isFormSubmitted && (
        <ModalCreateEmployee onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default FormToCreateEmployee;
