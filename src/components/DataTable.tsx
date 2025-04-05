import React from 'react';
import type { ComplianceData } from '../types';
import moment from 'moment';
import _ from 'lodash';

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
  const dateKeys = [
    'currentCompliance.depositDate',
    'currentCompliance.challanDate',
    'currentCompliance.depositAmount',
  ];
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full'>
        <thead>
          <tr className='bg-gray-50'>
            {columns.map(col => (
              <th
                key={col.value}
                className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200'
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
                <td
                  key={col}
                  className='px-4 py-2 whitespace-pre-wrap border border-gray-200'
                  style={{
                    minWidth:
                      col.value == 'name'
                        ? '150px'
                        : col.value == 'actName'
                          ? '350px'
                          : 'initial',
                  }}
                >
                  {col.value === 'currentCompliance.complianceStatus' ? (
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        _.get(row, col.value) &&
                        _.get(row, col.value) === 'COMPLIANT'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {_.get(row, col.value) &&
                      _.get(row, col.value) == 'COMPLIANT'
                        ? 'COMPLIANT'
                        : 'NON COMPLIANT'}
                    </span>
                  ) : col.value === 'complianceStatus' ? (
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        row[col.value]
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {row[col.value] ? 'COMPLIANT' : 'NON COMPLIANT'}
                    </span>
                  ) : col.value === 'status' ? (
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        row.status == 'VERIFIED'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                      style={{ whiteSpace: 'nowrap' }}
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
                  ) : dateKeys.includes(col.value) ? (
                    <>
                      {_.get(row, col.value) ? (
                        <div style={{ whiteSpace: 'nowrap' }}>
                          {moment(_.get(row, col.value)).format('DD-MM-YYYY')}
                        </div>
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
                  ) : col.value == 'validityType' ? (
                    <>
                      {row.validityType ? (
                        <div className='text-center'>
                          <span className='whitespace-nowrap text-sm text-gray-900'>
                            {row.validityType == 'LIFETIME'
                              ? `${
                                  row.validity.from
                                    ? moment(row.validity.from).format(
                                        'DD-MM-YYYY'
                                      )
                                    : ''
                                }`
                              : `${
                                  row.validity.from
                                    ? moment(row.validity.from).format(
                                        'DD-MM-YYYY'
                                      )
                                    : ''
                                } to ${
                                  row.validity.to
                                    ? moment(row.validity.to).format(
                                        'DD-MM-YYYY'
                                      )
                                    : ''
                                }`}
                          </span>
                          {row.validityType == 'LIFETIME' && (
                            <div style={{ marginTop: 3, marginBottom: 3 }}>
                              <span
                                className={`px-2 py-1 rounded-full text-sm ${'bg-green-100 text-green-800'}`}
                                style={{ whiteSpace: 'nowrap' }}
                              >
                                LIFETIME Validity
                              </span>
                            </div>
                          )}
                        </div>
                      ) : (
                        'NA'
                      )}
                    </>
                  ) : (
                    <span
                      className='text-sm text-gray-900'
                      style={{
                        whiteSpace:
                          col.value == 'transactionQuery.dueDate'
                            ? 'nowrap'
                            : '',
                      }}
                    >
                      {_.get(row, col.value) || '-'}
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
