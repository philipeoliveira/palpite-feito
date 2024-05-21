import { useState, useEffect } from 'react';
import { generateBet } from '../utils/generateBet';
import { generateAvailableNumbersForBet } from '../utils/generateAvailableNumbersForBet';
import sortNumbersAscending from '../utils/sortNumbersAscending';

export function Bet() {
   const [randonBet, setRandonBet] = useState<string[]>([]);
   const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);

   useEffect(() => {
      const generatedBet = sortNumbersAscending(generateBet('15', '25'));
      setRandonBet(generatedBet);
      setSelectedNumbers(generatedBet);
   }, []);

   function handleSelectedNumber(e: React.ChangeEvent<HTMLInputElement>) {
      const selectedNumber = e.target.name;

      if (e.target.checked) {
         setSelectedNumbers((prevState) => [...prevState, selectedNumber]);
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
                     checked={selectedNumbers.includes(numString) && true}
                  />
                  {numString}
               </label>
            ))}
         </form>

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
