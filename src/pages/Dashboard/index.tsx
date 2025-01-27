import React, { useEffect, useState } from 'react';
import { DashboardTabs } from '../../components/dashboard/DashboardTabs';
import { ComplianceView } from '../../components/ComplianceView';
import { ComplianceOverview } from '../../components/ComplianceOverview';
import { useDataManagement } from '../../hooks/useDataManagement';
import {
  getClients,
  getBranch,
  getLicense,
  getNotices,
  getRemittance,
  getReturns,
  getRegisterCheck,
} from '../../api';
import { FilterPanel } from '../../components/FilterPanel';
import { STATES } from '../../utils/constant';
import moment from 'moment';

export const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('license');
  const {
    filteredData,
    data,
    filters,
    dateRange,
    handleFilterChange,
    handleDateRangeChange,
    getUniqueValues,
  } = useDataManagement();

  const [filter, setFilter] = useState<any>({
    clientName: '',
    state: '',
    branch: '',
    date: '',
  });

  const [overAllCompliance, setOverAllCompliance] = useState<any>({});
  const [listData, setListData] = useState<any>({});
  const [branch, setBranch] = useState<any>([]);

  const [optionsData, setOptionsData] = useState<any>({
    clientName: [],
    state: [],
    branch: [],
  });

  const filterState = (data: any) => {
    let states: any = {};
    data &&
      data.map((ele: any) => {
        if (!states[ele.branchState]) {
          states[ele.branchState] = ele.branchState;
        }
      });
    const formatData: any = Object.keys(states).map((ele: any) => ({
      label: ele,
      value: ele,
    }));
    setOptionsData({ ...optionsData, state: [...formatData] });
  };

  const getBranchData = async (id: any) => {
    const data = await getBranch(id);
    const formatData =
      data?.result &&
      data?.result.map((ele: any) => ({
        ...ele,
        label: ele.branchName,
        value: ele._id,
      }));

    setBranch([...formatData]);
    filterState(formatData);
  };

  const filterBranch = (name: any) => {
    const filterData = branch.filter((ele: any) => ele.branchState == name);
    setOptionsData({ ...optionsData, branch: [...filterData] });
  };

  const handleFilter = (key: any, value: any) => {
    let filterData = { ...filter, [key]: value };
    if (key == 'state') {
      filterData['branch'] = '';
      filterBranch(value);
    } else if (key == 'clientName') {
      filterData['state'] = '';
      filterData['branch'] = '';
      getBranchData(value);
    }
    setFilter({ ...filterData });
  };

  const getClientsData = async () => {
    const data = await getClients();
    const formatData =
      data?.result &&
      data?.result.map((ele: any) => ({
        ...ele,
        label: ele.companyName,
        value: ele._id,
      }));

    setOptionsData({ ...optionsData, clientName: [...formatData] });
  };

  const handleSubmit = async () => {
    const findBranch: any = branch.find((ele: any) => ele._id == filter.branch);

    const getMonth = moment(filter.date + '-01', 'YYYY-MM-DD').format('MMMM');
    const getYear = moment(filter.date + '-01', 'YYYY-MM-DD').format('YYYY');

    const clientData = optionsData.clientName.find(
      (el: any) => el._id == filter.clientName
    );

    let str: any = `companyId=${filter.clientName}&branchCode=${findBranch.branchCode}&year=${getMonth}&month=${getYear}&companyCode=${clientData.companyCode}`;

    let promiseArr: any = [];
    promiseArr.push(getLicense(str));
    promiseArr.push(getNotices(str));
    promiseArr.push(getRemittance(str));
    promiseArr.push(getReturns(str));
    promiseArr.push(getRegisterCheck(str));

    const stateValue: any = Object.entries(STATES).find(
      (ele: any) => ele[1].label === filter.state
    );

    const formData = STATES[stateValue[0]]?.forms;

    Promise.all(promiseArr).then(response => {
      let obj: any = {};

      response.map((ele: any) => {
        let categoryCount: any = 0,
          complianceCategoryCount: any = 0;
        if (ele?.result) {
          ele?.result.map((item: any) => {
            if (item.complianceStatus == 'COMPLIANT')
              complianceCategoryCount += 1;
          });
          categoryCount = ele.result.length;
        }
        obj[ele.type] =
          ele.type == 'register'
            ? {
                data: [...formData],
                categoryCount: formData.length,
                complianceCategoryCount: ele.isSuccess ? formData.length : 0,
                status: {
                  complaint: ele.isSuccess ? 100 : 0,
                  nonComplaint: ele.isSuccess ? 0 : 100,
                },
              }
            : {
                data: ele?.result ? [...ele.result] : [],
                categoryCount,
                complianceCategoryCount,
                status: ele?.complaints
                  ? { ...ele.complaints }
                  : { complaint: 0, nonComplaint: 100 },
              };
      });

      let overallComplianceData: any = {
        license: 0,
        notices: 0,
        return: 0,
        remittance: 0,
        register: 0,
      };

      let complaint: any = 0,
        nonComplaint: any = 500;

      Object.keys(obj).map((ele: any) => {
        overallComplianceData[ele] = {
          categoryCount: obj[ele]?.categoryCount,
          complianceCategoryCount: obj[ele]?.complianceCategoryCount,
          nonComplianceCategoryCount:
            obj[ele]?.categoryCount - obj[ele]?.complianceCategoryCount,
          compliancePercentage: obj[ele]?.status?.complaint
            ? parseFloat(Number(obj[ele]?.status?.complaint).toFixed(2))
            : 0,
          nonCompliancePercentage: obj[ele]?.status?.nonComplaint
            ? parseFloat(Number(obj[ele]?.status?.nonComplaint).toFixed(2))
            : 0,
        };
      });

      Object.keys(overallComplianceData).map((ele: any) => {
        complaint += overallComplianceData[ele]?.compliancePercentage
          ? Number(overallComplianceData[ele]?.compliancePercentage)
          : 0;
      });

      setOverAllCompliance({
        allData: {
          complaint: parseFloat(Number(complaint / 5).toFixed(2)),
          nonComplaint: parseFloat(
            Number((nonComplaint - complaint) / 5).toFixed(2)
          ),
        },
        categoryData: {
          ...overallComplianceData,
        },
      });

      setListData({ ...obj, registers: [...formData] });
    });
  };

  const handleSubmitForm = (item: any) => {};

  useEffect(() => {
    getClientsData();
  }, []);

  return (
    <div className='flex flex-col'>
      <div className='bg-white border-b'>
        <div className='px-4 sm:px-6'>
          <h1 className='text-xl sm:text-2xl font-bold py-4 sm:py-6'>
            Compliance Dashboard
          </h1>
        </div>
      </div>
      <div className='p-4 sm:p-6'>
        <FilterPanel
          handleSubmit={handleSubmit}
          options={optionsData}
          filters={filter}
          onFilterChange={handleFilter}
          getUniqueValues={getUniqueValues}
          activeTab={activeTab}
          dateRange={dateRange}
          onDateRangeChange={handleDateRangeChange}
        />
      </div>
      <div className='px-4 sm:px-6'>
        <ComplianceOverview data={overAllCompliance} />
      </div>
      <div className='px-4 sm:px-6'>
        <DashboardTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <div className='flex-1 overflow-auto'>
        <ComplianceView
          activeCompliance={
            overAllCompliance?.categoryData &&
            overAllCompliance?.categoryData[activeTab]
          }
          data={
            listData && listData[activeTab] ? listData[activeTab]?.data : []
          }
          //data={filteredData[activeTab as keyof typeof filteredData] || []}
          allData={data}
          filters={filter}
          dateRange={dateRange}
          onFilterChange={handleFilterChange}
          onDateRangeChange={handleDateRangeChange}
          getUniqueValues={getUniqueValues}
          activeTab={activeTab}
          handleSubmitForm={handleSubmitForm}
        />
      </div>
    </div>
  );
};
