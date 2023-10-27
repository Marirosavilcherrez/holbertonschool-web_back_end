/* Function that return an array of ids from a list of object */

export default function getListStudentIds(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  const ids = getListStudents.map((student) => student.id); // find id
  return ids;
}
