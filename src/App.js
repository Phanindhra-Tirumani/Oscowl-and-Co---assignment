import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import SimpleTodos from './components/SimpleTodos'
import './App.css' // Global styles

const App = () => (
  <Router>
    <div className="app-container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Protecting tasks route */}
        <Route path="/tasks" element={<SimpleTodos />} />
        <Route path="*" element={<Navigate to="/login" />} />{' '}
      </Routes>
    </div>
  </Router>
)

export default App
