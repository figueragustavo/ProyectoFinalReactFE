import React from "react";

function Login (){
    return(
        <form>
        <div class="form-group">
            <label for="correo">Correo</label>
            <input id="correo" name="correo"
                class="form-control" type="email"
                placeholder="Correo electrónico" />
        </div>
        <div class="form-group">
            <label for="palabraSecreta">Contraseña</label>
            <input id="palabraSecreta" name="palabraSecreta"
                class="form-control" type="password"
                placeholder="Contraseña" />
        </div>
        <button type="submit" class="btn btn-primary mb-2">
            Entrar
        </button>
    </form>
    );
}

export default Login;