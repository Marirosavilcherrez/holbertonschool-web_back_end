/* Function that will recive 2 arguments */

export default function createEmployeesObject(departmentName, employees) {
  const departamentObject = {
    [departmentName]: {
      employees,
    },
  };
  return departamentObject;
}
