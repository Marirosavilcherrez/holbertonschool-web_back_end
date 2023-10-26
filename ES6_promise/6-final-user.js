/* The function should call two function and return an array */

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // call the two functions and return promise
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([firstResult, secondResult]) => {
    // configure the arrays
      return [
        { status: 'fulfilled',
	  value: firstResult + secondResult}, // fulfilled: completado
      ];
    })
    .catch((error) => {
      return [{ status: 'rejected', value: error }];
    });
}
