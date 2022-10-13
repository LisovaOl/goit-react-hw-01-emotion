import userInfo from '../Data/user.json';
import statInfo from '../Data/data.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json';

import UserProfile from './User/User';
import StatList from './Statistics/StatisticsList';
import FriendList from './Friends/FriendsList';
import TransactionHistory from './Transaction/Transaction';

export const App = () => {
  return (
    <div>
      <UserProfile
        name={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />

      <StatList title="Upload stats" stats={statInfo} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
