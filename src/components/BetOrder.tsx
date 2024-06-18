import { useContext } from 'react';

import { ModalityContext } from '../contexts/ModalityContext';

interface BetOrdersProps {
   children: React.ReactNode;
}

export function BetOrder({ children }: BetOrdersProps) {
   const { selectedModality } = useContext(ModalityContext);
   const { totalNumbersAvailable } = selectedModality;

   return (
      <div className='flex flex-col gap-1'>
         <h3 className='text-green-700'>Sorteados aleatoriamente:</h3>
         <div
            className={`grid ${
               +totalNumbersAvailable < 50 ? 'grid-cols-8' : 'grid-cols-10'
            } gap-1 justify-items-center text-lg`}
         >
            {children}
         </div>
      </div>
   );
}
