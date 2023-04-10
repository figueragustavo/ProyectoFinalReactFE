import React , { useContext } from "react";
import Swal from 'sweetalert2';
import fondoLogin from '../fondoLogin.jpg';
import axios from 'axios';
import {Context} from "../Context/AppContext";
import {API_URL } from "../utils/Url";
import { Link } from 'react-router-dom';
//import {BASE_URL} from '../../utils/BASE_URL' ; sujeto a modificacion


const Register = () => {
const {userValues, setUserValues} = useContext(Context) // <--aca va (context)
    
const onhandleSubmit = (e) => {
    e.preventDefault();
    createUser();
}
const onhandleChange = (e) => {
  e.preventDefault()
  const { name, value } = e.target;
 setUserValues ({
      ...userValues,
      [name] : value

  })
}
const createUser = async () => {
  try{
    const request = await axios.post(`${API_URL}/register`, userValues);
    console.log(request)
    const data = request.data   //esto va tambien 
    console.log(data)
    console.log(data.data)
      if(data.data.token != null) {
        Swal.fire("Registrado")
      } else{
        Swal.fire("No Registrado")
      }

  }catch (e){
    console.log(e)
    if(e.response.data.error === "ERROR_REGISTER_USER"){
      return  Swal.fire ('Este email ya se encuentra registrado')
    }else{
      return Swal.fire(e.msg)
    }
  
  }
 }


      return(
                <section className="vh-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black">
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
        
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registrate</p>
        
                        <form className="mx-1 mx-md-4" onSubmit={onhandleSubmit} >
        
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="name" name ="name" className="form-control" value= {userValues.name} onChange={onhandleChange} />
                              <label htmlFor="name" className="form-label" >Nombre</label>
                            </div>
                          </div>
        
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="email" name ="email" className="form-control" value= {userValues.email} onChange={onhandleChange}/>
                              <label htmlFor="email" className="form-label" >Mail</label>
                            </div>
                          </div>
        
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="password" name ="password" className="form-control" value= {userValues.password} onChange={onhandleChange} />
                              <label htmlFor="password" className="form-label" >Contraseña</label>
                            </div>
                          </div>
        
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="passConfirm" name ="passConfirm" className="form-control" value= {userValues.passConfirm} onChange={onhandleChange} />
                              <label htmlFor="passConfirm" className="form-label" >Repetí tu contraseña</label>
                            </div>
                          </div>
        
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" className="btn btn-primary btn-lg"  >Registrarse</button>
                          </div>
        
                        </form>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4"></div>
                    <Link className="nav-link text-red-50" aria-current="page" to="/login">YA TENGO CUENTA</Link>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4"></div>
                    <Link className="nav-link text-red-50" aria-current="page" to="/">INICIO</Link>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src={fondoLogin} className="img-fluid" alt="Sample image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
            );
        
}

export default Register;