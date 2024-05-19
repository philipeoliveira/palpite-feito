import { addNumberZero } from './addNumberZero';

/**
 * @description Gera aleatoriamente uma sequência de números referente a uma aposta.
 * @param {string} numbersToGenerate  String -> Quantidade de números a serem gerados para a aposta.
 * @param {string} totalNumbersAvailable String -> Total de números disponíveis para apostar.
 * @return {string[]} Array de string -> Lista de números gerados aleatoriamente dentro do total disponível para apostar.
 * @example
 * // Se os números 5 e 10 forem recebidos, respectivamente:
 * const bet = generateBet("5", "10");
 * console.log(bet);
 * // Resultado esperado: ["03", "08", "07", "01", "10",]
 */

export function generateBet(
   numbersToGenerate: string,
   totalNumbersAvailable: string
): string[] {
   const bet: string[] = [];
   const chosenNums = +numbersToGenerate;
   const numsAvailable = +totalNumbersAvailable;

   if (numsAvailable > chosenNums) {
      while (bet.length < chosenNums) {
         const randomNumber = Math.floor(Math.random() * numsAvailable + 1);
         const randomNumString = addNumberZero(randomNumber.toString());

         if (!bet.includes(randomNumString)) {
            bet.push(randomNumString);
         }
      }
   }

   return bet;
}
