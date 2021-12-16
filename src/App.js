import './App.css';
import { useState, Fragment } from 'react';
import Loader from './loader';

function App() {
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(false);

  const getDataHandler = async () => {
    setLoader(true)
    await fetch('https://geolocation-db.com/json/')
      .then(res => res.json())
      .then(result => {
        setLoader(false)
        setData(result)
      });
  }

  const { IPv4 = '', city = '',
    country_code = '', country_name = '',
    state = '', postal = '', latitude = '',
    longitude = '' } = data;
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper_bg">
          <button
            onClick={() => getDataHandler()}
            className="search_button"
          >
            Get User Details
          </button>
          {loader ? <Loader /> :
            <div className="table-responsive">
              {Object.keys(data).length > 0 &&
                <table id="customers">
                  <thead>
                    <tr>
                      <th>IPv4</th>
                      <th>City</th>
                      <th>Country Code</th>
                      <th>Country Name</th>
                      <th>State</th>
                      <th>Postal Code</th>
                      <th>Latitude</th>
                      <th>Longitude</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{IPv4}</td>
                      <td>{city}</td>
                      <td>{country_code}</td>
                      <td>{country_name}</td>
                      <td>{state}</td>
                      <td>{postal}</td>
                      <td>{latitude}</td>
                      <td>{longitude}</td>
                    </tr>
                  </tbody>
                </table>}
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
