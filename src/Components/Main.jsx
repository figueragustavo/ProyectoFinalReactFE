import { useContext, useState } from "react";
import { Context } from "../Context/AppContext";
import Search  from "../Hooks/Search";

const Main = () => {

    const movies  = useContext(Context);
   // const searchKey = useState(UseFetch);
  
    const url = "https://image.tmdb.org/t/p/original";

    return ( 
        <>
           <Search />
            
        </>
        

    );
}

export default Main;