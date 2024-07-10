import { useEffect, useContext, useCallback } from 'react';
import { ArrowLeftRight, AlignLeft, RotateCw, Copy } from 'lucide-react';

import { Subtitle } from '../Subtitle';
import { BetNumbers } from './BetNumbers';
import { Button } from '../Button';
import { AllBetOrders } from './AllBetOrders';
import { BetCards } from './BetCards';
import { ToastCustom } from '../radix/ToastCustom';

import { useToastClipboard } from '../../hooks/useToastClipboard';

import { ModalityContext } from '../../contexts/ModalityContext';
import { BetContext } from '../../contexts/BetContext';

import { generateBet } from '../../utils/generateBet';
import { copyToClipboard } from '../../utils/copyToClipboard';

export function Bet() {
   const { selectedModality } = useContext(ModalityContext);
   const { minNumbersToBet, totalNumbersAvailable, numberOfColumns } = selectedModality;

   const {
      selectedNumbers,
      setSelectedNumbers,
      setRandonBet,
      showOrders,
      handleToggleInfos,
   } = useContext(BetContext);

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
         className='flex flex-col gap-5 sm:gap-10 py-3 sm:py-7 px-2.5 sm:px-8 my-4 sm:my-10 bg-green-900 rounded'
      >
         <Subtitle
            subtitle={`Palpite da ${selectedModality.name ? selectedModality.name : ''}`}
            description={`Números para um palpite de jogo da ${
               selectedModality.name ? selectedModality.name : ''
            }`}
         ></Subtitle>

         <div id='bet' className='flex flex-col sm:flex-row gap-4 sm:gap-10'>
            <div className='flex flex-col gap-3 sm:gap-10'>
               <form id='bet-form'>
                  <fieldset
                     aria-label='Selecione números para um palpite de jogo'
                     className={`grid gap-x-1 gap-y-3 sm:gap-3`}
                     style={{
                        gridTemplateColumns: `repeat(${numberOfColumns}, minmax(0, 1fr))`,
                     }}
                  >
                     <ToastCustom>
                        <BetNumbers />
                     </ToastCustom>
                  </fieldset>
               </form>

               <div className='flex flex-row sm:flex-col gap-2 sm:gap-4'>
                  <Button onClick={() => createBet()}>
                     <RotateCw className='w-2.5 sm:w-4 h-2.5 sm:h-4' />
                     <span className='sm:flex sm:gap-1.5'>
                        Recriar <span className='hidden sm:block'>palpite</span>
                     </span>
                  </Button>

                  <Button onClick={() => handleToggleInfos()}>
                     {showOrders ? (
                        <AlignLeft className='w-2.5 sm:w-4 h-2.5 sm:h-4' />
                     ) : (
                        <ArrowLeftRight className='w-3 sm:w-4 h-2.5 sm:h-4' />
                     )}
                     <span className='sm:flex sm:gap-1.5'>
                        <span className='hidden sm:block'>Mostrar</span>
                        {showOrders ? 'cards' : 'ordens'}
                     </span>
                  </Button>

                  <Button
                     onClick={() => {
                        copyToClipboard(selectedNumbers, handleToastClipboard);
                     }}
                  >
                     <Copy className='w-2.5 sm:w-4 h-2.5 sm:h-4' />
                     <span className='sm:flex sm:gap-1.5'>
                        Copiar <span className='hidden sm:block'>palpite</span>
                     </span>
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
