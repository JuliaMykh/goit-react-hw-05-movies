
export const CastList = ({actors }) =>  {
  return (
     
      <ul>
        {actors.cast.map(({ id, name, profile_path }) => {
          return (
            <li key={id}>
              <div>
                <img
                  src={
                    profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : "No"
                  }
                  alt={name}
                />
              </div>
              <p>{name}</p>
            </li>
          );
        })}
      </ul>
   
  );
}

// export const CastList = ({id, name, profile_path }) =>  {
//   return (
//             <li key={id}>
//               <div>
//                 <img
//                   src={
//                     profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : "No image"
//                   }
//                   alt={name}
//                 />
//               </div>
//               <p>{name}</p>
//             </li>
   
//   );
// }