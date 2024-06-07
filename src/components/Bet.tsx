import { useState, useEffect, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { RotateCw } from 'lucide-react';

import { Subtitle } from './Subtitle';
import { BetInfoCard } from './BetInfoCard';

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
      <section
         id='bet-container'
         className='flex flex-col gap-10 py-7 px-8 my-10 bg-green-900 rounded'
      >
         <div>
            <Subtitle>Palpite da {selectedModality.name}</Subtitle>
            <p className='text-green-100'>
               Números para um palpite de jogo da {selectedModality.name}
            </p>
         </div>

         <div id='bet' className='flex gap-10'>
            <div className='flex flex-col gap-10'>
               <form id='bet-form'>
                  <fieldset className='grid grid-cols-10 gap-3'>
                     {generateAvailableNumbersForBet(totalNumbersAvailable).map(
                        (numString) => (
                           <label
                              key={numString}
                              className={twMerge(
                                 'flex items-center justify-center text-3xl w-[50px] h-[50px] border-2 rounded-full cursor-pointer duration-100 hover:scale-110 hover:duration-100',
                                 selectedNumbers.includes(numString)
                                    ? 'text-gray-900 font-medium bg-green-300 border-green-300'
                                    : 'text-green-500 bg-gray-900 border-green-500'
                              )}
                           >
                              <input
                                 type='checkbox'
                                 name={`${numString}`}
                                 id={`number-${numString}`}
                                 onChange={handleSelectedNumber}
                                 checked={
                                    selectedNumbers.includes(numString) ? true : false
                                 }
                                 className='hidden'
                              />
                              {numString}
                           </label>
                        )
                     )}
                  </fieldset>
               </form>

               <div className='flex flex-col gap-4'>
                  <button
                     onClick={() => createBet(totalNumbersAvailable, minNumbersToBet)}
                     className='flex items-center justify-center gap-2 text-sm leading-6 uppercase text-green-300 py-1 px-5 bg-gray-900 border border-green-700 rounded duration-200 hover:border-green-300 hover:-translate-y-[2px] hover:duration-200'
                  >
                     <RotateCw size={16} />
                     Recriar palpite
                  </button>
               </div>
            </div>

            <ul id='bet-infos'>
               <BetInfoCard>
                  {`
                     ${selectedNumbers.length}
                     ${getSingularOrPluralWord(
                        selectedNumbers.length,
                        'número',
                        'números'
                     )}
                     ${getSingularOrPluralWord(
                        selectedNumbers.length,
                        'selecionado',
                        'selecionados'
                     )}
                  `}
               </BetInfoCard>
               <BetInfoCard>{countEvenAndOdd(selectedNumbers)}</BetInfoCard>
               <BetInfoCard>{countPrimeNumbers(selectedNumbers)}</BetInfoCard>
               <BetInfoCard>{countMultiplesOfThree(selectedNumbers)}</BetInfoCard>
               {countHalf && (
                  <BetInfoCard>
                     {countHalfBet(totalNumbersAvailable, selectedNumbers)}
                  </BetInfoCard>
               )}
               <BetInfoCard>
                  {countSelectedFibonacci(totalNumbersAvailable, selectedNumbers)}
               </BetInfoCard>
            </ul>
         </div>
      </section>
   );
}
