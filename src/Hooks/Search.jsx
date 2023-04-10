import { useState, useEffect, useContext} from "react";
import React from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { BiCameraMovie } from 'react-icons/bi';
import { GiPopcorn } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import Youtube from 'react-youtube';
import { Context } from "../Context/AppContext";


function Search () { 

    const API_URL = 'https://api.themoviedb.org/3'
    const API_KEY = '98cc862b0f47f735f96dc4c4140fe33c'
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

  const [searchKey, setSearchKey] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  const [trailer, setTrailer] = useState (null);
  const [movie, setMovie] = useState ({ title: "loading Movies"});
  const [movies, setMovies] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [activado, setActivado] = useState(false);
  const { favValues, setfavValues } = useContext(Context)


  //peticion api
  const fetchMovies = async(searchKey) =>{
    const type = searchKey ? "search" : "discover"
    const {data : { results },

  } = await axios.get(`${API_URL}/${type}/movie`, {
    params: {
      api_key : API_KEY,
      query : searchKey, 

    },

  });

  setSelectedMovie(results[0])
  setMovies(results)
  setMovie(results[0])
  
  if(results.length){
    await fetchMovie(results[0].id)

  }
  
 }
 const fetchMovie = async (id) =>{
  const {data} = await axios.get(`${API_URL}/movie/${id}`,{
    params:{
      api_key : API_KEY,
      append_to_response: "videos"
    }
  })
  if(data.videos && data.videos.results){
    const trailer = data.videos.results.find( 
    (vid) => vid.name === "Official Trailer"
    );
    setTrailer(trailer ? trailer : data.videos.results[0])

  }
  setMovie(data)

  }
  const selectMovie = async (movie) =>{
    fetchMovie(movie.id)
    setMovie(movie)
    window.scroll(0,0)

     }
  
 const searchMovies = (e)=>{
    e.preventDefault();
    fetchMovies(searchKey)
    console.log(searchKey)
 } 

 const handleSubmit = (e) => {
  e.preventDefault();
  Swal.fire ('Debe contratar el paquete Premium para ver las Peliculas')
    
  }

  const handelAddFav = (e) => {
    e.preventDefault();
    addFav()

  }

  const addFav = async () => {
    try{
      const request = await axios.post(`${API_URL}/addFav`, favValues);
      console.log(request)
      const data = request.data   //esto va tambien 
      console.log(data)
      console.log(data.data)
        if(data.data.token != null) {
          Swal.fire("Agregado el Fav")
        } else{
          Swal.fire("No se pudo agregar")
        }
  
    }catch (e){
      console.log(e)
      if(e.response.data.error === "ERROR_ADD_FAV"){
        return  Swal.fire ('Esta peli ya se encuentra registrado en fav')
      }else{
        return Swal.fire(e.msg)
      }
    
    }
   }

   const handelGetFavByUser = (e) => {
    e.preventDefault();
    getFavByUser()

  }

   const getFavByUser = async () => {
    try {
      const request = await axios.post(`${API_URL}/getFavByUser`, favValues);
      const data = request.data
      console.log(data)
      if (data.data.token != null) {
        Swal.fire("Mostrando Fav")
      } else {
        Swal.fire("no se puede mostrar Fav")
      }
    } catch (error) {
      console.log(error)
      return Swal.fire(error.msg)

    }

   }
  
 useEffect(()=> {
  fetchMovies();

 },[])

 return (
   
    <div>
    <nav className="navbar navbar-expand-lg bg-dark">
                        <div className="container-fluid">
                            <Link className="navbar-brand text-white-50" to="/"> <GiPopcorn /> Pochocleros </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active text-white-50" aria-current="page" to="/movies" onChange={handleSubmit}><BiCameraMovie /> Películas</Link>
                                    </li>
                                    <li className="nav-item">
                            <Link className="nav-link text-white-50" aria-current="page" to="/favoritos" onChange={handelAddFav}><FiHeart /> Favoritos</Link>
                        </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white-50" aria-current="page" to="/login"> Login</Link>
                                    </li>
                                    <li className="nav-item"></li>
                                    <Link className="nav-link text-white-50" aria-current="page" to="/register">Registrarse</Link>
                                    <li className="nav-item"></li>
                                    <Link className="nav-link text-white-50" aria-current="page" to="/premium">Premium</Link>
                                </ul>
                          
                                <form className="d-flex" onClick={ searchMovies}>
                            <input className="form-control me-2" type="text" placeholder='Search' onChange={(e) => setSearchKey(e.target.value)} />
                            <button className="btn btn-outline-success">Buscar</button>
                            </form>
                            </div>
                        </div>
                        
                    </nav>
                    <div>  
                      <main> 
                        {movie ? (
                  <div className="viewtrailer" style={{
                    backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
                  }}
                  > 
                 {playing ? (
                  <>
                  <Youtube
                  videoId ={trailer.key}
                  className ="reproductor container"
                  containerClassname={"youtube-container amru"}
             
                  /> 
                
                 <button onClick={() => setPlaying(false)} className="boton"> Cerrar
                 </button>
                 </>
                 ) : (
                  <div className="container">
                    <div className=""> 
                    {trailer ? (
                      <button className="boton" onClick={() => setPlaying(true) }
                      type="button"> VER TRAILER
                      </button>
                    ) : ( "trailer no disponible"
                    )}
                    <h1 className="text-white">{movie.title}</h1>
                    <p className="text-white">{movie.overview}</p>
                    </div>
                  </div>
                 ) } 
                  </div>
                  ) : null }
                  </main>
                  </div>
        
		  <div className="row mx-0 my-5 gap-4 justify-content-center">
        {movies.map((movie) => ( 
        <div key={movie.id} className="card p-2 col-4 col-sm-3 col-xl-2" onClick={()=> selectMovie(movie)} >
            <img src={`${IMAGE_PATH + movie.poster_path}`} className="card-img-top" alt="Peliculas" />
            <div className="card-body d-flex flex-column justify-content-between gap-4">
              <div>
                <h5 className="card-title">{movie.title}</h5>
                </div>
                <div className='d-flex justify-content-between'>
                <Link to={{pathname:`/favoritos/${movie.id}`, state:{some:movie.id}}} className="text-danger" ><FiHeart fill={activado ? "red" : "none"} onClick={() => activado ? setActivado(false): setActivado(true)} /></Link >
            </div>
        </div>
    </div>
   
    )) }
              </div>
              </div>          
                      
                      );
 }

     export default Search;