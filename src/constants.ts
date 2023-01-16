export const URL_BASE = 
    process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/api'
    : 'https://topkovorking-2023-admin.herokuapp.com/api';

export const URL_BASE_WEBSITE = 
    process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : 'https://topkovorking-2023-admin.herokuapp.com';

export const PATH_TO_IMAGE_URL =  `https://files.cloudimages.ru/file/topkovorking`;

// API
export const URL_API_LOGIN = '/login';
export const URL_API_LOGOUT = '/logout';
export const URL_API_REGISTER = '/register';
export const URL_API_REFRESH = '/refresh';
export const URL_API_ACTIVATE = '/activate';

// API GET
export const URL_API_GET_USERS = '/getUsers';
export const URL_API_DELETE_USER = '/deleteUser';
export const URL_API_ACTIVATE_USER = '/activateUser';
export const URL_API_TOGGLE_CAN_CREATE_USER = '/toggleCanCreate';
export const URL_API_GET_USER_SPACES = '/getUserSpaces';
export const URL_API_GET_PAGINATED_SPACES = '/getPaginatedSpaces';
export const URL_API_GET_CITY_PLACEMARKS = '/getCityPlacemarks';
export const URL_API_GET_USER_SPACE = '/getUserSpace';
export const URL_API_GET_FILTERED_USER_SPACES = '/getFilteredUserSpaces';
export const URL_API_GET_FILTERED_USER_SPACES_BY_EMAIL = '/getFilteredUserSpacesByEmail';
export const URL_API_DELETE_USER_SPACE = '/deleteUserSpace';
export const URL_API_GET_SINGLE_SPACE = '/getSingleSpace';
export const URL_API_CREATE_CUSTOMER_REQUEST = '/createCustomerRequest';
export const URL_API_GET_CUSTOMER_REQUESTS = '/getCustomerRequests';
export const URL_API_DELETE_CUSTOMER_REQUEST = '/deleteCustomerRequest';
export const URL_API_TOGGLE_SPACE_PUBLISH = '/toggleSpacePublish';
export const URL_API_ASSIGN_SPACE_ADMIN_EMAIL = '/assignSpaceAdminEmail';

// BACKBLAZE
export const URL_API_GET_UPLOAD_IMAGE_URL = '/getUploadImageUrl';
export const URL_API_DELETE_IMAGE = '/deleteImage';
export const URL_API_UPDATE_SPACE_MAIN_IMAGE = '/updateMainImage';
export const URL_API_UPDATE_SPACE_TITLE_IMAGE = '/updateTitleImage';
// export const URL_API_SEARCH_SPACE_NAME_LANDING = '/searchSpacesByName';

// API POST
export const URL_API_SAVE_USER_SPACE = '/saveUserSpace';

// PAGES
export const URL_PAGE_CREATE = '/create';
export const URL_PAGE_REQUESTS = '/requests';
export const URL_PAGE_USERS_LIST = '/usersList';
export const URL_PAGE_ADMIN = '/';
export const URL_PAGE_CREATE_DRAFT = '/createDraft';
export const URL_PAGE_SINGLE_KOVORKING = '/kovorkingi';
export const URL_PAGE_MAP = '/map';
export const URL_PAGE_TAGS = '/tags';


    // Company publish statuses
export const COMPANY_PUBLISH_STATUS_PENDING = 'pending';
export const COMPANY_PUBLISH_STATUS_COMPLETE = 'complete';

// export const URL_PAGE_MAIN = URL_PAGE_LOGIN;

// export const URL_ADMIN_MENU_KEYS = {
//     [URL_PAGE_ADMIN]: 'Основное',
//     [URL_PAGE_CREATE_DRAFT]: 'Добавить',
// }

export const SPACE_TYPE_COWORKING = 'coworking';
export const SPACE_TYPE_OFFICE = 'office';

export const SPACE_TYPES_OPTIONS_MAPPED = {
    [SPACE_TYPE_COWORKING]: 'Коворкинг',
    [SPACE_TYPE_OFFICE]: 'Офис',
}

export const SPACE_OFFER_TYPE_HOUR = 'hour';
export const SPACE_OFFER_TYPE_DAY = 'day';
export const SPACE_OFFER_TYPE_WEEK = 'week';
export const SPACE_OFFER_TYPE_MONTH = 'month';

