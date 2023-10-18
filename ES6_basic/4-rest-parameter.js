/* Modify to return the number of arguments passed */

export default function returnHowManyArguments(...theArgs) {
  const numberArgs = theArgs;
  return numberArgs.length;
}
