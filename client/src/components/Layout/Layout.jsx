import Dashboard from "./Dashboard"
import Header from "./Header"
import Sidebar from "./Sidebar"
import userRedirectLogout from '../../customHook/useRedirectLogout'

const Layout = ({children}) => {
  userRedirectLogout("/login")
  return (
    <>
    <div>     
    <Header />
    <Sidebar />
    <Dashboard />
    {children}
    </div>
    </>
  )
}

export default Layout