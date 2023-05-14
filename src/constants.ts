export const URL_BASE = 
    process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/api'
    : 'https://offizz.ru/api';

export const URL_BASE_WEBSITE = 
    process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : 'https://offizz.ru';

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
export const SPACE_OFFER_TYPE_YEAR = 'year';

export const SPACE_OFFER_TYPES_MAPPED = {
    [SPACE_OFFER_TYPE_HOUR]: 'час',
    [SPACE_OFFER_TYPE_DAY]: 'день',
    [SPACE_OFFER_TYPE_WEEK]: 'неделя',
    [SPACE_OFFER_TYPE_MONTH]: 'месяц',
    [SPACE_OFFER_TYPE_YEAR]: 'год',
};

export const CITY_NAME_MOSCOW = 'moscow';
export const CITY_NAME_SPB = 'saint-petersburg';
export const CITY_NAME_EKB = 'ekaterinburg';
export const CITY_NAME_KAZAN = 'kazan';
// >>>
export const CITY_NAME_NIZHNIY = 'nizhniy';
export const CITY_NAME_DUBAI = 'dubai';


export const CITY_NAMES_OPTIONS_MAPPED = {
    [CITY_NAME_MOSCOW]: 'Москва',
    [CITY_NAME_SPB]: 'Санкт-Петербург',
    [CITY_NAME_EKB]: 'Екатеринбург',
    [CITY_NAME_KAZAN]: 'Казань',
    // >>>
    [CITY_NAME_NIZHNIY]: 'Нижний Новгород',
    [CITY_NAME_DUBAI]: 'Дубай',
};


// MAP CITY CENTER
export const MAP_CITY_CENTER = {
    [CITY_NAME_MOSCOW]: [55.75, 37.57],
    [CITY_NAME_SPB]: [59.932829, 30.3088679],
    [CITY_NAME_EKB]: [56.8354417, 60.6098564],
    [CITY_NAME_KAZAN]: [55.796127, 49.106414],
    // >>>
    [CITY_NAME_NIZHNIY]: [56.2921797, 43.926166],
    [CITY_NAME_DUBAI]: [25.076286, 55.142042],

}

export const COUNTRY_NAME_RUSSIA = 'russia';
export const COUNTRY_NAME_UAE = 'uae';
export const COUNTRY_NAME_ARMENIA = 'armenia';
export const COUNTRY_NAME_GEORGIA = 'georgia';

export const COUNTRY_NAMES_OPTIONS_MAPPED = {
    [COUNTRY_NAME_RUSSIA]: 'Россия',
    [COUNTRY_NAME_UAE]: 'ОАЭ',
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
    [CITY_NAME_DUBAI]: COUNTRY_NAME_UAE,
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

export const COUNTRY_CURRENCY_MAPPED = {
    [COUNTRY_NAME_RUSSIA]: '₽',
    [COUNTRY_NAME_UAE]: 'AED',
    [COUNTRY_NAME_ARMENIA]: 'AMD',
    [COUNTRY_NAME_GEORGIA]: 'Лари',
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

export const BEAUTY_TYPE_BROVIST = 'brovist';
export const BEAUTY_TYPE_VIZAZHIST = 'vizazhist';
export const BEAUTY_TYPE_BARBER = 'barber';
export const BEAUTY_TYPE_KOSMETOLOG = 'kosmetolog';
export const BEAUTY_TYPE_MASSAGE = 'massage';
export const BEAUTY_TYPE_MANIKUR = 'manikur';
export const BEAUTY_TYPE_PEDICURE = 'pedicure';
export const BEAUTY_TYPE_PARIKMAHER = 'parikmakher';

export const BEAUTY_TYPES = {
    [BEAUTY_TYPE_BROVIST]: 'Бровист',
    [BEAUTY_TYPE_VIZAZHIST]: 'Визажист',
    [BEAUTY_TYPE_BARBER]: 'Барбер',
    [BEAUTY_TYPE_KOSMETOLOG]: 'Косметолог',
    [BEAUTY_TYPE_MASSAGE]: 'Массажист',
    [BEAUTY_TYPE_MANIKUR]: 'Мастер маникюра',
    [BEAUTY_TYPE_PEDICURE]: 'Мастер педикюра',
    [BEAUTY_TYPE_PARIKMAHER]: 'Парикмахер', 
}


