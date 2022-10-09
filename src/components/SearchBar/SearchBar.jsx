import { useLocation, useNavigate } from 'react-router-dom';

export const SearchBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
function onSubmitForm(e) {
    e.preventDefault();
    const value = e.target.elements.query.value;

    navigate({
      ...location,
      search: `query=${value}`,
    });
  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type="text" name="query" />
        <button type="submit">
        Submit
        </button>
      </form>
    </div>
  );
}
    

