import format from 'date-fns/format'

export const formatTransactionDate = (transactionDate: string) => {
    return format(new Date(transactionDate), 'd MMM')
}