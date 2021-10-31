export interface TransactionAccountDetails {
  accountNo: string;
  accountHolderName: string;
}

export interface TransactionItem {
  amount: number;
  currency: string;
  date: string;
  description: string;
  id: string;
  from?: TransactionAccountDetails
  to?: TransactionAccountDetails
  type: string;
}