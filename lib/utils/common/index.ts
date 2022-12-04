export const objToArray = (obj: any): any[] => {
  const keys = Object.keys(obj);
  const array = keys.map((k) => obj[k]);
  return array;
};

//Ref: https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
