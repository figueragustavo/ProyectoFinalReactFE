import './App.css';
import React from 'react';
import AppContextProvider from "./Context/AppContext";
import { BrowserRouter,  Route,  Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Favoritos from './Pages/Favoritos';
import Premium from './Pages/Premium';


function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favoritos:id" element={<Favoritos />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/premium" element={<Premium />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContextProvider>
  );
}
export default App;