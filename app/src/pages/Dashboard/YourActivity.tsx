import * as React from 'react';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// {
//   "id": "3c6bee24-072d-4919-aff9-b87d1f4c3895",
//   "type": "receive",
//   "amount": 23,
//   "currency": "SGD",
//   "from": {
//       "accountNo": "8182-321-9921",
//       "accountHolderName": "Daniel"
//   },
//   "description": "lunch",
//   "date": "2021-09-12T01:00:03.054Z"
// },

function createData(date: string, desc: string, amount: string) {
  return { date, desc, amount };
}

const rows = [
  createData('6 Sep', 'Transfer to Friend A', '-10.00'),
  createData('31 Aug', 'Transfer to Friend A', '-10.00'),
];

export default function YourActivity() {
  return (
    <>
      <h1>Your Activity</h1>
      <Divider />
      <TableContainer component={Paper}>
        <Table aria-label="activity table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.amount}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="left">{row.desc}</TableCell>
                <TableCell align="left">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
