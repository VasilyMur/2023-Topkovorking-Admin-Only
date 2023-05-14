export type ISpaceLocation = {
    type?: string;
    lat?: string;
    lng?: string;
    address: string
}

export type ISpaceOffer = {
    title: string; 
    price: string; 
    type: string; 
    uid: number;
}

export type ISpaceAdminDetails = {
    _id: string; 
    email: string; 
}

export type ISpaceSchedule = {
    monday: {
        open?: number,
        close?: number,
    },
    tuesday: {
        open?: number,
        close?: number,
    },
    wednesday: {
        open?: number,
        close?: number,
    },
    thursday: {
        open?: number,
        close?: number,
    },
    friday: {
        open?: number,
        close?: number,
    },
    saturday: {
        open?: number,
        close?: number,
    },
    sunday: {
        open?: number,
        close?: number,
    },
}

export type ISpaceSubway = {
    // eslint-disable-next-line camelcase
    hex_color?: string,
    id?: string,
    lineName?: string,
    name?: string,
    lat?: string,
    lng?: string,
}

export interface ISpace {
    _id: string,
    slug: string,
    url: string,
    name: string,
    type: string,
    city: string,
    beautyTypes: string[],
    subwaySlug: null | string,
    admin: null | string,
    adminDetails: null | ISpaceAdminDetails,
    publishStatus: string,
    created?: number,
    description?: string,
    country: string,
    priceDay?: string,
    tags: string[],
    phone: { code?: string, number?: string },
    gallery?: { order: number, image: string, id: string }[],
    offers: ISpaceOffer[],
    location: ISpaceLocation,
    actions?: { 
        actionHighlight?: { expires: number }, 
        actionLandTop?: {expires: number}, 
        actionSideTop?: {expires: number}
    },
    subway: ISpaceSubway,
    schedule: ISpaceSchedule,
    // Images
    imgTitle: {
        url?: string,
        fileName?: string,
        fileId?: string
      },
    imgMain: {
        url?: string,
        fileName?: string,
        fileId?: string
      },
}


export type SpaceType = ISpace;