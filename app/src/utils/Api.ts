import { endpointsMap } from "../constants/ApiPath";

const BASE_PATH = process.env.REACT_APP_API_BASE_PATH

export const getLoginApiPath = () => {
  return `${BASE_PATH}/${endpointsMap.login}`;
}

export const getBalancesApiPath = () => {
  return `${BASE_PATH}/${endpointsMap.balances}`;
}

export const getTransactionApiPath = () => {
  return `${BASE_PATH}/${endpointsMap.transaction}`;
}

export const getPayeeApiPath = () => {
  return `${BASE_PATH}/${endpointsMap.payee}`;
}

export const getTransferApiPath = () => {
  return `${BASE_PATH}/${endpointsMap.transfer}`;
}