import { useEffect } from 'react'
import './App.css'
import { useLocation, useNavigate } from 'react-router-dom'

import SideNav from './components/SideNav';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/profile')
    }
  }, [location]);

  return (
    <div className="App">
      <SideNav />
    </div>
  )
}

export default App
