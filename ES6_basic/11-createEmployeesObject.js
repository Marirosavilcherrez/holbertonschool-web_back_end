/* Function that will recive 2 arguments */

export default function createEmployeesObject(departmentName, employees) {
  const departmentObject = {
    [departmentName]: employees,
  };
  return departmentObject;
}
