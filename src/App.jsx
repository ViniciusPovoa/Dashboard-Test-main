import './App.css'
import Sidebar from './assets/components/sidebar'
import './assets/components/styles/index.css'
import { Outlet } from 'react-router-dom'
import AvatarBar from './assets/components/pages/AvatarBar'

function App() {

  return (
    <>
      <Sidebar />
      <AvatarBar />
      <Outlet />
    </>
  )
}

export default App
