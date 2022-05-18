import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Admin from './pages/Admin';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
          <Routes>
              <Route path="/" element={< SignIn/>}></Route>
              <Route path="/admin/*" element={< Admin/>}></Route>
          </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
