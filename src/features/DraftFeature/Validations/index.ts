import { ISpace } from '../../../models/ISpace';

/**
 * Валидация полей SpaceInfoChunk.
 */
 export function ValidateSpaceInfo(space: ISpace) {
    const errors = {
        name: '',
        url: '',
        type: '',
        city: '',
        phone: {
          code: '',
          number: ''
        },
        location: {
          address: '',
          lng: '',
          lat: ''
        }
      }
    
      if (!space.name) {
        errors.name = 'Введите название'
      }
      if (!space.url) {
        errors.url = 'Введите адрес сайта'
      }
      if (!space.type) {
        errors.type = 'Укажите тип пространства'
      }
      if (!space.city) {
        errors.city = 'Укажите город'
      }
      if (!space.phone?.code) {
        errors.phone.code= 'Введите код телефона'
      }
      if (!space.phone?.number) {
        errors.phone.number= 'Введите номер телефона'
      }
      if (!space.location.address) {
        errors.location.address = 'Введите адрес'
      }
      if (!space.location.lng) {
        errors.location.lng = 'Укажите координаты'
      }
      if (!space.location.lat) {
        errors.location.lat = 'Укажите координаты'
      }
      
 const hasErrors = Object.values(errors).some(v => {
  if (v instanceof Object) {
    return Object.values(v).some(nv => !!nv);
  } 
  return !!v
  
 });

 return { hasErrors, errors };
}

/**
 * Валидация адреса.
 */
 export function ValidateAddressInfo(space: ISpace) {
    const errors = {
        location: {
          address: '',
          lng: '',
          lat: ''
        }
      }
    
      if (!space.location.address) {
        errors.location.address = 'Введите адрес'
      }
      if (!space.location.lng) {
        errors.location.lng = 'Укажите координаты'
      }
      if (!space.location.lat) {
        errors.location.lat = 'Укажите координаты'
      }
      
    const hasErrors = Object.values(errors).some(v => {
      if (v instanceof Object) {
        return Object.values(v).some(nv => !!nv);
      } 
      return !!v
      
    });

    return { hasErrors, errors };
}

/**
 * Валидация описания.
 */
 export function ValidateDescriptionInfo(space: ISpace) {
    const errors = {
        description: ''
      }
    
      if (!space.description) {
        errors.description = 'Введите описание пространства'
      }
      
    const hasErrors = Object.values(errors).some(v => !!v);

    return { hasErrors, errors };
}