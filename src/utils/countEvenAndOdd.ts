/**
 * @description Faz a contagem de números pares e ímpares.
 * @param {string[]} selectedNumbers Array de string -> Array com os números que serão verificados como par ou ímpar.
 * @return {string} String -> Texto contendo a quantidade de números pares e ímpares.
 * @example
 * // Se os números 03, 05, 20, 32, 51 forem recebidos como argumento da função:
 * const evenAndOdd = countEvenAndOdd(["03", "05", "20", "32", "51"]);
 * console.log(evenAndOdd);
 * // Resultado esperado: 3 pares e 2 ímpares
 */

import { getSingularOrPluralWord } from './getSingularOrPluralWord';

export function countEvenAndOdd(selectedNumbers: string[]): string {
   let evenCount = 0;
   let oddCount = 0;

   for (const number of selectedNumbers) {
      if (+number % 2 === 0) {
         evenCount++;
      } else {
         oddCount++;
      }
   }

   return `
      ${evenCount}
      ${getSingularOrPluralWord(evenCount, 'par', 'pares')} e 
      ${oddCount}
      ${getSingularOrPluralWord(oddCount, 'ímpar', 'ímpares')}
   `;
}
