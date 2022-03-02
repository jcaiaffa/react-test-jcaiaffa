import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';
import { RootState } from '../../store';

/*
  For more info, check:
  https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
*/
const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default useSelector;