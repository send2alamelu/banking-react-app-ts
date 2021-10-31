import { useEffect, useState } from 'react';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import useGet from '../../hooks/useGet';
import { getTransactionApiPath } from '../../utils/Api';
import { GetResponse } from '../../types/ApiResponse';
import { TransactionItem } from '../../types/TransactionItem';
import { getDescriptionFromTransactionType } from '../../utils/Transaction';

export default function YourActivity() {
  const getTransaction: GetResponse = useGet(getTransactionApiPath());
  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    const transactions = getTransaction?.response?.data || []
    if (transactions.length > 0) {
      setTransactionList(transactions);
    }

  }, [getTransaction?.response]);

  return (
    <>
      <h1>Your Activity</h1>
      <Divider />
      <TableContainer component={Paper}>
        <Table aria-label="activity table">
          <TableBody>
            {transactionList.map((transaction: TransactionItem) => (
              <TableRow
                key={transaction.amount}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {transaction.date}
                </TableCell>
                <TableCell align="left">{getDescriptionFromTransactionType(transaction)}</TableCell>
                <TableCell align="left">{transaction.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
