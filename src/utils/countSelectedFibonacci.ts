/**
 * @description Verifica a quantidade de números da sequência de Fibonacci que foram selecionados na aposta.
 * @param {string} totalNumbersAvailable String -> Total de números disponíveis para a aposta.
 * @param {string[]} selectedNumbers Array de string -> Array com os números selecionados para a aposta.
 * @return {string} String -> Quantidade de números selecionados e os possíveis da sequência de Fibonacci na aposta.
 * @example
 * // Suponha que o total de números disponíveis são 80 e
 * // os números selecionados da aposta forem: 01, 25, 56, 66, 79.
 * console.log(countSelectedFibonacci("80", ["01", "25", "56", "66", "79"]));
 * // Resultado esperado: 1/ 9 da sequência de Fibonacci
 */

import { addNumberZero } from './addNumberZero';

export function countSelectedFibonacci(
   totalNumbersAvailable: string,
   selectedNumbers: string[]
): string {
   const availableFibonacci = getAvailableFibonacci(totalNumbersAvailable);

   const availableAndUniqueFibonacci = new Set(availableFibonacci);
   const selectedFromTheBet = new Set(selectedNumbers);
   const intersection = new Set(
      [...availableAndUniqueFibonacci].filter((numString) =>
         selectedFromTheBet.has(numString)
      )
   );

   const selectedFibonacci = Array.from(intersection);

   return `
      ${selectedFibonacci.length}/
      ${availableAndUniqueFibonacci.size} da sequência de Fibonacci`;
}

/** --------------------------------------------------------------------------- */

/**
 * @description Obtém os números da sequência de Fibonacci que estão disponíveis para aposta .
 * @param {string} totalNumbersAvailable String -> Total de números disponíveis para a aposta.
 * @return {string[]} Array de string -> Sequência de números disponíveis da sequência de Fibonacci.
 * @example
 * // Se o número 80 for recebido como argumento da função:
 * const available = getAvailableFibonacci("80");
 * console.log(available);
 * // Resultado esperado: ["1","2","3","5","8","13","21","34","55"]
 */

export function getAvailableFibonacci(totalNumbersAvailable: string): string[] {
   const availableFibonacci = ['01', '01'];
   let numFibonacci;

   for (let i = 1; i <= +totalNumbersAvailable; i++) {
      numFibonacci =
         parseInt(availableFibonacci[i]) + parseInt(availableFibonacci[i - 1]);
      if (numFibonacci <= +totalNumbersAvailable) {
         availableFibonacci.push(addNumberZero(numFibonacci.toString()));
      } else {
         break;
      }
   }

   return availableFibonacci;
}
