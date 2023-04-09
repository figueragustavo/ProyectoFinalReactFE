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
    if(values.nombre === '' || values.email === '' || values.contraseña === '' ){
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
   
};
const handleChange = e => {
  const { target } = e;
  const { nombre, email, contraseña,  value } = target;
  const newValues = {
      ...values,
      [nombre] : value,
      [email] : value,
      [contraseña] : value

  }
  setValues(newValues);
};
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
        
                        <form className="mx-1 mx-md-4" onClick={handleSubmit}>
        
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="nombre" name ="nombre" class="form-control" value= {values.nombre} onChange={handleChange} />
                              <label htmlfor="nombre" className="form-label" for="form3Example1c">Nombre</label>
                            </div>
                          </div>
        
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="email" name ="email" className="form-control" value= {values.email} onChange={handleChange}/>
                              <label htmlfor="email" className="form-label" for="form3Example3c">Mail</label>
                            </div>
                          </div>
        
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="contraseña" name ="contraseña" class="form-control" value= {values.contraseña} onChange={handleChange} />
                              <label htmlfor="contraseña" className="form-label" for="form3Example4c">Contraseña</label>
                            </div>
                          </div>
        
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="contraseña" name ="contraseña" className="form-control" value= {values.contraseña} onChange={handleChange} />
                              <label htmlfor="contraseña" className="form-label" for="form3Example4cd">Repetí tu contraseña</label>
                            </div>
                          </div>
        
                          <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c"  />
                            <label className="form-check-label" for="form2Example3">
                              <a href="#!">Terminos y Condiciones</a>
                            </label>
                          </div>
        
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}>Registrarse</button>
                          </div>
        
                        </form>
        
                      </div>
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

export default Signup;