import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Admin from './pages/Admin';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProtectedRoutes from './auth/ProtectedRoutes';

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
          <Routes>
              <Route path="/" element={< SignIn/>}></Route>
              <Route element={<ProtectedRoutes/>}>
                <Route path="/admin/*" element={< Admin/>}></Route>
              </Route>
          </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
