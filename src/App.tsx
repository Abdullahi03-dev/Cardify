import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Index from "./pages/index.tsx"
import Signup from "./pages/signup.tsx"
import Home from "./pages/home.tsx"
import './index.css'

import { AuthProvider } from './context/AuthProvider.tsx'
// import { NavProvider } from './context/bottomnav.tsx'

const App=()=>{
 return(
 <>
 <AuthProvider>
 <Router>
    <Routes>
        <Route element={<Index/>} path="/"/>
        <Route element={<Signup/>} path='signup'/>
        {/* <NavProvider> */}
        <Route element={<Home/>} path='Home'/>
        {/* </NavProvider> */}
    </Routes>
 </Router>
 </AuthProvider>
 </>
 
 )
}

export default App