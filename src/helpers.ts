export function capetalize(str: string) {
    const removeHyphen = str.replace(/-/g, ' ');
    const splitToArray = removeHyphen.split(' ');
  
    return splitToArray
      .map((res) => res.charAt(0).toUpperCase() + res.slice(1))
      .join(' ');
  }
  
  export function cutAddress(str: string) {
    const addressRaw = str.split(',');
    return addressRaw.slice(-addressRaw.length, -3);
  }

  export function getExcerpt(str: string) {
    return str.split(' ').slice(0, 34).join(' ');
  }

  export function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

