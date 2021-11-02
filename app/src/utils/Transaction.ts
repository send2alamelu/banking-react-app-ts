import { TransactionItem } from "../types/TransactionItem";

const isTransfered = (type: string) => {
  return (type === 'transfer')
}

const isReceived = (type: string) => {
  return (type === 'receive')
}

export const getDescriptionFromTransactionType = (transactionItem: TransactionItem) => {
  if (isTransfered(transactionItem?.type)) {
    return `Transfered to ${transactionItem?.to?.accountHolderName}`
  } else if (isReceived(transactionItem?.type)) {
    return `Received from ${transactionItem?.from?.accountHolderName}`
  }

  return ''
}

export const currencyFormatter = (amount: number, currency: string = 'SGD') => {
  return new Intl.NumberFormat('en-SG', {
    style: 'currency',
    currency
  }).format(amount)
}