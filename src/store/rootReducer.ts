import { combineReducers } from 'redux';
import AuthReducer from '../features/LoginFeature/reducer';
import AdminReducer from '../features/AdminFeature/reducer';
import EditReducer from '../features/EditFeature/reducer';
import RegisterReducer from '../features/RegisterFeature/reducer';
import CustomerRequestsReducer from '../features/RequestsFeature/reducer';
import DraftReducer from '../features/DraftFeature/reducer';
import UsersReducer from '../features/UsersFeature/reducer';

// Root reducer creation func.
export const createRootReducer = () => {
    const rootReducer = combineReducers({
        auth: AuthReducer,
        admin: AdminReducer,
        edit: EditReducer,
        register: RegisterReducer,
        customerRequests: CustomerRequestsReducer,
        draft:  DraftReducer,
        users: UsersReducer
    });

    return rootReducer;
}