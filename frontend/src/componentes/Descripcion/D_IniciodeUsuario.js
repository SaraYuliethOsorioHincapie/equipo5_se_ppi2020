import React from "react";
import Inicio from "../../images/Inicio.jpg"; //Esta ruta la corregí 
import "../../styles.css";
function D_inicioUsuario() {
  return(
    <div className="Imagen1">
  <img  className = "Imagenprincipal" src={Inicio} />
</div>
  )
  }
export default D_inicioUsuario;