import { Navigate, Route, Routes,} from "react-router-dom"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"
import { Navbar } from './Navbar';

export const MainApp = () => {
  return (
    <>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link> */}
        <Navbar />
        <hr />


        <Routes>

          <Route  path="/" element={<HomePage/>} />
          <Route  path="/about" element={<AboutPage/>} />
          <Route  path="/login" element={<LoginPage/>} />

          {/* <Route  path="*" element={<LoginPage />} /> */}
          <Route path="/*" element={ <Navigate to="/about" /> } />

        </Routes>
    </>
  )
}
