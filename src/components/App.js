import Profile from './Profile';
import userprofile from '../user.json';

export default function App() {
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
}
