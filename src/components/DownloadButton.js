// import React from 'react';
// import { writeFile, utils } from 'xlsx';

// const DownloadButton = ({ data }) => {
//   const downloadExcel = () => {
//     const worksheet = utils.json_to_sheet(data);
//     const workbook = utils.book_new();
//     utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     writeFile(workbook, 'data.xlsx');
//   };

//   return (
//     <button className="btn btn-primary mt-3" onClick={downloadExcel}>
//       Download Excel
//     </button>
//   );
// };

// export default DownloadButton;
