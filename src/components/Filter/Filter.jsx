import { Input } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();
  return (
    <>
      <Input
        type="text"
        name="filter"
        onChange={({ target: { value } }) => dispatch(setFilter(value))}
        value={filter}
      />
    </>
  );
};
