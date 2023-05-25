import { Profile } from './task1/Profile';
import userprofile from 'data/user.json';

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
    </div>
  );
};