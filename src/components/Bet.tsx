import { useState, useEffect } from 'react';

import { generateAvailableNumbersForBet } from '../utils/generateAvailableNumbersForBet';
import { generateBet } from '../utils/generateBet';
import sortNumbersAscending from '../utils/sortNumbersAscending';
import { isSelectedNumberPlural } from '../utils/isSelectedNumberPlural';

export function Bet() {
   const [randonBet, setRandonBet] = useState<string[]>([]);
   const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);

   useEffect(() => {
      const generatedBet = generateBet('15', '25');
      setRandonBet(generatedBet);
      setSelectedNumbers(generatedBet);
   }, []);

   function handleSelectedNumber(e: React.ChangeEvent<HTMLInputElement>) {
      const selectedNumber = e.target.name;

      if (e.target.checked) {
         selectedNumbers.length < 15
            ? setSelectedNumbers((prevState) => [...prevState, selectedNumber])
            : alert('O limite de números para esta aposta foi atingido.');
      } else {
         setSelectedNumbers((prevState) => {
            return [
               ...prevState.filter((numString) => numString !== selectedNumber),
            ];
         });
      }
   }

   return (
      <section>
         <form id='bet-form'>
            {generateAvailableNumbersForBet('25').map((numString) => (
               <label
                  key={numString}
                  className={
                     selectedNumbers.includes(numString) ? 'checked' : ''
                  }
               >
                  <input
                     type='checkbox'
                     name={`${numString}`}
                     id={`number-${numString}`}
                     onChange={handleSelectedNumber}
                     checked={
                        selectedNumbers.includes(numString) ? true : false
                     }
                  />
                  {numString}
               </label>
            ))}
         </form>

         <div>{isSelectedNumberPlural(selectedNumbers.length)}</div>

         <h2>Números sorteados aleatoriamente crescente:</h2>
         <div>
            {randonBet.map((numString) => (
               <span key={numString}>{`${numString} `}</span>
            ))}
         </div>

         <h2>Números na ordem escolhida:</h2>
         <div>
            {selectedNumbers.map((numString) => (
               <span key={numString}>{`${numString} `}</span>
            ))}
         </div>

         <h2>Números na ordem crescente:</h2>
         <div>
            {sortNumbersAscending(selectedNumbers).map((numString) => (
               <span key={numString}>{`${numString} `}</span>
            ))}
         </div>
      </section>
   );
}
