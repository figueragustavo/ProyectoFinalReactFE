import React from 'react'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



function Card(props) {
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original'
    
    const {movie} = props;
  
    return (
  
          <div className="card p-2 col-4 col-sm-3 col-xl-2" key={movie.id}>
            <img src={`${URL_IMAGE + movie.poster_path}`} className="card-img-top" alt="Peliculas" />
            <div className="card-body d-flex flex-column justify-content-between gap-4">
              <div>
                <h5 className="card-title">{movie.title}</h5>
                <div className='d-flex justify-content-between'>
            </div>
        </div>
    </div>
    </div>  
       
 );
}

export default Card;