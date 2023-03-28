import React from "react";
import { BiCameraMovie } from 'react-icons/bi';
import { GiPopcorn } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-white-50" to="/"> <GiPopcorn /> Pochocleros </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active text-white-50" aria-current="page" to="/peliculas"><BiCameraMovie /> Películas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white-50" aria-current="page" to="/login"> Login</Link>
                                </li>
                                <Link className="nav-link text-white-50" aria-current="page" to="/signup">Registrarse</Link>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Búsqueda" aria-label="Search" />
                                <button className="btn btn-light" type="submit">Buscar</button>
                            </form>
                        </div>
                    </div>
                </nav>
    );
}

export default Nav;