import axios from 'axios';
import { BASE_URL } from '../utils/env';

export const getClients = async () => {
  const result: any = await axios.get(`${BASE_URL}client`);

  return result?.data;
};

export const getSearchClients = async (name: any = '') => {
  const result: any = await axios.get(`${BASE_URL}client/search?name=${name}`);

  return result?.data;
};

export const getBranch = async (companyId: any) => {
  const result: any = await axios.get(
    `${BASE_URL}client/branches?companyId=${companyId}`
  );

  return result?.data;
};

export const getLicense = async (params: any) => {
  const result: any = await axios.get(`${BASE_URL}client/license?${params}`);

  return { ...result?.data, type: 'license' };
};

export const getNotices = async (params: any) => {
  const result: any = await axios.get(
    `${BASE_URL}client/notice-abstract?${params}`
  );

  return { ...result?.data, type: 'notices' };
};

export const getRemittance = async (params: any) => {
  const result: any = await axios.get(`${BASE_URL}client/remittance?${params}`);

  return { ...result?.data, type: 'remittance' };
};

export const getReturns = async (params: any) => {
  const result: any = await axios.get(`${BASE_URL}client/returns?${params}`);

  return { ...result?.data, type: 'return' };
};

export const getRegisterCheck = async (params: any) => {
  const result: any = await axios.get(
    `${BASE_URL}client/upload-check?${params}`
  );

  return { ...result?.data, type: 'register' };
};
