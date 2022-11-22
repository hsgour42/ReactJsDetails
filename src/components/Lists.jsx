import React from "react";
import ListEmployee from "./ListEmployee";

function Lists(props) {
  const employees = [
    { id: 1, name: "rohit", age: 28 },
    { id: 2, name: "mohit", age: 29 },
    { id: 3, name: "Anuj", age: 30 },
    { id: 4, name: "Arun", age: 31 },
  ];
  //   const employeeList = employees.map((employee) => <li>{employee}</li>);
  return (
    // 1st way to use map
    // <ul>
    //   {employees.map((employee) => (
    //     <li>{employee}</li>
    //   ))}
    // </ul>

    //second way
    // <>
    //   <ul>{employeeList}</ul>
    // </>

    //3rd way to use map
    // <ul>
    //   {employees.map((employee) => (
    //     <ListEmployee key={employee.id} employee={employee} />
    //   ))}
    // </ul>

    //if we do not have any unique key then we use index but if we are using index then we are not able to filter the data
    <ul>
      {employees.map((employee, index) => (
        <ListEmployee key={index} employee={employee} />
      ))}
    </ul>
  );
}

export default Lists;
