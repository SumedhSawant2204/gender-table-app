import React, { useState } from 'react';
import { writeFile, utils } from 'xlsx';

const DataTable = () => {
  const data = [
    { SR_NO: 1, TPO_ID: '001', firstName: 'John', middleName: 'A', lastName: 'Doe', gender: 'Male', placedCompany: 'Company A', package: '10 LPA' },
    { SR_NO: 2, TPO_ID: '002', firstName: 'Jane', middleName: 'B', lastName: 'Smith', gender: 'Female', placedCompany: 'Company B', package: '12 LPA' },
    { SR_NO: 3, TPO_ID: '003', firstName: 'Mike', middleName: 'C', lastName: 'Johnson', gender: 'Male', placedCompany: 'Company A', package: '11 LPA' },
    { SR_NO: 4, TPO_ID: '004', firstName: 'Emily', middleName: 'D', lastName: 'Davis', gender: 'Female', placedCompany: 'Company C', package: '13 LPA' },
    // Add more data as needed
  ];

  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const filteredData = data.filter((item) => selectedGender === '' || item.gender === selectedGender);

  const downloadExcel = () => {
    const worksheet = utils.json_to_sheet(filteredData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    writeFile(workbook, 'data.xlsx');
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="gender">Select Gender:</label>
        <select
          id="gender"
          className="form-control"
          value={selectedGender}
          onChange={handleGenderChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>SR.NO.</th>
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
          {filteredData.map((row) => (
            <tr key={row.TPO_ID}>
              <td>{row.SR_NO}</td>
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

      <button className="btn btn-primary mt-3" onClick={downloadExcel}>
        Download Excel
      </button>
    </div>
  );
};

export default DataTable;















// import React from 'react';


// const DataTable = ({ data }) => {
//   return (

//     <table className="table table-bordered">
//       <thead>
//         <tr>
//           <th>SR.NO.</th>
//           <th>TPO_ID</th>
//           <th>First Name</th>
//           <th>Middle Name</th>
//           <th>Last Name</th>
//           <th>Gender</th>
//           <th>Placed Company</th>
//           <th>Package</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row) => (
//           <tr key={row.TPO_ID}>
//             <td>{row.SR_NO}</td>
//             <td>{row.TPO_ID}</td>
//             <td>{row.firstName}</td>
//             <td>{row.middleName}</td>
//             <td>{row.lastName}</td>
//             <td>{row.gender}</td>
//             <td>{row.placedCompany}</td>
//             <td>{row.package}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>

//   );
// };

// export default DataTable;
