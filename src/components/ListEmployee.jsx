import React from "react";

function ListEmployee({ employee }) {
  return <li>{`${employee.name} : ${employee.age}`}</li>;
}

export default ListEmployee;
