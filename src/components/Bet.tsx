import * as Toast from '@radix-ui/react-toast';
import { useState, useEffect, useContext, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Info, RotateCw } from 'lucide-react';

import { Subtitle } from './Subtitle';
import { SubtitleDesc } from './SubtitleDesc';
import { BetCards } from './BetCards';
import { BetButton } from './BetButton';

import { ModalityContext } from '../contexts/ModalityContext';
import { BetContext } from '../contexts/BetContext';

import { generateAvailableNumbersForBet } from '../utils/generateAvailableNumbersForBet';
import { generateBet } from '../utils/generateBet';

export function Bet() {
   const { selectedModality } = useContext(ModalityContext);
   const { totalNumbersAvailable, minNumbersToBet, maxNumbersToBet } = selectedModality;

   const { selectedNumbers, setSelectedNumbers } = useContext(BetContext);
   //const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);

   const [open, setOpen] = useState(false);
   const timerRef = useRef(0);

   function handleToastCustom() {
      setOpen(false);
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
         setOpen(true);
      }, 100);
   }
   useEffect(() => {
      return () => clearTimeout(timerRef.current);
   }, []);

   function handleSelectedNumber(e: React.ChangeEvent<HTMLInputElement>) {
      const selectedNumber = e.target.name;

      if (e.target.checked) {
         selectedNumbers.length < +maxNumbersToBet
            ? setSelectedNumbers((prevState) => [...prevState, selectedNumber])
            : handleToastCustom();
      } else {
         setSelectedNumbers((prevState) => {
            return [...prevState.filter((numString) => numString !== selectedNumber)];
         });
      }
   }

   function createBet(minNumbersToBet: string, totalNumbersAvailable: string) {
      const generatedBet = generateBet(minNumbersToBet, totalNumbersAvailable);
      setSelectedNumbers(generatedBet);
   }
   useEffect(() => {
      createBet(minNumbersToBet, totalNumbersAvailable);
   }, [minNumbersToBet, totalNumbersAvailable]);

   return (
      <section
         id='bet-container'
         className='flex flex-col gap-10 py-7 px-8 my-10 bg-green-900 rounded'
      >
         <div>
            <Subtitle>Palpite da {selectedModality.name}</Subtitle>
            <SubtitleDesc>
               Números para um palpite de jogo da {selectedModality.name}
            </SubtitleDesc>
         </div>

         <div id='bet' className='flex gap-10'>
            <div className='flex flex-col gap-10'>
               <form id='bet-form'>
                  <fieldset className='grid grid-cols-10 gap-3'>
                     <Toast.Provider swipeDirection='up'>
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
                        <Toast.Root
                           open={open}
                           onOpenChange={setOpen}
                           duration={3000}
                           className={twMerge(
                              'bg-green-100 rounded shadow-lg p-3',
                              'toast-root'
                           )}
                        >
                           <Toast.Description asChild>
                              <div className='flex items-center justify-center gap-2 text-gray-900 font-medium bg-green-100'>
                                 <Info
                                    size={20}
                                    strokeWidth={2}
                                    className='text-green-100 bg-gray-900 rounded-full'
                                 />
                                 O limite de números para este palpite foi atingido
                              </div>
                           </Toast.Description>
                        </Toast.Root>
                        <Toast.Viewport className='max-w-lg p-6 fixed bottom-0 left-1/2 -translate-x-1/2 z-50' />
                     </Toast.Provider>
                  </fieldset>
               </form>

               <div className='flex flex-col gap-4'>
                  <BetButton
                     onClick={() => createBet(totalNumbersAvailable, minNumbersToBet)}
                  >
                     <RotateCw size={16} />
                     Recriar palpite
                  </BetButton>
               </div>
            </div>

            <BetCards />
         </div>
      </section>
   );
}
