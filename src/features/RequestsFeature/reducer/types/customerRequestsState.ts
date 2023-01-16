import { ICustomerRequest } from '../../../../models/ICustomerRequest';


export type CustomerRequestsState = {
    isLoading: boolean;
    alert: string;
    /** Данные карточки. */
    userRequests: ICustomerRequest[];
};

