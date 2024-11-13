import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        {email, password},
      )
      const {token} = response.data
      localStorage.setItem('token', token)
      navigate('/tasks')
    } catch (err) {
      setError(`'Login failed: ' + ${err.response.data.message}`)
    }
  }

  return (
    <div className="auth-container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default Login
