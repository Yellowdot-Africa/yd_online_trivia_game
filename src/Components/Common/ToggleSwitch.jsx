// import React from "react";
// import "../../Styles/ToggleSwitch.css";

// const ToggleSwitch = ({ label }) => {
//   return (
//     <>
//       <div className="container">
//         {label}{" "}
//         <div className="toggle-switch">
//           <input type="checkbox" className="checkbox" name={label} id={label} />
//           <label className="label" htmlFor={label}>
//             <span className="inner" />
//             <span className="switch" />
//           </label>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ToggleSwitch;







// import React, { useState } from "react";
// import "../../Styles/ToggleSwitch.css";

// const ToggleSwitch = ({ label, onToggle }) => {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleToggle = () => {
//     setIsChecked(!isChecked);
//     onToggle(!isChecked);
//   };

//   return (
//     <div className="container">
//       {label}{" "}
//       <div className="toggle-switch">
//         <input
//           type="checkbox"
//           className="checkbox"
//           name={label}
//           id={label}
//           checked={isChecked}
//           onChange={handleToggle}
//         />
//         <label className="label" htmlFor={label}>
//           <span className="inner" />
//           <span className="switch" />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default ToggleSwitch;


// import React from "react";
// import "../../Styles/ToggleSwitch.css";

// const ToggleSwitch = ({ checked, onChange }) => {
//   return (
//     <div className="toggle-switch">
//       <input
//         type="checkbox"
//         className="checkbox"
//         checked={checked}
//         onChange={onChange}
//       />
//       <label className="label">
//         <span className="inner" />
//         <span className="switch" />
//       </label>
//     </div>
//   );
// };

// export default ToggleSwitch;


// import React from "react";
// import "../../Styles/ToggleSwitch.css";
  
// const ToggleSwitch = ({ label }) => {
//   return (
//     <div className="container">
//       {label}{" "}
//       <div className="toggle-switch">
//         <input type="checkbox" className="checkbox" 
//                name={label} id={label} />
//         <label className="label" htmlFor={label}>
//           <span className="inner" />
//           <span className="switch" />
//         </label>
//       </div>
//     </div>
//   );
// };
  
// export default ToggleSwitch;








import React, { useState } from "react";
import "../../Styles/ToggleSwitch.css";

const ToggleSwitch = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name={label}
          id={label}
          checked={isChecked}
          onChange={handleToggleChange}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
