import React from "react";
import "../../styles.css"; 
import {Link} from 'react-router-dom'
function E_preciosusuario() {
  return (
    <div>
      
    
      <button type="button" className="Regresar
      "> <Link className="Botones"  to ="Informacionusuario">
        Volver</Link>
      </button>
      <h1 className="Titulo_Registro">PRECIOS</h1>
      
      </div>
  );
}

export default E_preciosusuario;