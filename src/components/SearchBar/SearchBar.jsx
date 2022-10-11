import { useLocation, useNavigate } from 'react-router-dom';

import { SearchBarBox, Input, Button, InputBox } from './SearchBar.styled';

export const SearchBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

function onSubmitForm(e) {
        e.preventDefault();
        const value = e.target.elements.query.value;
    //    console.log(value);
        navigate({
      ...location,
      search: `query=${value}`,
    });
  }

  return (
    <SearchBarBox>
      <form onSubmit={onSubmitForm}>
        <InputBox>
          <Input type="text" name='query' />
          <Button type='submit'>Submit</Button>
          </InputBox>
      </form>
      </SearchBarBox>
  );
}



