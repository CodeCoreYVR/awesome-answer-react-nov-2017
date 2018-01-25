/* global fetch */
import {BASE_URL} from './config';
const API_KEY = '48d85a81d6d13d85ce3ba953c7f531c476280d22e828f099e860ff1ce804be57';

// HTTP REQUESTS

// export {Question}
// 👇 is like 👆
// You export any variable, function or class as you
// declare them.
export const Question = {
  all () {
    return fetch(
      `${BASE_URL}/api/v1/questions`,
      {
        headers: {
          'Authorization': API_KEY
        }
      }
    )
      .then(res => res.json())
  },
  get (id) {
    return fetch(
      `${BASE_URL}/api/v1/questions/${id}`,
      {
        headers: {
          'Authorization': API_KEY
        }
      }
    )
      .then(res => res.json())
  },
  create (params) {
    // params should be an object containing
    // attributes to create the question.
    // {title: 'Where are you?', body: 'Canada, US, UK, etc.'}
    return fetch(
      `${BASE_URL}/api/v1/questions`,
      {
        method: 'POST',
        headers: {
          'Authorization': API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    )
    .then(res => res.json());
  }
}
