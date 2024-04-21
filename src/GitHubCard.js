import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap';

function GitHubCard({ setUserData }) {
    const [username, setUsername] = useState('')

    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        console.log(data)
        setUserData(data)
    }
    
    const clear = () => {
        setUserData(null)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={username} onChange={handleChange} placeholder="username" />
                <input type='submit' />
            </form>
            <Button onClick={clear}>Clear</Button>
            <h1>{userData.login}</h1>
            <img src={userData.avatar_url} alt='profile' />
            <p>
                <a href={userData.html_url} target="blank">Profile</a>
            </p>
            {userData.bio && <p>Bio: {userData.bio}</p>}
        </div>
    )
}

export default GitHubCard
