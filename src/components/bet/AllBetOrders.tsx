import { useContext } from 'react';

import { BetOrder } from './BetOrder';
import { BetContext } from '../../contexts/BetContext';
import sortNumbersAscending from '../../utils/sortNumbersAscending';

export function AllBetOrders() {
   const { selectedNumbers, randonBet } = useContext(BetContext);

   return (
      <div id='bet-orders' className='flex flex-col gap-3'>
         <BetOrder titleText='Sorteados aleatoriamente:'>
            {randonBet.map((numString) => (
               <span key={numString}>{numString}</span>
            ))}
         </BetOrder>
         <BetOrder titleText='Ordem escolhida:'>
            {selectedNumbers.map((numString) => (
               <span key={numString}>{numString}</span>
            ))}
         </BetOrder>
         <BetOrder titleText='Ordem crescente:'>
            {sortNumbersAscending(selectedNumbers).map((numString) => (
               <span key={numString}>{numString}</span>
            ))}
         </BetOrder>
      </div>
   );
}
