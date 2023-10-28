/* Function that return a string of all set values */

export default function cleanSet(inputSet, startString) {
  // Ensure startString is a string; if not, return an empty string
  if (typeof startString !== 'string') {
    return '';
  }
  // Initialize an empty array to store filtered values
  const filteredValues = [];
  // Iterate through each element in the set
  for (const item of inputSet) {
    if (typeof item === 'string' && item.startsWith(startString) && item !== '') {
      filteredValues.push(item.slice(startString.length));
    }
  }
  // Join the filtered values into a single string separated by '-'
  const resultString = filteredValues.join('-');
  return resultString;
}
