import PropTypes from 'prop-types';

import { ReviewTitle } from './Reviews.styled';

export const ReviewsList = ({ reviews }) => {

    return (
        <ul>
            {reviews.results.map(({id, author, content}) => {
                return (
                   
                    <li key={id} >
                        <ReviewTitle>{author ? author : "No autor"}</ReviewTitle>
                        <p>{content}</p>
                    </li>
                )
            })}
        </ul>
    );
};

ReviewsList.propTypes = {
    reviews: PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string,
        content: PropTypes.string,
    })
};