export const SPACE_OFFER_TYPES_MAPPED = {
    [SPACE_OFFER_TYPE_HOUR]: 'час',
    [SPACE_OFFER_TYPE_DAY]: 'день',
    [SPACE_OFFER_TYPE_WEEK]: 'неделя',
    [SPACE_OFFER_TYPE_MONTH]: 'месяц',
};

export const CITY_NAME_MOSCOW = 'moscow';
export const CITY_NAME_SPB = 'saint-petersburg';
export const CITY_NAME_EKB = 'ekaterinburg';
export const CITY_NAME_KAZAN = 'kazan';
// >>>
export const CITY_NAME_NIZHNIY = 'nizhniy';


export const CITY_NAMES_OPTIONS_MAPPED = {
    [CITY_NAME_MOSCOW]: 'Москва',
    [CITY_NAME_SPB]: 'Санкт-Петербург',
    [CITY_NAME_EKB]: 'Екатеринбург',
    [CITY_NAME_KAZAN]: 'Казань',
    // >>>
    [CITY_NAME_NIZHNIY]: 'Нижний Новгород',
};


// MAP CITY CENTER
export const MAP_CITY_CENTER = {
    [CITY_NAME_MOSCOW]: [55.75, 37.57],
    [CITY_NAME_SPB]: [59.932829, 30.3088679],
    [CITY_NAME_EKB]: [56.8354417, 60.6098564],
    [CITY_NAME_KAZAN]: [55.796127, 49.106414],
    // >>>
    [CITY_NAME_NIZHNIY]: [56.2921797, 43.926166],

}

export const COUNTRY_NAME_RUSSIA = 'russia';
export const COUNTRY_NAME_UAE = 'uae';
export const COUNTRY_NAME_ARMENIA = 'armenia';
export const COUNTRY_NAME_GEORGIA = 'georgia';

export const COUNTRY_NAMES_OPTIONS_MAPPED = {
    [COUNTRY_NAME_RUSSIA]: 'Россия',
    // [COUNTRY_NAME_UAE]: 'ОАЭ',
    // [COUNTRY_NAME_ARMENIA]: 'Армения',
    // [COUNTRY_NAME_GEORGIA]: 'Грузия',
};

export const CITY_NAMES_MAPPED_TO_COUNTRY = {
    [CITY_NAME_MOSCOW]: COUNTRY_NAME_RUSSIA,
    [CITY_NAME_SPB]: COUNTRY_NAME_RUSSIA,
    [CITY_NAME_EKB]: COUNTRY_NAME_RUSSIA,
    [CITY_NAME_KAZAN]: COUNTRY_NAME_RUSSIA,
    // >>>
    [CITY_NAME_NIZHNIY]: COUNTRY_NAME_RUSSIA,
};

export const CITIES_WITH_SUBWAY = [
    CITY_NAME_SPB,
    CITY_NAME_EKB,
    CITY_NAME_KAZAN,
    CITY_NAME_MOSCOW,
    CITY_NAME_NIZHNIY
];

export const COUNTRY_PHONE_CODES_MAPPED = {
    [COUNTRY_NAME_RUSSIA]: '+7',
    [COUNTRY_NAME_UAE]: '+971',
    [COUNTRY_NAME_ARMENIA]: '+374',
    [COUNTRY_NAME_GEORGIA]: '+995',
}


// eslint-disable-next-line no-shadow
export enum EDIT_FORM_STEPS {
    Info = 0,
    Address = 1,
    Description = 2,
    Hours = 3,
    Offers = 4,
    Images = 5,
}

// Active TAGS
export const TAG_TWENTY_FOUR_HOURS = 'twentyfourhours';
export const TAG_MOSCOW_CIY = 'moscowcity';
export const TAG_CITY_CENTER = 'center';
export const TAG_BEAUTY = 'beauty';
// >>
export const TAG_STOLYARNIY = 'stolyarniy';
export const TAG_SEWING = 'sewing';

export const TAG_TITLES_ALL = {
  [TAG_TWENTY_FOUR_HOURS]: '24/7',
  [TAG_MOSCOW_CIY]: 'Москва Сити',
  [TAG_CITY_CENTER]: 'В центре',
  [TAG_BEAUTY]: 'Бьюти',
  // >>
  [TAG_STOLYARNIY]: 'Столярный',
  [TAG_SEWING]: 'Швейный',
};


