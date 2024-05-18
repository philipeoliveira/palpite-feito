export function compareNumbers(num1: string, num2: string): number {
   return parseInt(num1) - parseInt(num2);
}

export default function sortNumbersAscending(
   originalArray: string[]
): string[] {
   const sortedArray = [...originalArray].sort(compareNumbers);

   return sortedArray;
}
