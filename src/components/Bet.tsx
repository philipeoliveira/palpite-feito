import { useEffect, useContext, useCallback } from 'react';
import { RotateCw } from 'lucide-react';

import { Subtitle } from './Subtitle';
import { BetNumbers } from './BetNumbers';
import { Button } from './Button';
import { BetCards } from './BetCards';
import { ToastCustom } from './radix/ToastCustom';

import { ModalityContext } from '../contexts/ModalityContext';
import { BetContext } from '../contexts/BetContext';

import { generateBet } from '../utils/generateBet';

export function Bet() {
   const { selectedModality } = useContext(ModalityContext);
   const { minNumbersToBet, totalNumbersAvailable } = selectedModality;

   const { setSelectedNumbers } = useContext(BetContext);

   /**
    * Inicia com aposta criada
    * Recria aposta pelo botão
    * Recria aposta ao trocar de modalidade
    */
   const createBet = useCallback(() => {
      const generatedBet = generateBet(minNumbersToBet, totalNumbersAvailable);
      setSelectedNumbers(generatedBet);
   }, [setSelectedNumbers, minNumbersToBet, totalNumbersAvailable]);

   useEffect(() => {
      createBet();
   }, [createBet]);

   return (
      <section
         id='bet-container'
         className='flex flex-col gap-10 py-7 px-8 my-10 bg-green-900 rounded'
      >
         <Subtitle
            subtitle={`Palpite da ${selectedModality.name}`}
            description={`Números para um palpite de jogo da ${selectedModality.name}`}
         ></Subtitle>

         <div id='bet' className='flex gap-10'>
            <div className='flex flex-col gap-10'>
               <form id='bet-form'>
                  <fieldset
                     className={`grid ${
                        +totalNumbersAvailable < 50 ? 'grid-cols-5' : 'grid-cols-10'
                     } gap-3`}
                  >
                     <ToastCustom>
                        <BetNumbers />
                     </ToastCustom>
                  </fieldset>
               </form>

               <div className='flex flex-col gap-4'>
                  <Button onClick={() => createBet()}>
                     <RotateCw size={16} />
                     Recriar palpite
                  </Button>
               </div>
            </div>

            <BetCards />
         </div>
      </section>
   );
}