export const WEEKDAYS_MAPPED = {
    monday: 'Понедельник',
    tuesday: 'Вторник',
    wednesday: 'Среда',
    thursday: 'Четверг',
    friday: 'Пятница',
    saturday: 'Суббота',
    sunday: 'Воскресение'
}

// SEO >>> HEADERS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const CITY_NAMES_MAPPED_TO_PAGE_HEADERS = {
    [CITY_NAME_MOSCOW]: {
        main: {
            h1: 'Коворкинги Москвы 2023 (фото + цены + тарифы)',
            introHeader: 'Коворкинги в Москве'
        },
        map: {
            h1: 'Коворкинги на карте Москвы',
            introHeader: 'Коворкинги в Москве на карте'
        },
        [TAG_TWENTY_FOUR_HOURS]: {
            h1: 'Круглосуточные коворкинги Москвы (фото и цены)',
            introHeader: 'Круглосуточные коворкинги в Москве'
        },
        [TAG_MOSCOW_CIY]: {
            h1: 'Коворкинги Москва Сити (фото и цены)',
            introHeader: 'Коворкинги в Москва Сити'
        },
        [TAG_CITY_CENTER]: {
            h1: 'Коворкинги в центре Москвы (фото и цены)',
            introHeader: 'Коворкинги в центре Москвы'
        },
        [TAG_BEAUTY]: {
            h1: 'Бьюти коворкинги Москвы (фото и цены)',
            introHeader: 'Бьюти коворкинги в Москве'
        },
        [TAG_STOLYARNIY]: {
            h1: 'Столярные коворкинги Москвы (фото и цены)',
            introHeader: 'Столярные коворкинги в Москве'
        },
        [TAG_SEWING]: {
            h1: 'Швейные коворкинги Москвы (фото и цены)',
            introHeader: 'Швейные коворкинги коворкинги в Москве'
        },

    },
    [CITY_NAME_SPB]: {
        main: {
            h1: 'Коворкинги Санкт-Петербурга 2023 (фото + цены + тарифы)',
            introHeader: 'Коворкинги в Санкт-Петербурге'
        },
        map: {
            h1: 'Коворкинги на карте Санкт-Петербурга',
            introHeader: 'Коворкинги в Санкт-Петербурге на карте'
        },
        [TAG_TWENTY_FOUR_HOURS]: {
            h1: 'Круглосуточные коворкинги Санкт-Петербурга (фото и цены)',
            introHeader: 'Круглосуточные коворкинги в Санкт-Петербурге'
        },
        [TAG_CITY_CENTER]: {
            h1: 'Коворкинги в центре Санкт-Петербурга (фото и цены)',
            introHeader: 'Коворкинги в центре Санкт-Петербурга'
        },
        [TAG_BEAUTY]: {
            h1: 'Бьюти коворкинги Санкт-Петербурга (фото и цены)',
            introHeader: 'Бьюти коворкинги в Санкт-Петербурге'
        },
        [TAG_STOLYARNIY]: {
            h1: 'Столярные коворкинги Санкт-Петербурга (фото и цены)',
            introHeader: 'Столярные коворкинги в Санкт-Петербурге'
        },
        [TAG_SEWING]: {
            h1: 'Швейные коворкинги Санкт-Петербурга (фото и цены)',
            introHeader: 'Швейные коворкинги коворкинги в Санкт-Петербурге'
        },
    },
    [CITY_NAME_EKB]: {
        main: {
            h1: 'Коворкинги Екатеринбурга 2023 (фото + цены + тарифы)',
            introHeader: 'Коворкинги в Екатеринбурге'
        },
        map: {
            h1: 'Коворкинги на карте Екатеринбурга',
            introHeader: 'Коворкинги в Екатеринбурге на карте'
        },
        [TAG_TWENTY_FOUR_HOURS]: {
            h1: 'Круглосуточные коворкинги Екатеринбурга (фото и цены)',
            introHeader: 'Круглосуточные коворкинги в Екатеринбурге'
        },
        [TAG_CITY_CENTER]: {
            h1: 'Коворкинги в центре Екатеринбурга (фото и цены)',
            introHeader: 'Коворкинги в центре Екатеринбурга'
        },
        [TAG_BEAUTY]: {
            h1: 'Бьюти коворкинги Екатеринбурга (фото и цены)',
            introHeader: 'Бьюти коворкинги в Екатеринбурге'
        },
        [TAG_STOLYARNIY]: {
            h1: 'Столярные коворкинги Екатеринбурга (фото и цены)',
            introHeader: 'Столярные коворкинги в Екатеринбурге'
        },
        [TAG_SEWING]: {
            h1: 'Швейные коворкинги Екатеринбурга (фото и цены)',
            introHeader: 'Швейные коворкинги коворкинги в Екатеринбурге'
        },
    },
    [CITY_NAME_KAZAN]: {
        main: {
            h1: 'Коворкинги Казани 2023 (фото + цены + тарифы)',
            introHeader: 'Коворкинги в Казани'
        },
        map: {
            h1: 'Коворкинги на карте Казани',
            introHeader: 'Коворкинги в Казани на карте'
        },
        [TAG_TWENTY_FOUR_HOURS]: {
            h1: 'Круглосуточные коворкинги Казани (фото и цены)',
            introHeader: 'Круглосуточные коворкинги в Казани'
        },
        [TAG_CITY_CENTER]: {
            h1: 'Коворкинги в центре Казани (фото и цены)',
            introHeader: 'Коворкинги в центре Казани'
        },
        [TAG_BEAUTY]: {
            h1: 'Бьюти коворкинги Казани (фото и цены)',
            introHeader: 'Бьюти коворкинги в Казани'
        },
        [TAG_STOLYARNIY]: {
            h1: 'Столярные коворкинги Казани (фото и цены)',
            introHeader: 'Столярные коворкинги в Казани'
        },
        [TAG_SEWING]: {
            h1: 'Швейные коворкинги Казани (фото и цены)',
            introHeader: 'Швейные коворкинги коворкинги в Казани'
        },
    },
    [CITY_NAME_NIZHNIY]: {
        main: {
            h1: 'Коворкинги Нижнего Новгорода 2023 (фото + цены + тарифы)',
            introHeader: 'Коворкинги в Нижнем Новгороде'
        },
        map: {
            h1: 'Коворкинги на карте Нижнего Новгорода',
            introHeader: 'Коворкинги в Нижнем Новгороде на карте'
        },
        [TAG_TWENTY_FOUR_HOURS]: {
            h1: 'Круглосуточные коворкинги Нижнего Новгорода (фото и цены)',
            introHeader: 'Круглосуточные коворкинги в Нижнем Новгороде'
        },
        [TAG_CITY_CENTER]: {
            h1: 'Коворкинги в центре Нижнего Новгорода (фото и цены)',
            introHeader: 'Коворкинги в центре Нижнего Новгорода'
        },
        [TAG_BEAUTY]: {
            h1: 'Бьюти коворкинги Нижнего Новгорода (фото и цены)',
            introHeader: 'Бьюти коворкинги в Нижнем Новгороде'
        },
        [TAG_STOLYARNIY]: {
            h1: 'Столярные коворкинги Нижнего Новгорода (фото и цены)',
            introHeader: 'Столярные коворкинги в Нижнем Новгороде'
        },
        [TAG_SEWING]: {
            h1: 'Швейные коворкинги Нижнего Новгорода (фото и цены)',
            introHeader: 'Швейные коворкинги коворкинги в Нижнем Новгороде'
        },
    },
    // [CITY_NAME_EREVAN]: {h1: 'Коворкинги Санкт-Петербурга 2023 (фото + цены + тарифы)'},
    // [CITY_NAME_TBILISI]: {h1: 'Коворкинги Санкт-Петербурга 2023 (фото + цены + тарифы)'},
};

