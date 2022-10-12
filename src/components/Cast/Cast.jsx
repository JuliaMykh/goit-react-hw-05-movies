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
                    profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : "https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';"
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
  id: PropTypes.number,
  name: PropTypes.string,
  profile_path: PropTypes.string,
  character: PropTypes.string,
};

