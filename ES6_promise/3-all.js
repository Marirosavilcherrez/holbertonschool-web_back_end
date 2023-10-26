/* Return when import uploadPhoto and createUser */

import { uploadPhoto, createUser } from "./utils.js";

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  const allPromises = [promise1, promise2]

  Promise.all(allPromises)
    .then(([result1, result2]) => {
      const bodyValue = result1.body;
      const nameFirst = result2.firstName;
      const nameLast = result2.lastName;
      console.log(`${bodyValue} ${nameFirst} ${nameLast}`);
    })
    .catch(() => {
      console.error('Signup system offline')
    })