// SEO >>> META >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const META_PAGE_TAGS = {
    // 1) Moscow >>>>>>>>>>>>
    [CITY_NAME_MOSCOW]: {
        [TAG_CITY_CENTER]: {
            title: 'Коворкинги в центре Москвы',
            description: 'Коворкинги в центре Москвы - адреса на карте, телефоны, метро, цены, расписание и фотографии',
            canonical: 'https://topkovorking.ru/tags/moscow/center'
        },
        [TAG_MOSCOW_CIY]: {
            title: 'Коворкинг в Москва Сити 2023 - список предложений с адресами и ценами',
            description: 'Коворкинг в Москва Сити. Каталог предложений от собственника - адреса на карте, телефоны, метро, цены, расписание и фотографии',
            canonical: 'https://topkovorking.ru/tags/moscow/moscowcity'
        },
        [TAG_TWENTY_FOUR_HOURS]: {
            title: 'Круглосуточные коворкинги Москвы 2023 (фото и цены)',
            description: 'Круглосуточный коворкинг в Москве. Каталог предложений от собственника - адреса, телефоны, метро, цены, расписание и фотографии. Расположение на карте',
            canonical: 'https://topkovorking.ru/tags/moscow/twentyfourhours'
        },
        [TAG_BEAUTY]: {
            title: 'Бьюти коворкинги Москвы 2023 (фото и цены)',
            description: 'Бьюти коворкинг Москва. Предложения от собственника - адреса, телефоны, метро, цены, расписание и фотографии. Расположение на карте',
            canonical: 'https://topkovorking.ru/tags/moscow/beauty'
        },
        [TAG_STOLYARNIY]: {
            title: 'Столярные коворкинги Москвы 2023 (фото и цены)',
            description: 'Столярный коворкинг в Москве. Каталог предложений от собственника - адреса, телефоны, метро, цены, расписание и фотографии',
            canonical: 'https://topkovorking.ru/tags/moscow/stolyarniy'
        },
        [TAG_SEWING]: {
            title: 'Швейные коворкинги Москвы 2023 (фото и цены)',
            description: 'Швейный коворкинг в Москве. Каталог предложений от собственника - адреса, телефоны, метро, цены, расписание и фотографии',
            canonical: 'https://topkovorking.ru/tags/moscow/sewing'
        }
    },
    // 2) SPB >>>>>>>>>>>>
    [CITY_NAME_SPB]: {
        [TAG_CITY_CENTER]: {
            title: 'Коворкинги в центре Санкт-Петербурга 2023',
            description: 'Коворкинги в центре Санкт-Петербурга - адреса на карте, телефоны, метро, цены, расписание и фотографии',
            canonical: 'https://topkovorking.ru/tags/saint-petersburg/center'
        },
        [TAG_TWENTY_FOUR_HOURS]: {
            title: 'Круглосуточные коворкинги Санкт-Петербурга (фото и цены)',
            description: 'Круглосуточный коворкинг в Санкт-Петербурге. Каталог предложений от собственника - адреса, телефоны, метро, цены, расписание и фотографии. Расположение на карте',
            canonical: 'https://topkovorking.ru/tags/saint-petersburg/twentyfourhours'
        },
        [TAG_BEAUTY]: {
            title: 'Бьюти коворкинги Санкт-Петербурга 2023 (фото и цены)',
            description: 'Бьюти коворкинг Санкт-Петербурга. Предложения от собственника - адреса, телефоны, метро, цены, расписание и фотографии. Расположение на карте',
            canonical: 'https://topkovorking.ru/tags/saint-petersburg/beauty'
        },
        [TAG_STOLYARNIY]: {
            title: 'Столярные коворкинги Санкт-Петербурга 2023 (фото и цены)',
            description: 'Столярный коворкинг в Санкт-Петербурге. Каталог предложений от собственника - адреса, телефоны, метро, цены, расписание и фотографии',
            canonical: 'https://topkovorking.ru/tags/saint-petersburg/stolyarniy'
        },
        [TAG_SEWING]: {
            title: 'Швейные коворкинги Санкт-Петербурга 2023 (фото и цены)',
            description: 'Швейный коворкинг в Санкт-Петербурге. Каталог предложений от собственника - адреса, телефоны, метро, цены, расписание и фотографии',
            canonical: 'https://topkovorking.ru/tags/saint-petersburg/sewing'
        }
    },

    // 3) Казань >>>>>>>>>>>>
    [CITY_NAME_KAZAN]: {
        [TAG_CITY_CENTER]: {
            title: 'Коворкинги в центре Казани 2023',
            description: 'Коворкинги в центре Казани - адреса на карте, телефоны, метро, цены, расписание и фотографии',
            canonical: 'https://topkovorking.ru/tags/kazan/center'
        },
        [TAG_TWENTY_FOUR_HOURS]: {
            title: 'Круглосуточные коворкинги Казани (фото и цены)',
            description: 'Круглосуточный коворкинг в Казани. Каталог предложений от собственника - адреса, телефоны, метро, цены, расписание и фотографии. Расположение на карте',
            canonical: 'https://topkovorking.ru/tags/kazan/twentyfourhours'
        },
        [TAG_BEAUTY]: {
            title: 'Бьюти коворкинги Казани 2023 (фото и цены)',
            description: 'Бьюти коворкинг Казани. Предложения от собственника - адреса, телефоны, метро, цены, расписание и фотографии. Расположение на карте',
            canonical: 'https://topkovorking.ru/tags/kazan/beauty'
        },
        [TAG_STOLYARNIY]: {
            title: 'Столярные коворкинги Казани а 2023 (фото и цены)',
            description: 'Столярный коворкинг в Казани. Каталог предложений от собственника - адреса, телефоны, метро, цены, расписание и фотографии',
            canonical: 'https://topkovorking.ru/tags/kazan/stolyarniy'
        },
        [TAG_SEWING]: {
            title: 'Швейные коворкинги Казани 2023 (фото и цены)',
            description: 'Швейный коворкинг в Казани. Каталог предложений от собственника - адреса, телефоны, метро, цены, расписание и фотографии',
            canonical: 'https://topkovorking.ru/tags/kazan/sewing'
        }
    },

    // 4) Екатеринбург >>>>>>>>>>>>
    [CITY_NAME_EKB]: {
        [TAG_CITY_CENTER]: {
            title: 'Коворкинги в центре Екатеринбурга 2023',
            description: 'Коворкинги в центре Екатеринбурга - адреса на карте, телефоны, метро, цены, расписание и фотографии',
            canonical: 'https://topkovorking.ru/tags/ekaterinburg/center'
        },
        [TAG_TWENTY_FOUR_HOURS]: {
            title: 'Круглосуточные коворкинги Екатеринбурга (фото и цены)',
            description: 'Круглосуточный коворкинг в Екатеринбурге. Каталог предложений от собственника - адреса, телефоны, метро, цены, расписание и фотографии. Расположение на карте',
            canonical: 'https://topkovorking.ru/tags/ekaterinburg/twentyfourhours'
        },
        [TAG_BEAUTY]: {
            title: 'Бьюти коворкинги Екатеринбурга 2023 (фото и цены)',
            description: 'Бьюти коворкинг в Екатеринбурге. Предложения от собственника - адреса, телефоны, метро, цены, расписание и фотографии. Расположение на карте',
            canonical: 'https://topkovorking.ru/tags/ekaterinburg/beauty'
        },
        [TAG_STOLYARNIY]: {
            title: 'Столярные коворкинги Екатеринбурга а 2023 (фото и цены)',
            description: 'Столярный коворкинг в Екатеринбурге. Каталог предложений от собственника - адреса, телефоны, метро, цены, расписание и фотографии',
            canonical: 'https://topkovorking.ru/tags/ekaterinburg/stolyarniy'
        },
        [TAG_SEWING]: {
            title: 'Швейные коворкинги Екатеринбурга 2023 (фото и цены)',
            description: 'Швейный коворкинг в Екатеринбурге. Каталог предложений от собственника - адреса, телефоны, метро, цены, расписание и фотографии',
            canonical: 'https://topkovorking.ru/tags/ekaterinburg/sewing'
        }
    },
    // 5) Нижний >>>>>>>>>>>>
    [CITY_NAME_NIZHNIY]: {
        [TAG_CITY_CENTER]: {
            title: 'Коворкинги в центре Нижнего Новгорода 2023',
            description: 'Коворкинги в центре Нижнего Новгорода - адреса на карте, телефоны, метро, цены, расписание и фотографии',
            canonical: 'https://topkovorking.ru/tags/nizhniy/center'
        },
        [TAG_TWENTY_FOUR_HOURS]: {
            title: 'Круглосуточные коворкинги Нижнего Новгорода (фото и цены)',
            description: 'Круглосуточный коворкинг в Нижнем Новгороде. Каталог предложений от собственника - адреса, телефоны, метро, цены, расписание и фотографии. Расположение на карте',
            canonical: 'https://topkovorking.ru/tags/nizhniy/twentyfourhours'
        },
        [TAG_BEAUTY]: {
            title: 'Бьюти коворкинги Нижнего Новгорода 2023 (фото и цены)',
            description: 'Бьюти коворкинг в Нижнем Новгороде. Предложения от собственника - адреса, телефоны, метро, цены, расписание и фотографии. Расположение на карте',
            canonical: 'https://topkovorking.ru/tags/nizhniy/beauty'
        },
        [TAG_STOLYARNIY]: {
            title: 'Столярные коворкинги Нижнего Новгорода а 2023 (фото и цены)',
            description: 'Столярный коворкинг в Нижнем Новгороде. Каталог предложений от собственника - адреса, телефоны, метро, цены, расписание и фотографии',
            canonical: 'https://topkovorking.ru/tags/nizhniy/stolyarniy'
        },
        [TAG_SEWING]: {
            title: 'Швейные коворкинги Нижнего Новгорода 2023 (фото и цены)',
            description: 'Швейный коворкинг в Нижнем Новгороде. Каталог предложений от собственника - адреса, телефоны, метро, цены, расписание и фотографии',
            canonical: 'https://topkovorking.ru/tags/nizhniy/sewing'
        }
    },
}

