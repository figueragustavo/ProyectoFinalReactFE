import axios from 'axios';
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children}) => {
    const [movies, setMovies] = useState([]);
    const [favoritas, setFavoritas] = useState([]);
    useEffect(() =>{
        axios
        .get("https://api.themoviedb.org/3/movie/popular?api_key=122daef07a16845ab90c2b8564879474")
        .then((response) => {
            setMovies(response.data.results);
        })
        .catch((error) => console.error(error));
    },[])

    return <AppContext.Provider value={{movies, favoritas, setFavoritas}}>{children}</AppContext.Provider>
};

export default AppContextProvider;