import * as Toast from '@radix-ui/react-toast';
import { useState, useEffect, useContext, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Info } from 'lucide-react';

import { ModalityContext } from '../../contexts/ModalityContext';
import { BetContext } from '../../contexts/BetContext';

import { generateAvailableNumbersForBet } from '../../utils/generateAvailableNumbersForBet';

export function ToastCustom() {
   const { selectedModality } = useContext(ModalityContext);
   const { totalNumbersAvailable, maxNumbersToBet } = selectedModality;

   const { selectedNumbers, setSelectedNumbers } = useContext(BetContext);

   const [open, setOpen] = useState(false);
   const timerRef = useRef(0);

   /**
    * Lida com a abertura e tempo de exibição da mensagem Toast
    */
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

   /**
    * Lida com a atualização dos números selecionados
    */
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

   return (
      <Toast.Provider swipeDirection='up'>
         {generateAvailableNumbersForBet(totalNumbersAvailable).map((numString) => (
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
                  checked={selectedNumbers.includes(numString) ? true : false}
                  className='hidden'
               />
               {numString}
            </label>
         ))}
         <Toast.Root
            open={open}
            onOpenChange={setOpen}
            duration={3000}
            className={twMerge('bg-green-100 rounded shadow-lg p-3', 'toast-root')}
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
   );
}
