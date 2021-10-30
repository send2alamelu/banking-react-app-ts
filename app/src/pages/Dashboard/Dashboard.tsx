import React from 'react';

import Block from '../../Components/Common/Block/Block'
import YourActivity from './YourActivity'
import Header from './Header'
import Footer from './Footer'

function Dashboard() {
  return (
    <div className="Dashboard">
      <Header />
      <Block />
      <YourActivity />
      <Footer />
    </div>
  );
}

export default Dashboard;
