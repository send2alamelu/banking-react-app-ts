// Components.
import YourActivity from './YourActivity'
import Header from './Header'
import Footer from './Footer'
import AccountBalance from './AccountBalance';

function Dashboard() {
  return (
    <div className="Dashboard">
      <Header />
      <AccountBalance />
      <YourActivity />
      <Footer />
    </div>
  );
}

export default Dashboard;
