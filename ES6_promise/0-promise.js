/* Return a promise  */
export default function getResponseFromAPI(sucess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sucess) {
        resolve('Task completed');
      } else {
        reject(new Error('Task failed'));
      }
    }, 2000); // Simulated 2 seconds;
  });
}
