/* Append three handles to the function */

export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      const newObject = {
        status: 200,
        body: 'success',
      }
      resolve(newObject);
      console.log('Got a response from the API');
    } else {
      reject(new Error());
      console.error('Got a response from the API');
    }
  });
}
