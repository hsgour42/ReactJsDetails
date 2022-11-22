import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Employee from "./Employee";
import Student from "./Student";

function Contact(props) {
  const location = useLocation();
  //   console.log(location, "location");
  return (
    <div>
      Contact Page
      {/* //Get data from another component using link */}
      {/* {location.pathname} : {location.state.name} :
      {location.state.phone} */}
      {/* //Inside Child component route */}
      <Routes>
        <Route path="/employee" element={<Employee />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </div>
  );
}

export default Contact;
