import axios from 'axios';
import { createContext, useEffect, useState } from "react";
import Register from '../Pages/Register';
import Login from '../Pages/Login';

export const Context = createContext();
const AppContext = ({ children }) => {
  
    const [movies, setMovies] = useState([]);
    const [userValues, setUserValues] = useState({
        name: "",
        email: "",
        password: "",
        passConfirm: "",
    });

    const [favValues, setfavValues] = useState({
        user_id: "",
        movie_id: ""
    });


    useEffect(() => {
        axios
            .get("https://api.themoviedb.org/3/movie/popular?api_key=98cc862b0f47f735f96dc4c4140fe33c")
            .then((response) => {
                setMovies(response.data.results);

            })
            .catch((error) => console.error(error));
    }, [])


    return (
        <Context.Provider 
            value={{ 
                movies, 
                userValues, 
                setUserValues,
                favValues, 
                setfavValues,
            }}
            >
             {children}
           </Context.Provider>
    );
};

export default AppContext;