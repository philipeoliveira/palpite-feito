/**
 * @description Faz a contagem dos números que vêm antes e depois da metade dos números da aposta.
 * @param {string} totalNumbersAvailable String -> Total de números disponíveis para a aposta.
 * @param {string[]} selectedNumbers Array de string -> Array com os números selecionados para a aposta.
 * @return {string} String -> Texto contendo a quantidade de números de antes e depois do meio da aposta.
 * @example
 * // Suponha que o total de números disponíveis são 80 e
 * // os números selecionados da aposta forem: 01, 25, 56, 66, 79.
 * console.log(countHalfBet("80", ["01", "25", "56", "66", "79"]));
 * // Resultado esperado: 2 antes e 3 depois do nº 40
 */

export function countHalfBet(
   totalNumbersAvailable: string,
   selectedNumbers: string[]
): string {
   let countBeforeHalf = 0;
   let countAfterHalf = 0;
   const halfNumbersAvailable = Math.floor(parseInt(totalNumbersAvailable) / 2);

   selectedNumbers.map((selectedNumber) => {
      if (+selectedNumber <= halfNumbersAvailable) {
         countBeforeHalf++;
      } else {
         countAfterHalf++;
      }
   });

   return `
      ${countBeforeHalf} até o nº ${halfNumbersAvailable} e ${countAfterHalf} depois 
   `;
}
