import { ISpace } from '../../../../models/ISpace';

export type EditErrors = {
    name?: string,
    url?: string,
    type?: string,
    city?: string,
    phone?: {
        code?: string,
        number?: string
    },
    location?: {
        address?: string,
        lng?: string,
        lat?: string
      },
}

export type DraftState = {
    isLoading: boolean;
    alert: string;
    errors: EditErrors,
    /** Данные карточки. */
    space: ISpace;
};

