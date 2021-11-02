import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

import useGet from '../../hooks/useGet';
import { getBalancesApiPath } from '../../utils/Api';
import { currencyFormatter } from '../../utils/Transaction';
import { GetResponse } from '../../types/ApiResponse';

import Block from '../../components/Common/Block/Block';

export default function AccountBalance() {
  const getBalance: GetResponse = useGet(getBalancesApiPath());
  const balanceResponse: any = getBalance?.response || {}
  const [balanceAmount, setBalanceAmount] = useState('');

  useEffect(() => {
    const { balance } = balanceResponse;
    if (balance) {
      setBalanceAmount(
        currencyFormatter(balance)
      )
    }
  }, [balanceResponse])


  return (
    <Block>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        You have
      </Typography>
      <Typography variant="h5" component="div">
        {balanceAmount}
      </Typography>
      <Typography variant="body2">
        in your account
      </Typography>
    </Block>
  );
}
