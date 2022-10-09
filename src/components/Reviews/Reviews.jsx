export const ReviewsList = ({ reviews  }) => {

    return (
        <ul>
            {reviews.map((id, author, text) => {
                return (
                    <li key={id} >
                        <h2>{author}</h2>
                        <p>{text}</p>
                    </li>
                )
            })}
        </ul>
    );
};

