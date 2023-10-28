/* Function that return a boolean if all elements exist */

export default function hasValuesFromArray(set, array) {
  for (const element of array) {
    if (!set.has(element)) {
      return false;
    }
  }
  return true;
}
