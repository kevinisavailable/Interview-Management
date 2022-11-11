import Dashboard from "./Dashboard"
import Header from "./Header"
import Sidebar from "./Sidebar"
import userRedirectLogout from '../../customHook/useRedirectLogout'
import Main from "./Main"

const Layout = ({children}) => {
  userRedirectLogout("/login")
  return (
    <>
    <div>     
    <Header />
    <Sidebar />
    {/* <Dashboard /> */}
    <Main children={children}/>
    </div>
    </>
  )
}

export default Layout