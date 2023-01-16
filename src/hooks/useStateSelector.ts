import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from '../store';

/**
 * Типизированный хук получения глобального state. 
 */
const useStateSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useStateSelector;