/**
 * @description Cria uma sequência numérica com todos os números disponíveis do jogo para a aposta.
 * @param {number} totalNumbersAvailable Number com total de números disponíveis do jogo.
 * @return {number[]} Array de number com sequência numérica de 1 ao total de números disponíveis do jogo.
 * @example
 * // Suponha que o total de números disponíveis seja 5.
 * const availableNumbers = CreateNumbersAvailableForBets(5);
 * console.log(availableNumbers);
 * // Resultado esperado: [1, 2, 3, 4, 5]
 */

export const CreateNumbersAvailableForBets = (
   totalNumbersAvailable: number
): number[] => {
   const availableNumbers: number[] = [];

   for (let i = 1; i <= totalNumbersAvailable; i++) {
      availableNumbers.push(i);
   }

   return availableNumbers;
};
