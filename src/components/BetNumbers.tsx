import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';

import { ToastContext } from '../contexts/ToastContext';
import { ModalityContext } from '../contexts/ModalityContext';
import { BetContext } from '../contexts/BetContext';

import { generateAvailableNumbersForBet } from '../utils/generateAvailableNumbersForBet';

export function BetNumbers() {
   const { selectedModality } = useContext(ModalityContext);
   const { maxNumbersToBet, totalNumbersAvailable } = selectedModality;

   const { selectedNumbers, setSelectedNumbers } = useContext(BetContext);

   const { handleToastCustom } = useContext(ToastContext);

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

   return generateAvailableNumbersForBet(totalNumbersAvailable).map((numString) => (
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
   ));
}
