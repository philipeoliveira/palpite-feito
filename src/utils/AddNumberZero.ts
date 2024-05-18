export function AddNumberZero(number: number): string {
   let numberWithZero = '';

   if (number <= 9) {
      numberWithZero = '0' + number;
   }

   return numberWithZero;
}
