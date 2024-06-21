/**
 * @description Separa em grupos os números disponíveis da aposta e conta quantos há em cada grupo.
 * @param {string} totalNumbersAvailable String -> Total de números disponíveis para a aposta.
 * @param {string[]} selectedNumbers Array de string -> Array com os números selecionados para a aposta.
 * @param {number} numberOfColumns Number -> Número de colunas (limite de números para cada grupo).
 * @return {string} String -> Texto contendo a quantidade de números em cada grupo da aposta.
 * @example
 * // Suponha que o total de números disponíveis vai de 1 a 25.
 * // E o total de grupos é igual a 5, com 5 números cada grupo
 * console.log(countSelectedIntoGroups("25",
 *  ["01", "04", "05", "06", "08", "09", "11", "13", "14", "15", "16", "18", "21", "22", "23"],
 *  5
 * ));
 * // Resultado esperado: 3-3-4-2-3 no volante
 */

import { generateAvailableNumbersForBet } from './generateAvailableNumbersForBet';
import sortNumbersAscending from './sortNumbersAscending';

export function countSelectedIntoGroups(
   totalNumbersAvailable: string,
   selectedNumbers: string[],
   numberOfColumns: number
): string {
   const numbersAvailable = generateAvailableNumbersForBet(totalNumbersAvailable);
   const selectedIntoGroups = [];

   for (let i = 0; i < +numbersAvailable.length; i += numberOfColumns) {
      const numbersPerGroup = numbersAvailable.slice(i, i + numberOfColumns);
      let selectedPerGroup = 0;

      for (const num of numbersPerGroup) {
         if (sortNumbersAscending(selectedNumbers).includes(num)) {
            selectedPerGroup++;
         }
      }

      selectedIntoGroups.push(selectedPerGroup);
   }

   return `${selectedIntoGroups.join('-')} no volante`;
}
