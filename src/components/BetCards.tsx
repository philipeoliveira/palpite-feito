import { useContext } from 'react';

import { Card } from './Card';

import { getSingularOrPluralWord } from '../utils/getSingularOrPluralWord';
import { countEvenAndOdd } from '../utils/countEvenAndOdd';
import { countPrimeNumbers } from '../utils/countPrimeNumbers';
import { countHalfBet } from '../utils/countHalfBet';
import { countSelectedFibonacci } from '../utils/countSelectedFibonacci';
import { countMultiplesOfThree } from '../utils/countMultiplesOfThree';

import { ModalityContext } from '../contexts/ModalityContext';
import { BetContext } from '../contexts/BetContext';

export function BetCards() {
   const { selectedModality } = useContext(ModalityContext);
   const { totalNumbersAvailable, countHalf } = selectedModality;

   const { selectedNumbers } = useContext(BetContext);

   return (
      <ul id='bet-cards'>
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
         <Card>{countSelectedFibonacci(totalNumbersAvailable, selectedNumbers)}</Card>
      </ul>
   );
}
