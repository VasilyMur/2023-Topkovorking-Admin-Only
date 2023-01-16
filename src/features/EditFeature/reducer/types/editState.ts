import { ISpace } from '../../../../models/ISpace';
import { EDIT_FORM_STEPS } from '../../../../constants';

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
    description?: string
}

export type EditState = {
    isLoading: boolean;
    alert: string;
    step: EDIT_FORM_STEPS;
    errors: EditErrors,
    token?: string,
    uploadUrl?: string,
    /** Данные карточки. */
    space: ISpace;
};

