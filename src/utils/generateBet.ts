import { addNumberZero } from './addNumberZero';

/**
 * @description Gera aleatoriamente uma sequência de números referente a uma aposta.
 * @param {string} totalNumbersToGenerate  String -> Quantidade de números a serem gerados para a aposta.
 * @param {string} totalNumbersAvailable String -> Total de números disponíveis para apostar.
 * @return {string[]} Array de string -> Lista de números gerados aleatoriamente dentro do total disponível para apostar.
 * @example
 * // Se os números 5 e 10 forem recebidos, respectivamente:
 * const bet = generateBet("5", "10");
 * console.log(bet);
 * // Resultado esperado: ["03", "08", "07", "01", "10",]
 */

export function generateBet(
   totalNumbersToGenerate: string,
   totalNumbersAvailable: string
): string[] {
   const bet: string[] = [];
   const totalNumsToGenerate = +totalNumbersToGenerate;
   const totalNumsAvailable = +totalNumbersAvailable;

   if (totalNumsAvailable > totalNumsToGenerate) {
      while (bet.length < totalNumsToGenerate) {
         const randomNumber = Math.floor(Math.random() * totalNumsAvailable + 1);
         let randomNumString = addNumberZero(randomNumber.toString());

         // Lotomania
         if (randomNumString === '100') randomNumString = randomNumString.slice(-2);

         if (!bet.includes(randomNumString)) {
            bet.push(randomNumString);
         }
      }
   }

   return bet;
}
