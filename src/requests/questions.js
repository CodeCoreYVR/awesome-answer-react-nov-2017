const API_KEY = '9991daed657df1762e244c71849bef716bf8fd817510c77d0657e2758b801ae8';
const BASE_URL = 'http://localhost:3000';

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
