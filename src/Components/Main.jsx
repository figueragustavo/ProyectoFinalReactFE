import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Movies from "./Movies";
import Nav from "./Nav";



const Main = () => {

    const movies  = useContext(AppContext);
    const url = "https://image.tmdb.org/t/p/original";

    return ( 
        <>
           <Nav />
            <h1 className="text-center">Películas</h1>
            <Movies />
            
        </>
        

    );
}

export default Main;