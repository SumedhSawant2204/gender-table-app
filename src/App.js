import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import GenderDropdown from './components/GenderDropdown';
import DataTable from './components/DataTable';
import DownloadButton from './components/DownloadButton';
import { data } from './data';

const App = () => {
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  const filteredData = data.filter((item) => selectedGender === '' || item.gender === selectedGender);

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <GenderDropdown selectedGender={selectedGender} onGenderChange={handleGenderChange} />
        <DataTable data={filteredData} />
        <DownloadButton data={filteredData} />
      </div>
    </div>
  );
};

export default App;
