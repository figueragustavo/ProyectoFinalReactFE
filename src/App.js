import './App.css';
import React from 'react';
import AppContextProvider from "./Context/AppContext";
import { BrowserRouter,  Route,  Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Main from './Components/Main';


function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContextProvider>
  );
}
export default App;