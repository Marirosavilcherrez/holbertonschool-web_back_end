/* Return a promise, the paramter is a boolean */

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const newObject = {
        status: 200,
        body: 'Success',
      };
      resolve(newObject);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
