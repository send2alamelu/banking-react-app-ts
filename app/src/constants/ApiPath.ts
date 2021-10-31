import endpointsMapType from "../types/endpointsMapType";

const LOGIN_ENDPOINT = 'authenticate/login';
const BALANCES_ENDPOINT = 'account/balances';
const TRANSACTION_ENDPOINT = 'account/transactions';
const PAYEE_ENDPOINT = 'account/payees';
const TRANSFER_ENDPOINT = 'transfer';

export const endpointsMap: endpointsMapType = {
  login: LOGIN_ENDPOINT,
  balances: BALANCES_ENDPOINT,
  transaction: TRANSACTION_ENDPOINT,
  payee: PAYEE_ENDPOINT,
  transfer: TRANSFER_ENDPOINT,
}
