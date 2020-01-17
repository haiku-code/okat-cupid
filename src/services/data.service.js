import {catsData, mockHTTPCall} from './mocks/mock.service';
import {createCat} from '../models/Cat';

// Mock HTTP request
export function fetchCats() {
  return mockHTTPCall(catsData)
    .then(data => data.map(d => createCat(d)));
}
