/* Function that return the sum off all student ids */

export default function getStudentIdsSum(getListStudents) {
  const ids = getListStudents.map((student) => student.id);
  const sumTotal = ids.reduce((acumulador, number) => acumulador + number, 0);
  return sumTotal;
}
