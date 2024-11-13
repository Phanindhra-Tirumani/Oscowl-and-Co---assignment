import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'
import axios from 'axios'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/signup',
        {
          name,
          email,
          password,
        },
      )
      const {token} = response.data
      localStorage.setItem('token', token) // Save JWT token to localStorge
      navigate('/login') // Redirect to tasks page after successful signup
    } catch (err) {
      setError(`'Signup failed: ' + ${err.response.data.message}`)
    }
  }

  return (
    <div className="auth-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Sign Up</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default Signup
