import React, { useState } from 'react';
import CountryDropdown from './CountriesDropdown';
import ModalCreateEmployee from './ModalCreateEmployee';

const FormToCreateEmployee = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  console.log(isFormSubmitted)

  function formDataToJson(formData) {
    const jsonData = {};
  
    for (const [key, value] of formData.entries()) {
      jsonData[key] = value;
    }
  
    return jsonData;
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      const formData = new FormData(e.target);
      const formDataJson = formDataToJson(formData)
      localStorage.setItem( Date.now(), JSON.stringify(formDataJson))
      setIsFormSubmitted(true); // le formulaire a été soumis
      console.log(localStorage)
      //localStorage.clear();
  }

  const handleCloseModal = () => {
    setIsFormSubmitted(false); 
  };

  return (
    <div className='container-form'>
      <form onSubmit={handleSubmit} className="form-create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" name="first-name" required/>

          <label htmlFor="last-name">Last Name</label>
          <input type="text" name="last-name" required/>

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input name="date-of-birth" type="date" required/>

          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="date" required/>

          <div className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input name="street" type="text" required/>

            <label htmlFor="city">City</label>
            <input name="city" type="text" required/>

            <CountryDropdown/>

            <label htmlFor="zip-code">Zip Code</label>
            <input name="zip-code" type="number" required/>
          </div>

          <label htmlFor="department">Department</label>
          <select name="department" id="department" required>
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