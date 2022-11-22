//Using hooks => useContext
import React, { useContext } from "react";
import { FirstName, LastName } from "./A";
function D(props) {
  const firstName = useContext(FirstName);
  const lastName = useContext(LastName);
  return (
    <div>
      {firstName} {lastName}
    </div>
  );
}

export default D;

//Using functional Component
// import React from "react";
// import { FirstName, LastName } from "./A";
// function D(props) {
//   return (
//     <div>
//       <FirstName.Consumer>
//         {(fname) => {
//           return (
//             <LastName.Consumer>
//               {(lname) => {
//                 return (
//                   <h1>
//                     {fname} {lname}
//                   </h1>
//                 );
//               }}
//             </LastName.Consumer>
//           );
//         }}
//       </FirstName.Consumer>
//     </div>
//   );
// }

// export default D;

//Using Class Component

// import React, { Component } from "react";
// import C from "./C";
// import { FirstName, LastName } from "./A";
// class D extends Component {
//   render() {
//     return (
//       <div>
//         <FirstName.Consumer>
//           {(fname) => {
//             return (
//               <LastName.Consumer>
//                 {(lname) => {
//                   return (
//                     <h1>
//                       {fname} {lname}
//                     </h1>
//                   );
//                 }}
//               </LastName.Consumer>
//             );
//           }}
//         </FirstName.Consumer>
//       </div>
//     );
//   }
// }

// export default D;
