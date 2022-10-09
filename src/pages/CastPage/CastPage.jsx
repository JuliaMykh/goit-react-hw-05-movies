import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import getMovieCast from 'components/services/apiMovieCast';
import { CastList } from 'components/Cast/Cast';

export const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);    

    useEffect(() => {
        
    //    getMovieCast(movieId).then(setActors)
        
        const findM = async () => {
            try {
                const actors = await getMovieCast(movieId);
                console.log(actors);
                setActors(actors);
            }
            catch (err) {
                console.log(err)
            }
        };
        findM();

    // getMovieCast(movieId).then(({ cast }) => {
    //   const actorsArr = [];

    //     cast.map(({ id, name, profile_path }) => {
            
    //     const actor = {
    //       id,
    //       name,
    //       profile_path,
    //     };
    //         // console.log(actor);
    //         // console.log(actorsArr);
    //     return actorsArr.push(actor);
    //   });
    //     // console.log(actorsArr);
    //     // console.log(actors);
    //   setActors(actorsArr);
    // });
  }, [movieId ]);
 
    // const { cast } = actors;
    
    return (
        <>
            <h2>Cast</h2>
            {/* <ul>
            {actors.map((id, profile_path, name) => {
                <li key={id}>
              <div>
                <img
                  src={
                    profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : "No image"
                  }
                  alt={name}
                />
              </div>
              <p>{name}</p>
            </li>
            })}
                </ul> */}
            
            <CastList actors={actors} />;
            </>
    );
}