// import React from "react";
// import { useState } from "react";



// function FilterProfiles () {
//   const [minAge, setMinAge] = useState(18);
//   const [maxAge, setMaxAge] = useState(70);
//   const [location, setLocation] = useState('');

//   const handleMinAgeChange = (event) => {
//     setMinAge(event.target.value);
//   };

//   const handleMaxAgeChange = (event) => {
//     setMaxAge(event.target.value);
//   };

//   const handleLocationChange = (event) => {
//     setLocation(event.target.value);
//   };

//   ProfilesData.profiles.filter(
//     (profile) =>
//       profile.location.toLowerCase().includes(location.toLowerCase()) &&
//       parseInt(profile["d.O.B"].split("-")[2]) >= minAge &&
//       parseInt(profile["d.O.B"].split("-")[2]) <= maxAge
//   );

//   return <div>
    
//       <div>
//         <label htmlFor="location">Location:</label>
//         <input type="text" id="location" value={location} onChange={handleLocationChange} />
//       </div>
//       <div>
//         <label htmlFor="minAge">Min Age:</label>
//         <input type="range" id="minAge" min="18" max="70" value={minAge} onChange={handleMinAgeChange} />
//         {minAge}
//       </div>
//       <div>
//         <label htmlFor="maxAge">Max Age:</label>
//         <input type="range" id="maxAge" min="18" max="70" value={maxAge} onChange={handleMaxAgeChange} />
//         {maxAge}
//       </div>
//     </div>

// }


// export default FilterProfiles;
