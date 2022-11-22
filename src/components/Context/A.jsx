//Using Functional Component

import React from "react";
import B from "./B";
const FirstName = React.createContext();
const LastName = React.createContext();

function A(props) {
  return (
    <div>
      <FirstName.Provider value="Ram">
        <LastName.Provider value="Shyam">
          <B></B>
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default A;
export { FirstName, LastName };

//====Using Class Component

// import React, { Component } from "react";
// import B from "./B";
// const FirstName = React.createContext();
// const LastName = React.createContext();
// class A extends Component {
//   render() {
//     return (
//       <div>
//         <FirstName.Provider value="Himanshu">
//           <LastName.Provider value="Shayam">
//             <B> </B>
//           </LastName.Provider>
//         </FirstName.Provider>
//       </div>
//     );
//   }
// }

// export default A;
// export { FirstName, LastName };
