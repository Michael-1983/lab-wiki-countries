import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import countries from '../countries.json';

export default function CountryDetails() {
  const params = useParams();
  const singleCountry = countries.find(
    (currentCountry) => currentCountry.cca3 === params.cca3
  );

  return (
    <div className="col-7">
      <h1>{singleCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            {singleCountry.capital.map((currentCapital) => (
              <td>{currentCapital}</td>
            ))}
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {singleCountry.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {singleCountry.borders.map((currentBorder) => (
                  <li>
                    <Link to={'/' + currentBorder}>
                      {
                        countries.find(
                          (currentCountry) =>
                            currentCountry.cca3 === currentBorder
                        ).name.common
                      }
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
