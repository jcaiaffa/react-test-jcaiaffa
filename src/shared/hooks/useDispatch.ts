import { useDispatch as useReduxDispatch } from 'react-redux';
import { AppDispatch } from '../../store';

/*
  For more info, check:
  https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
*/
const useDispatch = () => {
  return useReduxDispatch<AppDispatch>();
};

export default useDispatch;