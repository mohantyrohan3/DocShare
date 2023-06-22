import React, { useEffect } from "react";  
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
import { checkauth } from './store/slices/userSlice';
import { useSelector,useDispatch } from 'react-redux'





function App() {


  const dispatch = useDispatch();
  const user = useSelector((state)=> state.user)
  
  useEffect(() => {
    dispatch(checkauth());
  },[user.status]);





  return (
    <>
      <Router>
            <Routes>
            <Route exact path="/" element={<Home/>} />


            {
              (user.status === "Authenticated")?(
                <>
                  <Route exact path="/user/home" element={<DashboardHome/>} />

                </>
              ):(
                <>
                <Route exact path="/register" element={<RegisterRoute/>} />
                <Route exact path="/login" element={<LoginRoute/>} />
                </>
              )
            }




            
            
            
            </Routes>


      </Router>
    </>
  );
}

export default App;
