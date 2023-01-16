import * as AuthActionCreators from '../features/LoginFeature/actionCreators';
import * as AdminActionCreators from '../features/AdminFeature/actionCreators';
import * as EditActionCreators from '../features/EditFeature/actionCreators';
import * as RegisterActionCreators from '../features/RegisterFeature/actionCreators';
import * as CustomerRequestsActionCreators from '../features/RequestsFeature/actionCreators';
import * as DraftActionCreators from '../features/DraftFeature/actionCreators';
import * as UsersActionCreators from '../features/UsersFeature/actionCreators';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    auth: { ...AuthActionCreators },
    admin: { ...AdminActionCreators },
    edit: { ...EditActionCreators },
    register: { ...RegisterActionCreators },
    customerRequests: { ...CustomerRequestsActionCreators },
    draft: { ...DraftActionCreators },
    users: { ...UsersActionCreators },
}