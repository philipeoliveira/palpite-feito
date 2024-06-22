import { useEffect, useContext, useCallback } from 'react';
import { ArrowLeftRight, AlignLeft, RotateCw, Copy } from 'lucide-react';

import { Subtitle } from './Subtitle';
import { BetNumbers } from './BetNumbers';
import { Button } from './Button';
import { AllBetOrders } from './AllBetOrders';
import { BetCards } from './BetCards';
import { ToastCustom } from './radix/ToastCustom';

import { useToastClipboard } from '../hooks/useToastClipboard';

import { ModalityContext } from '../contexts/ModalityContext';
import { BetContext } from '../contexts/BetContext';

import { generateBet } from '../utils/generateBet';
import { copyToClipboard } from '../utils/copyToClipboard';

export function Bet() {
   const { selectedModality } = useContext(ModalityContext);
   const { minNumbersToBet, totalNumbersAvailable, numberOfColumns } = selectedModality;

   const { setSelectedNumbers, setRandonBet, showOrders, handleToggleInfos } =
      useContext(BetContext);

   const { selectedNumbers } = useContext(BetContext);

   const { handleToastClipboard } = useToastClipboard();

   /**
    * selectedNumbers: Inicia com aposta criada, recria aposta pelo botão, recria aposta ao trocar de modalidade.
    * randonBet: Armazena números sorteados aleatoriamente.
    */
   const createBet = useCallback(() => {
      const generatedBet = generateBet(minNumbersToBet, totalNumbersAvailable);
      setSelectedNumbers(generatedBet);
      setRandonBet(generatedBet);
   }, [setSelectedNumbers, setRandonBet, minNumbersToBet, totalNumbersAvailable]);

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
                     aria-label='Selecione números para um palpite de jogo'
                     className={`grid grid-cols-${numberOfColumns} gap-3`}
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

                  <Button onClick={() => handleToggleInfos()}>
                     {showOrders ? <AlignLeft size={15} /> : <ArrowLeftRight size={16} />}
                     {showOrders ? 'Mostrar cards' : 'Mostrar ordens'}
                  </Button>

                  <Button
                     onClick={() => {
                        copyToClipboard(selectedNumbers, handleToastClipboard);
                     }}
                  >
                     <Copy size={16} />
                     Copiar palpite
                  </Button>
               </div>
            </div>

            <div id='bet-toggle-infos'>
               {showOrders ? <AllBetOrders /> : <BetCards />}
            </div>
         </div>
      </section>
   );
}
