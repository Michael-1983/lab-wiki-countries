import { Link } from 'react-router-dom';
import countries from '../countries.json';

export default function CountriesList() {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflowY: 'scroll' }}>
      <div className="list-group">
        {countries.map((currentCountry) => (
          <Link
            className="list-group-item list-group-item-action"
            to={currentCountry.cca3}
          >
            {currentCountry.flag} {currentCountry.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
}
