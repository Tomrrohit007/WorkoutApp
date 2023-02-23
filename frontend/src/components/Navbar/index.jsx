import { Link, Outlet } from 'react-router-dom'
import "./index.css"

function Navbar() {
  return (
    <nav className='navbar-cont'>
      <Link to="/">Workout Buddy</Link>
      <Outlet/>
    </nav>
  )
}

export default Navbar
