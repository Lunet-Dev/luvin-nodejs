import fetch from 'isomorphic-unfetch';

import Authendication from './authendication';

async function parseJSON(response) {
  const data = await response.json();
  if (response.status >= 400) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
}

export default function request(path, options = {}) {
  const url = `${process.env.REACT_APP_API_ENDPOINT}${path}`;
  return (
    fetch(url, {
      headers: options.headers
        ? {
            authorization: Authendication.getToken(),
            ...options.headers,
          }
        : {
            authorization: Authendication.getToken(),
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
      ...options,
    })
      // .then(checkStatus)
      .then(parseJSON)
  );
}
