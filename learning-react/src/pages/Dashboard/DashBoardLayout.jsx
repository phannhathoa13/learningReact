import { Link, Outlet } from 'react-router-dom'

export default function DashboardLayout () {
  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard Layout</h1>
      <nav>
        <Link to='/dashboard'>Home</Link>
        <Link to='/dashboard/profile'>Profile</Link>
        <Link to='/dashboard/settings'>Settings</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}
