/**
 * @description Faz a contagem de números primos.
 * @param {string[]} selectedNumbers Array de string -> Array com os números que serão verificados para a contagem de primos.
 * @return {string} String -> Texto contendo a quantidade de números primos.
 * @example
 * // Se os números 03, 05, 20, 22, 25 forem recebidos como argumento da função:
 * const prime = countPrimeNumbers(["03", "05", "20", "22", "25"]);
 * console.log(prime);
 * // Resultado esperado: 2 primos
 */

import { getSingularOrPluralWord } from './getSingularOrPluralWord';

export function countPrimeNumbers(selectedNumbers: string[]): string {
   let count = 0;

   for (const numString of selectedNumbers) {
      if (isPrime(+numString)) {
         count++;
      }
   }

   return `
      ${count}
      ${getSingularOrPluralWord(count, 'primo', 'primos')}
   `;
}

/** --------------------------------------------------------------------------- */

/**
 * @description Verifica se um número é primo.
 * @param {number} num Number -> Número que será verificado como primo.
 * @return {boolean} Boolean -> True para número primo e False se não for primo.
 * @example
 * // Se o número 3 for recebido como argumento da função:
 * const result = isPrime(3);
 * console.log(result);
 * // Resultado esperado: true
 */

function isPrime(num: number): boolean {
   if (num <= 1) return false;

   for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
   }

   return true;
}
