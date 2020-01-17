import catsData from './cats.mock.data';

export {
  catsData,
  // add more mock data here
};

export function mockHTTPCall(mockData) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(mockData);
    }, 200);
  });
}

