/* Function that return a string of all set values */

export default function cleanSet(inputSet, startString) {
  // Initialize an empty array to store filtered values
  const filteredValues = [];
  // Iterate through each element in the set
  for (const item of inputSet) {
  // Check if the item starts with the specified startString
    if (item.startsWith(startString) && startString !== '') {
    // If it does, push the part of the string after startString into the filteredValues array
      filteredValues.push(item.slice(startString.length));
    }
}
  // Join the filtered values into a single string separated by '-'
  const resultString = filteredValues.join('-');
  return resultString;
}
