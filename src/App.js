import './App.css';
import React from 'react';
import AppContextProvider from "./Context/AppContext";
import { BrowserRouter,  Route,  Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Signup from './Pages/SignUp';
import Login from './Pages/Login';


function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContextProvider>
  );
}
export default App;