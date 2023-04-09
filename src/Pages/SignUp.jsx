import React , { useState } from "react";
import Swal from 'sweetalert2';
import fondoLogin from '../fondoLogin.jpg';


const Signup = () => {
const [values, setValues] = useState({
    nombre: '',
    email: '',
    contraseña: ''
    
});
const handleSubmit = e => {
    e.preventDefault();
    if(values.nombre === '' || values.email === '' || values.email === ''){
        Swal.fire ('No deje los campos vacios')
      
    } else {
        Swal.fire('Regitrado!')
        setValues({
            nombre: '',
            email: '',
            contraseña: ''
        })
        console.log(values)
    }
   
}
const handleChange = e => {
  const { target } = e;
  const { nombre, email, contraseña,  value } = target;
  const newValues = {
      ...values,
      [nombre] : value,
      [email] : value,
      [contraseña] : value,

  }
  setValues(newValues);
}
            return(
                <section class="vh-100">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-12 col-xl-11">
                <div class="card text-black">
                  <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
        
                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registrate</p>
        
                        <form class="mx-1 mx-md-4">
        
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input type="text" id="form3Example1c" class="form-control" value= {values.nombre} onChange={handleChange} />
                              <label class="form-label" for="form3Example1c">Nombre</label>
                            </div>
                          </div>
        
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input type="email" id="form3Example3c" class="form-control" value= {values.mail} onChange={handleChange}/>
                              <label class="form-label" for="form3Example3c">Mail</label>
                            </div>
                          </div>
        
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input type="password" id="form3Example4c" class="form-control" value= {values.contraseña} onChange={handleChange} />
                              <label class="form-label" for="form3Example4c">Contraseña</label>
                            </div>
                          </div>
        
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input type="password" id="form3Example4cd" class="form-control" value= {values.contraseña} onChange={handleChange} />
                              <label class="form-label" for="form3Example4cd">Repetí tu contraseña</label>
                            </div>
                          </div>
        
                          <div class="form-check d-flex justify-content-center mb-5">
                            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c"  />
                            <label class="form-check-label" for="form2Example3">
                              <a href="#!">Terminos y Condiciones</a>
                            </label>
                          </div>
        
                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="button" class="btn btn-primary btn-lg" onClick={handleSubmit}>Registrarse</button>
                          </div>
        
                        </form>
        
                      </div>
                      <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src={fondoLogin} class="img-fluid" alt="Sample image" />
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

export default Signup;