export const META_PAGE_CITY = {
    [CITY_NAME_SPB]: {
        title: 'Коворкинги Санкт-Петербурга 2023 (фото + цены)',
        description: 'Лучшие коворкинги Санкт-Петербурга - на карте города с указанием адреса, времени работы, контактами и ценами. Разбивка коворкингов по станциям метро',
        canonical: 'https://topkovorking.ru/city/saint-petersburg'
    },
    [CITY_NAME_EKB]: {
        title: 'Коворкинги Екатеринбурга 2023 (фото + цены)',
        description: 'Лучшие коворкинги Екатеринбурга - на карте города с указанием адреса, времени работы, контактами и ценами. Разбивка коворкингов по станциям метро',
        canonical: 'https://topkovorking.ru/city/ekaterinburg'
    },
    [CITY_NAME_KAZAN]: {
        title: 'Коворкинги Казани 2023 (фото + цены)',
        description: 'Лучшие коворкинги Казани - на карте города с указанием адреса, времени работы, контактами и ценами. Разбивка коворкингов по станциям метро',
        canonical: 'https://topkovorking.ru/city/kazan'
    },
    [CITY_NAME_NIZHNIY]: {
        title: 'Коворкинги Нижнего Новгорода 2023 (фото + цены)',
        description: 'Лучшие коворкинги в Нижнем Новгороде - на карте города с указанием адреса, времени работы, контактами и ценами. Разбивка коворкингов по станциям метро',
        canonical: 'https://topkovorking.ru/city/nizhniy'
    },
}

