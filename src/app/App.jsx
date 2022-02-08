import Profile from '../components/Profile/Profile';
import user from '../json/user.json';
import Statistics from '../components/Statistics/Statistics';
import data from '../json/data.json'

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
    </div>
  )
}
export default App;