import React from "react";
import ContainerCrud from "./crud/ContainerCrud";

const Crud = () => {
  return (
    <div className="container mt-5">
      <h4 className="text-center">CRUD SIMPLE</h4>
      <hr />
      <ContainerCrud />
    </div>
  );
};

export default Crud;
