import PropTypes from 'prop-types';

import { ReviewTitle, ReviewText } from './Reviews.styled';

export const ReviewsList = ({ reviews }) => {

    return (
        <ul>
            {reviews.results.map(({id, author, content}) => {
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
    id: PropTypes.number,
    author: PropTypes.string,
    content: PropTypes.string,
};

