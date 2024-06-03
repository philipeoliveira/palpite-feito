import { useState, useEffect, useContext } from 'react';

import { ModalityContext } from '../contexts/ModalityContext';

import { generateAvailableNumbersForBet } from '../utils/generateAvailableNumbersForBet';
import { generateBet } from '../utils/generateBet';
import sortNumbersAscending from '../utils/sortNumbersAscending';
import { getSingularOrPluralWord } from '../utils/getSingularOrPluralWord';
import { countEvenAndOdd } from '../utils/countEvenAndOdd';
import { countPrimeNumbers } from '../utils/countPrimeNumbers';
import { countHalfBet } from '../utils/countHalfBet';
import { countSelectedFibonacci } from '../utils/countSelectedFibonacci';
import { countMultiplesOfThree } from '../utils/countMultiplesOfThree';

export function Bet() {
   const { selectedModality } = useContext(ModalityContext);
   const { totalNumbersAvailable, totalNumbersToBet } = selectedModality;

   const [randonBet, setRandonBet] = useState<string[]>([]);
   const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);

   function createBet(totalNumbersAvailable: string, totalNumbersToBet: string) {
      const generatedBet = generateBet(totalNumbersToBet, totalNumbersAvailable);
      setRandonBet(generatedBet);
      setSelectedNumbers(generatedBet);
   }

   useEffect(() => {
      createBet(totalNumbersAvailable, totalNumbersToBet);
   }, [totalNumbersAvailable, totalNumbersToBet]);

   function handleSelectedNumber(e: React.ChangeEvent<HTMLInputElement>) {
      const selectedNumber = e.target.name;

      if (e.target.checked) {
         selectedNumbers.length < +totalNumbersToBet
            ? setSelectedNumbers((prevState) => [...prevState, selectedNumber])
            : alert('O limite de números para esta aposta foi atingido.');
      } else {
         setSelectedNumbers((prevState) => {
            return [...prevState.filter((numString) => numString !== selectedNumber)];
         });
      }
   }

   return (
      <section id='bet-container'>
         <div id='bet'>
            <form id='bet-form'>
               <fieldset>
                  <legend>{selectedModality.name}</legend>
                  {generateAvailableNumbersForBet(totalNumbersAvailable).map(
                     (numString) => (
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
                              checked={selectedNumbers.includes(numString) ? true : false}
                           />
                           {numString}
                        </label>
                     )
                  )}
               </fieldset>
            </form>

            <button onClick={() => createBet(totalNumbersAvailable, totalNumbersToBet)}>
               Recriar palpite
            </button>
         </div>

         <div id='bet-infos'>
            <p>
               {`${selectedNumbers.length}
               ${getSingularOrPluralWord(selectedNumbers.length, 'número', 'números')}
               ${getSingularOrPluralWord(
                  selectedNumbers.length,
                  'selecionado',
                  'selecionados'
               )}`}
            </p>
            <p>{countEvenAndOdd(selectedNumbers)}</p>
            <p>{countPrimeNumbers(selectedNumbers)}</p>
            <p>{countMultiplesOfThree(selectedNumbers)}</p>
            <p>{countHalfBet(totalNumbersAvailable, selectedNumbers)}</p>
            <p>{countSelectedFibonacci(totalNumbersAvailable, selectedNumbers)}</p>

            <h2>Números sorteados aleatoriamente:</h2>
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
         </div>
      </section>
   );
}
