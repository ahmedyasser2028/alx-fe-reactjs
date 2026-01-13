import { useState } from 'react';
import { searchUsers } from '../services/githubService';

const UserSearch = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchUsers(query);
    setUsers(results);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub users..."
        />
        <button type="submit">Search</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        {users.map((user) => (
          <div key={user.id} style={{ border: '1px solid gray', margin: '5px', padding: '5px' }}>
            <img src={user.avatar_url} alt={user.login} width="50" />
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.login}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSearch;
