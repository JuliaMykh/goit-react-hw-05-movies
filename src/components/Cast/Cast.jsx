import PropTypes from 'prop-types';

import { CastLst, CastItem, CastImg, CastName, CastSpan } from './Cast.styled';

export const CastList = ({ actors }) => {
  return (
     
      <CastLst>
        {actors.cast.map(({ id, name, profile_path, character }) => {
          return (
            <CastItem key={id}>
                <CastImg
                  src={
                    profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : "No image"
                  }
                  alt={character}
                />
              <CastName>Name : <CastSpan>{name ? name : "No name"}</CastSpan></CastName>
               <CastName>Character: <CastSpan>{character}</CastSpan></CastName>
            </CastItem>
          );
        })}
      </CastLst>
  );
}

CastList.propTypes = {
  actors: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    profile_path: PropTypes.string,
    character: PropTypes.string,
  })
};

