// {
//     "_id": "675a67dcce0f9d4d0aa8e86b",
//     "name": "Professional Tax EC",
//     "entityId": "6734d4bdad0ef4c08e9440f1",
//     "companyId": "674dd064d9c2f72e8b862161",
//     "branchCode": "Whi0012",
//     "stateCode": "ka",
//     "status": "OPEN",
//     "validity": {
//         "from": "2022-12-12T00:00:00.000Z",
//         "to": "2025-03-31T00:00:00.000Z"
//     },
//     "complianceStatus": "NON_COMPLIANT",
//     "challan": [],
//     "ecr": [],
//     "paymentConfirmation": [],
//     "createdAt": "2024-12-12T04:34:36.298Z",
//     "updatedAt": "2024-12-12T04:34:36.298Z",
//     "__v": 0
// }
export const getTableColumns = (tab: string): any[] => {
  switch (tab) {
    case 'license':
      return [
        // { label: 'Act Name', value: 'Act Name' },
        { label: 'Details', value: 'name' },
        { label: 'Status', value: 'status' },
        { label: 'Registration Number', value: 'licenseNo' },
        { label: 'Valid till', value: 'validity' },
        // { label: 'Forms', value: 'Forms' },
        // { label: 'Displayed', value: 'Displayed' },
        { label: 'Documents Verified', value: 'verified' },
        { label: 'Compliance Status', value: 'complianceStatus' },
        { label: 'Remarks', value: 'remarks' },
        // { label: 'Clients ID', value: 'Clients ID' },
        // { label: 'Clients Name', value: 'Clients Name' },
        // { label: 'Location', value: 'Location' },
        // { label: 'State', value: 'State' },
        // { label: 'Section', value: 'Section' },
      ];
    case 'notices':
      return [
        // { label: 'Act Name', value: 'Act Name' },
        { label: 'Details', value: 'name' },
        //{ label: 'Forms', value: 'Forms' },
        { label: 'Status', value: 'status' },
        // { label: 'Displayed', value: 'Displayed' },
        { label: 'Documents Verified', value: 'verified' },
        { label: 'Compliance Status', value: 'complianceStatus' },
        { label: 'Remarks', value: 'remarks' },
        // { label: 'Clients ID', value: 'Clients ID' },
        // { label: 'Clients Name', value: 'Clients Name' },
        // { label: 'Location', value: 'Location' },
        // { label: 'State', value: 'State' },
        // { label: 'Section', value: 'Section' },
      ];
    case 'register':
      return [
        // { label: 'Act Name', value: 'Act Name' },
        { label: 'Details', value: 'label' },
        { label: 'Forms', value: 'desc' },
        // { label: 'Action', value: 'action' },
        // { label: 'Month', value: 'Month' },
        // {
        //   label: 'Register generate Status',
        //   value: 'Register generate Status',
        // },
        // { label: 'Register generate Date', value: 'Register generate Date' },
        // { label: 'Compliance Status', value: 'Compliance Status' },
        // { label: 'Remarks', value: 'Remarks' },
        // { label: 'Clients ID', value: 'Clients ID' },
        // { label: 'Clients Name', value: 'Clients Name' },
        // { label: 'Location', value: 'Location' },
        // { label: 'State', value: 'State' },
        // { label: 'Section', value: 'Section' },
      ];
    case 'return':
      return [
        // { label: 'Act Name', value: 'Act Name' },
        { label: 'Details', value: 'name' },
        { label: 'Status', value: 'status' },
        // { label: 'Forms', value: 'Forms' },
        // { label: 'Month', value: 'Month' },
        // { label: 'Submission Date', value: 'Submission Date' },
        // { label: 'Submit Through', value: 'Submit Through' },
        { label: 'Compliance Status', value: 'complianceStatus' },
        { label: 'Remarks', value: 'remarks' },
        // { label: 'Clients ID', value: 'Clients ID' },
        // { label: 'Clients Name', value: 'Clients Name' },
        // { label: 'Location', value: 'Location' },
        // { label: 'State', value: 'State' },
        // { label: 'Section', value: 'Section' },
      ];
    case 'remittance':
      return [
        // { label: 'Act Name', value: 'Act Name' },
        { label: 'Details', value: 'name' },
        { label: 'Status', value: 'status' },
        // { label: 'Challan No.', value: 'challanNumber' },
        // { label: 'Challan Date', value: 'challanDate' },
        // { label: 'Payment Date', value: 'depositDate' },
        // { label: 'Amount', value: 'depositAmount' },
        // { label: 'Due Date', value: 'Due Date' },
        { label: 'Compliance Status', value: 'complianceStatus' },
        { label: 'Remarks', value: 'remarks' },
        // { label: 'Clients ID', value: 'Clients ID' },
        // { label: 'Clients Name', value: 'Clients Name' },
        // { label: 'Location', value: 'Location' },
        // { label: 'State', value: 'State' },
        // { label: 'Section', value: 'Section' },
      ];
    case 'employee':
      return [
        { label: 'Month', value: 'Month' },
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Total No of Employee', value: 'Total No of Employee' },
        { label: 'Total Joinee', value: 'Total Joinee' },
        { label: 'Total Resigned', value: 'Total Resigned' },
        { label: 'Clients ID', value: 'Clients ID' },
        { label: 'Clients Name', value: 'Clients Name' },
        { label: 'Location', value: 'Location' },
        { label: 'State', value: 'State' },
        { label: 'Section', value: 'Section' },
      ];
    default:
      return [];
  }
};
