import { Profile } from './Profil/Profile';
import { Statistics } from './Statistic/Statistics';
import { FriendList } from './FriendList/FriendList';
import userprofile from 'data/user.json';
import datajson from 'data/data.json';
import friends from 'data/friends.json';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={userprofile.avatar}
        username={userprofile.username}
        tag={userprofile.tag}
        location={userprofile.location}
        followers={userprofile.stats.followers}
        views={userprofile.stats.views}
        likes={userprofile.stats.likes}
      />
      <Statistics title="Upload stats" stats={datajson} />
      <FriendList friends={friends} />
    </div>
  );
};
