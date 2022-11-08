import Dashboard from "./Dashboard"
import Header from "./Header"
import Sidebar from "./Sidebar"

const Layout = ({children}) => {
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