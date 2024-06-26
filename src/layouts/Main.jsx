import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer.jsx"

const Main = ({ children }) => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Main