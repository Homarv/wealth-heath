import { countries } from 'countries-list'; // Importez la liste des pays

function CountryDropdown() {
  const allCountries = Object.values(countries);

  return (
    <div className='state-container'>
      <label className='state-label'>State</label>
      <select className='state-select' required >
        <option value="">Sélectionnez un pays</option>
        {allCountries.map((country) => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CountryDropdown;
