// Avaliar o uso para Lotomania
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
      ${countBeforeHalf} antes e ${countAfterHalf} depois (metade até ${halfNumbersAvailable})
   `;
}
