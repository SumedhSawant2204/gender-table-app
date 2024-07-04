import React from 'react';

const GenderDropdown = ({ selectedGender, onGenderChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="gender">Select Gender:</label>
      <select
        id="gender"
        className="form-control"
        value={selectedGender}
        onChange={(e) => onGenderChange(e.target.value)}
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  );
};

export default GenderDropdown;
