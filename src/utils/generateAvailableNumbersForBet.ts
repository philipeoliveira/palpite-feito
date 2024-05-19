import { addNumberZero } from './addNumberZero';

/**
 * @description Gera uma sequência numérica com todos os números disponíveis do jogo para a aposta.
 * @param {string} totalNumbersAvailable String -> Total de números disponíveis do jogo.
 * @return {string[]} Array de string -> Lista completa de números de 1 ao total de números disponíveis do jogo.
 * @example
 * // Suponha que o total de números disponíveis seja 5.
 * const availableNumbers = generateAvailableNumbersForBets("05");
 * console.log(availableNumbers);
 * // Resultado esperado: ["01", "02", "03", "04", "05"]
 */

export function generateAvailableNumbersForBet(
   totalNumbersAvailable: string
): string[] {
   const availableNumbers: string[] = [];

   for (let i = 1; i <= +totalNumbersAvailable; i++) {
      const numString = i.toString();
      availableNumbers.push(addNumberZero(numString));
   }

   return availableNumbers;
}
