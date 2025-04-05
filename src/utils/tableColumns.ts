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
        { label: 'License Name', value: 'name' },
        { label: 'Registration Number', value: 'licenseNo' },
        { label: 'Validity', value: 'validityType' },
        { label: 'Documents Verified', value: 'status' },
        { label: 'Compliance Status', value: 'complianceStatus' },
        { label: 'Remarks', value: 'remarks' },
      ];
    case 'notices':
      return [
        { label: 'Notice Name', value: 'name' },
        { label: 'Validity', value: 'validityType' },
        { label: 'Documents Verified', value: 'status' },
        { label: 'Compliance Status', value: 'complianceStatus' },
        { label: 'Remarks', value: 'remarks' },
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
        { label: 'Return Name', value: 'name' },
        { label: 'Act Name', value: 'actName' },
        { label: 'frequency', value: 'frequency' },
        { label: 'Documents Verified', value: 'status' },
        {
          label: 'Compliance Status',
          value: 'currentCompliance.complianceStatus',
        },
        { label: 'Return Filed Date', value: 'currentCompliance.depositDate' },
        { label: 'Due Date', value: 'transactionQuery.dueDate' },
        { label: 'Remarks', value: 'currentCompliance.remarks' },
      ];
    case 'remittance':
      return [
        { label: 'Remittance Name', value: 'name' },
        { label: 'Act Name', value: 'actName' },
        { label: 'frequency', value: 'frequency' },
        { label: 'Documents Verified', value: 'status' },
        {
          label: 'Compliance Status',
          value: 'currentCompliance.complianceStatus',
        },
        { label: 'Challan NO.', value: 'currentCompliance.challanNumber' },
        { label: 'Challan Date', value: 'currentCompliance.challanDate' },
        {
          label: 'Paid Total Contribution',
          value: 'currentCompliance.depositAmount',
        },
        { label: 'Payment Date', value: 'currentCompliance.depositDate' },
        { label: 'Due Date', value: 'transactionQuery.dueDate' },
        { label: 'Remarks', value: 'currentCompliance.remarks' },
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
