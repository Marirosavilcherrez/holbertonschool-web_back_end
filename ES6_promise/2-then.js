/* Append three handles to the function */

export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      const newObject = {
        status: 200,
        body: 'success',
      }
      resolve(newObject);
    } else {
      reject(new Error());
    }
  });
}

handleResponseFromAPI(true)
.then(() => {
    console.log('Got a response from the API');
})
.catch(() => {
    console.error('Got a response from the API');
});
