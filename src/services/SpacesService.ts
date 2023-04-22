import { AxiosResponse } from 'axios';
import api from '../api';
import { 
    URL_BASE, 
    URL_API_GET_USER_SPACES, 
    URL_API_GET_PAGINATED_SPACES, 
    URL_API_GET_FILTERED_USER_SPACES, 
    URL_API_GET_USER_SPACE, 
    URL_API_SAVE_USER_SPACE,
    URL_API_DELETE_USER_SPACE,
    URL_API_GET_CUSTOMER_REQUESTS,
    URL_API_GET_FILTERED_USER_SPACES_BY_EMAIL,
    URL_API_DELETE_CUSTOMER_REQUEST,
    URL_API_TOGGLE_SPACE_PUBLISH,
    URL_API_ASSIGN_SPACE_ADMIN_EMAIL,
    URL_API_DELETE_IMAGE,
    URL_API_GET_UPLOAD_IMAGE_URL,
    URL_API_UPDATE_SPACE_MAIN_IMAGE,
    URL_API_UPDATE_SPACE_TITLE_IMAGE
} from '../constants';
import { ISpace } from '../models/ISpace';
import { ICustomerRequest } from '../models/ICustomerRequest';

export default class SpacesService {
    static updateSpaceMainImage(url: string, fileName: string, fileId: string, spaceId: string): Promise<AxiosResponse<string>> {
        return api.post<string>(`${URL_BASE}${URL_API_UPDATE_SPACE_MAIN_IMAGE}`, { url, fileName, fileId, spaceId });
    }

    static updateSpaceTitleImage(url: string, fileName: string, fileId: string, spaceId: string): Promise<AxiosResponse<string>> {
        return api.post<string>(`${URL_BASE}${URL_API_UPDATE_SPACE_TITLE_IMAGE}`, { url, fileName, fileId, spaceId });
    }

    static deleteImage(fileName: string, fileId: string): Promise<AxiosResponse<string>> {
        return api.post<string>(`${URL_BASE}${URL_API_DELETE_IMAGE}`, { fileName, fileId });
    }

    static deleteUserSpace(id: string): Promise<AxiosResponse<string>> {
        return api.get<string>(`${URL_BASE}${URL_API_DELETE_USER_SPACE}/${id}`);
    }

    static toggleSpacePublishStatus(slug: string): Promise<AxiosResponse<ISpace>> {
        return api.get<ISpace>(`${URL_BASE}${URL_API_TOGGLE_SPACE_PUBLISH}/${slug}`);
    }

    static assignSpaceAdminEmail(slug: string, email: string): Promise<AxiosResponse<ISpace>> {
        return api.post<ISpace>(`${URL_BASE}${URL_API_ASSIGN_SPACE_ADMIN_EMAIL}`, {slug, email});
    }

    static fetchUserSpaces(): Promise<AxiosResponse<ISpace[]>> {
        return api.get<ISpace[]>(`${URL_BASE}${URL_API_GET_USER_SPACES}`);
    }

    static fetchFilteredUserSpacesByEmail(email: string): Promise<AxiosResponse<ISpace[]>> {
        return api.get<ISpace[]>(`${URL_BASE}${URL_API_GET_FILTERED_USER_SPACES_BY_EMAIL}/${email}`);
    }

    static fetchPaginatedSpaces(): Promise<AxiosResponse<ISpace[]>> {
        return api.get<ISpace[]>(`${URL_BASE}${URL_API_GET_PAGINATED_SPACES}`);
    }

    static fetchFilteredUserSpaces(pending: boolean | null, text: string | null): Promise<AxiosResponse<ISpace[]>> {
        return api.get<ISpace[]>(`${URL_BASE}${URL_API_GET_FILTERED_USER_SPACES}/${pending}/${text}`);
    }

    static fetchUserSpace(id: string): Promise<AxiosResponse<ISpace>> {
        return api.get<ISpace>(`${URL_BASE}${URL_API_GET_USER_SPACE}/${id}`);
    }

    static fetchUserSpaceCustomerRequests(): Promise<AxiosResponse<ICustomerRequest[]>> {
        return api.get<ICustomerRequest[]>(`${URL_BASE}${URL_API_GET_CUSTOMER_REQUESTS}`);
    }

    static deleteUserSpaceCustomerRequest(id: string): Promise<AxiosResponse> {
        return api.get<string>(`${URL_BASE}${URL_API_DELETE_CUSTOMER_REQUEST}/${id}`);
    }

    static saveUserSpace(space: ISpace): Promise<AxiosResponse<ISpace>> {
        return api.post<ISpace>(`${URL_BASE}${URL_API_SAVE_USER_SPACE}`, space);
    }

    // BACKBLAZE
    static getUploadImageUrl(): Promise<AxiosResponse> {
        return api.get<string>(`${URL_BASE}${URL_API_GET_UPLOAD_IMAGE_URL}`);
    }
}