import PropTypes from 'prop-types';

import { ReviewTitle, ReviewText } from './Reviews.styled';

export const ReviewsList = ({ results }) => {

    return (
        <ul>
            {results.map(({id, author, content}) => {
                return (
                   
                    <li key={id} >
                        <ReviewTitle>{author ? author : "No autor"}</ReviewTitle>
                        <ReviewText>{content}</ReviewText>
                    </li>
                )
            })}
        </ul>
    );
};

ReviewsList.propTypes = {
    results: PropTypes.arrayOf(
         PropTypes.shape({
          id: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
    })
        ),
};

