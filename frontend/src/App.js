import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './routes/Home';
import DashboardHome from './routes/DashboardHome';
import RegisterRoute from './routes/RegisterRoute';
import LoginRoute from './routes/LoginRoute';
function App() {
  return (
    <>
      <Router>
            <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/register" element={<RegisterRoute/>} />
            <Route exact path="/login" element={<LoginRoute/>} />

            <Route exact path="/user/home" element={<DashboardHome/>} />

            
            
            
            </Routes>


      </Router>
    </>
  );
}

export default App;
