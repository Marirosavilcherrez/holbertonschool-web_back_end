/* Function return an array objects located in a specific city */

export default function getStudentsByLocation(getListStudents, city) {
  const filterStudent = getListStudents.filter((local) => local.location === city);
  return filterStudent;
}
