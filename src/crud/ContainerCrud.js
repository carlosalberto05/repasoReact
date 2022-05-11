import React from "react";

const ContainerCrud = () => {
  return (
    <div className="row">
      <div className="col-8">
        <h5 className="text-center">Lista de tareas</h5>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="lead">Nombre de la tarea</span>
            <button className="btn btn-danger btn-sm float-right">
              Eliminar
            </button>
            <button className="btn btn-warning btn-sm float-right">
              Editar
            </button>
          </li>
        </ul>
      </div>
      <div className="co-4">
        <h5 className="text-center">Formulario</h5>
      </div>
    </div>
  );
};

export default ContainerCrud;
