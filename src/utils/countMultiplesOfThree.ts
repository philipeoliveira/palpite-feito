/**
 * @description Faz a contagem de números múltiplos de 3.
 * @param {string[]} selectedNumbers Array de string -> Array com os números que serão verificados para a contagem.
 * @return {string} String -> Texto contendo a quantidade de números múltiplos de 3.
 * @example
 * // Se os números 03, 05, 21, 22, 25 forem recebidos como argumento da função:
 * const multiplesOfThree = countMultiplesOfThree(["03", "05", "21", "22", "25"]);
 * console.log(multiplesOfThree);
 * // Resultado esperado: 2 múltiplos de 3
 */

import { getSingularOrPluralWord } from './getSingularOrPluralWord';

export function countMultiplesOfThree(selectedNumbers: string[]): string {
   let count = 0;

   for (const numString of selectedNumbers) {
      if (isMultiplesOfThree(+numString)) {
         count++;
      }
   }

   return `
      ${count}
      ${getSingularOrPluralWord(count, 'múltiplo', 'múltiplos')} de 3
   `;
}

/** --------------------------------------------------------------------------- */

/**
 * @description Verifica se um número é múltiplo de 3.
 * @param {number} num Number -> Número que será verificado como múltiplo de 3.
 * @return {boolean} Boolean -> True para número  múltiplo de 3 e False se não for.
 * @example
 * // Se o número 6 for recebido como argumento da função:
 * const result = isMultiplesOfThree(6);
 * console.log(result);
 * // Resultado esperado: true
 */

function isMultiplesOfThree(num: number): boolean {
   if (num <= 2) return false;

   if (num % 3 === 0) return true;

   return false;
}
