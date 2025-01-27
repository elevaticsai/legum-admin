import React from 'react';
import type { ComplianceData } from '../types';
import moment from 'moment';

interface DataTableProps {
  data: ComplianceData[];
  columns: any[];
  handleSubmit?: any;
}

export const DataTable: React.FC<DataTableProps> = ({
  data,
  columns,
  handleSubmit,
}) => {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full'>
        <thead>
          <tr className='bg-gray-50'>
            {columns.map(col => (
              <th
                key={col.value}
                className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200'>
          {data.map((row: any, index) => (
            <tr key={index} className='hover:bg-gray-50'>
              {columns.map(col => (
                <td key={col} className='px-4 py-2 whitespace-pre-wrap'>
                  {col.value === 'complianceStatus' ? (
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        row[col.value] === 'COMPLIANT'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {row[col.value] == 'COMPLIANT'
                        ? 'COMPLIANT'
                        : 'NON COMPLIANT'}
                    </span>
                  ) : col.value === 'verified' ? (
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        row.status == 'VERIFIED'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {row.status == 'VERIFIED' ? 'Yes' : 'No'}
                    </span>
                  ) : col.value === 'validity' ? (
                    <>
                      {row.validityType === 'DATE_RANGE' && row.validity.to ? (
                        <div>
                          {moment(row.validity.to).format('DD-MM-YYYY')}
                        </div>
                      ) : row.validityType === 'LIFETIME' &&
                        row.validity.from ? (
                        <div>
                          {moment(row.validity.from).format('DD-MM-YYYY')}
                        </div>
                      ) : (
                        <div>No Validity Information</div>
                      )}
                    </>
                  ) : col.value === 'challanDate' ||
                    col.value === 'depositDate' ? (
                    <>
                      {row[col.value] ? (
                        <div>{moment(row[col.value]).format('DD-MM-YYYY')}</div>
                      ) : (
                        <div>-</div>
                      )}
                    </>
                  ) : col.value == 'action' ? (
                    <div>
                      {/* <button
                        onClick={() => handleSubmit(row)}
                        role='button'
                        className='flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700'
                      >
                        View
                      </button> */}
                    </div>
                  ) : (
                    <span className='text-sm text-gray-900'>
                      {row[col.value] || '-'}
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
