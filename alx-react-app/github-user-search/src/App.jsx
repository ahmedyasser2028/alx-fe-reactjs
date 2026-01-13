import { useState } from 'react'
import axios from 'axios'

function App() {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)

  const handleSearch = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}`)
      setUser(res.data)
    } catch (err) {
      alert('User not found')
      setUser(null)
    }
  }

  return (
    <div>
      <h1>GitHub User Search</h1>
      <input 
        type="text" 
        placeholder="Enter GitHub username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>

      {user && (
        <div>
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} width={100}/>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <a href={user.html_url} target="_blank">GitHub Profile</a>
        </div>
      )}
    </div>
  )
}

export default App
