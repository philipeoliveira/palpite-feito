import { useContext } from 'react';

import { ModalityContext } from '../../contexts/ModalityContext';

interface BetOrdersProps {
   titleText: string;
   children: React.ReactNode;
}

export function BetOrder({ titleText, children }: BetOrdersProps) {
   const { selectedModality } = useContext(ModalityContext);
   const { totalNumbersAvailable } = selectedModality;

   return (
      <div className='flex flex-col gap-1'>
         <h3 className='text-[11px] sm:text-base text-green-700'>{titleText}</h3>
         <div
            className={`grid ${
               +totalNumbersAvailable < 50 ? 'grid-cols-8' : 'grid-cols-10'
            } gap-1 justify-items-center text-xs sm:text-lg`}
         >
            {children}
         </div>
      </div>
   );
}
