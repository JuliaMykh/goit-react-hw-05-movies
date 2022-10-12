import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { SearchBarBox, Input, Button, InputBox } from './SearchBar.styled';

export const SearchBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

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
          <Input
            type="text"
            name='query'
            defaultValue={searchParams.get('query')}
          />
          <Button type='submit'>Search </Button>
          </InputBox>
      </form>
      </SearchBarBox>
  );
}



