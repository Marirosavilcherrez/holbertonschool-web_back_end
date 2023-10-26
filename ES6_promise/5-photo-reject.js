/* Function should return a Promise rejecting with an Error and string */

export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    if (filename) {
      reject(new Error(`${filename} cannot be processed`));
    } else {
      resolve('File found');
    }
  });
}
