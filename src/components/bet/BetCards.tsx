import { useContext } from 'react';

import { Card } from '../Card';

import { getSingularOrPluralWord } from '../../utils/getSingularOrPluralWord';
import { countEvenAndOdd } from '../../utils/countEvenAndOdd';
import { countPrimeNumbers } from '../../utils/countPrimeNumbers';
import { countMultiplesOfThree } from '../../utils/countMultiplesOfThree';
import { countHalfBet } from '../../utils/countHalfBet';
import { countSelectedIntoGroups } from '../../utils/countSelectedIntoGroups';
import { countSelectedFibonacci } from '../../utils/countSelectedFibonacci';

import { ModalityContext } from '../../contexts/ModalityContext';
import { BetContext } from '../../contexts/BetContext';

export function BetCards() {
   const { selectedModality } = useContext(ModalityContext);
   const { totalNumbersAvailable, numberOfColumns, countHalf, countIntoGroups } =
      selectedModality;

   const { selectedNumbers } = useContext(BetContext);

   return (
      <ul id='bet-cards' className='pt-2'>
         <Card>
            {`
               ${selectedNumbers.length}
               ${getSingularOrPluralWord(selectedNumbers.length, 'número', 'números')}
               ${getSingularOrPluralWord(
                  selectedNumbers.length,
                  'selecionado',
                  'selecionados'
               )}
            `}
         </Card>
         <Card>{countEvenAndOdd(selectedNumbers)}</Card>
         <Card>{countPrimeNumbers(selectedNumbers)}</Card>
         <Card>{countMultiplesOfThree(selectedNumbers)}</Card>
         {countHalf && (
            <Card>{countHalfBet(totalNumbersAvailable, selectedNumbers)}</Card>
         )}
         {countIntoGroups && (
            <Card>
               {countSelectedIntoGroups(
                  totalNumbersAvailable,
                  selectedNumbers,
                  numberOfColumns
               )}
            </Card>
         )}
         <Card>{countSelectedFibonacci(totalNumbersAvailable, selectedNumbers)}</Card>
      </ul>
   );
}
