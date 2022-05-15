import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={< SignIn/>}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
