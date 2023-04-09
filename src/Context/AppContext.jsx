import axios from 'axios';
import { createContext, useEffect, useState } from "react";
import Signup from '../Pages/SignUp';
import Login from '../Pages/Login';

export const AppContext = createContext();
const AppContextProvider = ({ children}) => {
    const API_URL = 'https://api.themoviedb.org/3'
    const API_KEY = '98cc862b0f47f735f96dc4c4140fe33c'
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original'
  
    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("");
   const [userValues, setUserValues] = useState({
    email: "",
    contraseña: "",
   })
   
    useEffect(() =>{
        axios
        .get("https://api.themoviedb.org/3/movie/popular?api_key=98cc862b0f47f735f96dc4c4140fe33c")
        .then((response) => {
            setMovies(response.data.results);
             
        })
        .catch((error) => console.error(error));
    },[])


    return <AppContext.Provider value={{movies, userValues, setUserValues}}>{children}</AppContext.Provider>
};

export default AppContextProvider;