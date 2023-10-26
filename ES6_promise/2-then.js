/* Append three handles to the function */

export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      const response = {
        status: 200,
        body: 'success',
      };
      console.log('Got a response from the API');
      return response;
    })
    .catch(() => {
      console.error('Got a response from the API');
      return new Error();
    });
}
