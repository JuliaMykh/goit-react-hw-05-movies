export const ReviewsList = ({ reviews  }) => {

    return (
        <ul>
            {reviews.results.map(({id, author, content}) => {
                return (
                   
                    <li key={id} >
                        <h2>{author}</h2>
                        <p>{content}</p>
                    </li>
                )
            })}
        </ul>
    );
};

