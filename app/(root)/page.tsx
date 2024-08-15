import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
const Home = () => {
  const loggedIn = {
    firstName: "Imdad",
    lastName: "Khan",
    email: "imdadullakhan333@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          ></HeaderBox>
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1000.35}
          ></TotalBalanceBox>
        </header>
        Recent Transactions
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[
          { currentBalance: 123.5 },
          {
            currentBalance: 500,
          },
        ]}
      ></RightSidebar>
    </section>
  );
};

export default Home;
