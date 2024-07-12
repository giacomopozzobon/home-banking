import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const LoggedIn = { firstName: "Giacomo", lastName: "Pozzobon", email: "g97.pozzobon@gmail.com" };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={LoggedIn?.firstName || "Guest" }
            subtext="Access and manage your account and transactions."
          />

          <TotalBalanceBox 
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {100000.25}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user={LoggedIn} 
        transactions={[]}
        banks={[{currentBalance: 123.50}, {currentBalance: 500.50}]}
      />
    </section>
  )
}

export default Home