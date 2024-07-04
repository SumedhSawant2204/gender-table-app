import React from 'react';

const DataTable = ({ data }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>TPO_ID</th>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Placed Company</th>
          <th>Package</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.TPO_ID}>
            <td>{row.TPO_ID}</td>
            <td>{row.firstName}</td>
            <td>{row.middleName}</td>
            <td>{row.lastName}</td>
            <td>{row.gender}</td>
            <td>{row.placedCompany}</td>
            <td>{row.package}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
