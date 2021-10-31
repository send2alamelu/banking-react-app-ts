import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';

import DateInput from '../../components/Fields/DateInput/DateInput';
import TextInput from '../../components/Fields/TextInput/TextInput';
import Footer from './Footer';
import RecepientDropdown from './RecepientDropdown';
import usePost from '../../hooks/usePost';
import { getTransferApiPath } from '../../utils/Api';
import { ROUTE_PATH } from '../../constants/RoutePath';

const { DASHBOARD } = ROUTE_PATH;

function Transaction() {
  const history = useHistory();
  const { postApi, response, error } = usePost(getTransferApiPath());
  const [recipientAccountNumber, setRecipientAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [dateTransfer, setDateTransfer] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const transactionResponse: any = response;
    if (transactionResponse?.status === 'success') {
      history.push(DASHBOARD);
    }
  }, [response, error]);

  const onSubmit = async () => {
    console.log('on submit called: ', recipientAccountNumber, amount, dateTransfer, description);

    if (!recipientAccountNumber || !amount) {
      return
    }

    postApi({
      recipientAccountNo: recipientAccountNumber,
      amount,
      date: dateTransfer,
      description
    });
  }

  return (
    <>
      <Typography variant="h2" component="h2">
        Make a Transfer
      </Typography>
      <RecepientDropdown onChange={setRecipientAccountNumber} />
      <br />
      <DateInput id="transfer-date" label="Data of Transfer" onChange={setDateTransfer} />
      <br />
      <TextInput id="desc" label="Description" onChange={setDescription} />
      <br />
      <TextInput id="amount" label="Amount" onChange={setAmount} />
      <Footer onSubmit={onSubmit} />
    </>
  );
}

export default Transaction;

