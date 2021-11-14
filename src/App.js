import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="row">
        <CountriesList />
        <Routes>
          <Route path="/:cca3" element={<CountryDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
