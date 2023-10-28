/* Function that return a newArray with Int8 */

export default function createInt8DataView(length, position, value) {
  // Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  // Create a new ArrayBuffer with the specified length
  // ArrayBuffer is a structure of data to contain binary
  const buffer = new ArrayBuffer(length);
  // Create a view of the ArrayBuffer using DataView
  // DataView make it posible to manipulate binary data in a ArrayBuffer
  const view = new DataView(buffer);
  // Set the Int8 value at the specified position
  view.setInt8(position, value);
  return view;
}
