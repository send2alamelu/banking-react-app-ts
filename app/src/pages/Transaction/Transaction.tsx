import React from 'react';
import Typography from '@mui/material/Typography';

import Dropdown from '../../Components/Fields/Dropdown/Dropdown';
import DateInput from '../../Components/Fields/DateInput/DateInput';
import TextInput from '../../Components/Fields/TextInput/TextInput';
import Footer from './Footer';

function Transaction() {
  const dropdownItmes = [{
    value: 'Recepient',
    label: 'Recepient'
  }, {
    value: 'Sender',
    label: 'Sender'
  }];

  return (
    <>
      <Typography variant="h2" component="h2">
        Make a Transfer
      </Typography>
      <Dropdown label="Recepient" items={dropdownItmes} />
      <br />
      <DateInput label="Data of Transfer" />
      <br />
      <TextInput label="Description" />
      <br />
      <TextInput label="Amount" />
      <Footer />
    </>
  );
}

export default Transaction;

