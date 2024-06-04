import { useState, useEffect, useContext } from 'react';

import { ModalityContext } from '../contexts/ModalityContext';

import { generateAvailableNumbersForBet } from '../utils/generateAvailableNumbersForBet';
import { generateBet } from '../utils/generateBet';
import { getSingularOrPluralWord } from '../utils/getSingularOrPluralWord';
import { countEvenAndOdd } from '../utils/countEvenAndOdd';
import { countPrimeNumbers } from '../utils/countPrimeNumbers';
import { countHalfBet } from '../utils/countHalfBet';
import { countSelectedFibonacci } from '../utils/countSelectedFibonacci';
import { countMultiplesOfThree } from '../utils/countMultiplesOfThree';

export function Bet() {
   const { selectedModality } = useContext(ModalityContext);
   const { totalNumbersAvailable, minNumbersToBet, maxNumbersToBet, countHalf } =
      selectedModality;

   const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);

   function createBet(totalNumbersAvailable: string, minNumbersToBet: string) {
      const generatedBet = generateBet(minNumbersToBet, totalNumbersAvailable);
      setSelectedNumbers(generatedBet);
   }

   useEffect(() => {
      createBet(totalNumbersAvailable, minNumbersToBet);
   }, [totalNumbersAvailable, minNumbersToBet]);

   function handleSelectedNumber(e: React.ChangeEvent<HTMLInputElement>) {
      const selectedNumber = e.target.name;

      if (e.target.checked) {
         selectedNumbers.length < +maxNumbersToBet
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
                  <legend>Palpite da {selectedModality.name}</legend>
                  <p>Dezenas para um palpite de jogo da {selectedModality.name}</p>
                  <div id='bet-numbers'>
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
                                 checked={
                                    selectedNumbers.includes(numString) ? true : false
                                 }
                              />
                              {numString}
                           </label>
                        )
                     )}
                  </div>
               </fieldset>
            </form>

            <button onClick={() => createBet(totalNumbersAvailable, minNumbersToBet)}>
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
            <p>{countHalf && countHalfBet(totalNumbersAvailable, selectedNumbers)}</p>
            <p>{countSelectedFibonacci(totalNumbersAvailable, selectedNumbers)}</p>
         </div>
      </section>
   );
}
