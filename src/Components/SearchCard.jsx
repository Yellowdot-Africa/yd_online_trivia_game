// import React from "react";
// import PropTypes from "prop-types";
// import "../Styles/SearchCard.css";

// const SearchCard = ({ results, onCancel, onViewAll }) => {
//   return (
//     <div className="search-card">
//       {results.length > 0 ? (
//         <div>
//           <h3>Search Results</h3>
//           <ul>
//             {results.map((result) => (
//               <li key={result.id}>{result.name}</li>
//             ))}
//           </ul>
//           <button onClick={onViewAll}>View All</button>
//         </div>
//       ) : (
//         <div>
//           <p>Nothing to display</p>
//           <button onClick={onCancel}>Cancel</button>
//         </div>
//       )}
//     </div>
//   );
// };

// SearchCard.propTypes = {
//   results: PropTypes.array.isRequired,
//   onCancel: PropTypes.func.isRequired,
//   onViewAll: PropTypes.func.isRequired,
// };

// export default SearchCard;