export const META_PAGE_MAP = {
    [CITY_NAME_MOSCOW]: {
        title: 'Коворкинги на карте Москвы',
        description: 'Коворкинги Москвы на карте города с указанием адреса, времени работы, контактами и ценами, карта',
        canonical: 'https://topkovorking.ru/map/moscow'
    },
    [CITY_NAME_SPB]: {
        title: 'Коворкинги на карте Санкт-Петербурга',
        description: 'Коворкинги Санкт-Петербурга на карте города с указанием адреса, времени работы, контактами и ценами, карта',
        canonical: 'https://topkovorking.ru/map/saint-petersburg'
    },
    [CITY_NAME_EKB]: {
        title: 'Коворкинги на карте Екатеринбурга',
        description: 'Коворкинги Екатеринбурга на карте города с указанием адреса, времени работы, контактами и ценами, карта',
        canonical: 'https://topkovorking.ru/map/ekaterinburg'
    },
    [CITY_NAME_KAZAN]: {
        title: 'Коворкинги на карте Казани',
        description: 'Коворкинги Казани на карте города с указанием адреса, времени работы, контактами и ценами, карта',
        canonical: 'https://topkovorking.ru/map/kazan'
    },
    [CITY_NAME_NIZHNIY]: {
        title: 'Коворкинги на карте Нижнего Новгорода',
        description: 'Коворкинги Нижнего Новгорода на карте города с указанием адреса, времени работы, контактами и ценами, карта',
        canonical: 'https://topkovorking.ru/map/nizhniy'
    },
}


