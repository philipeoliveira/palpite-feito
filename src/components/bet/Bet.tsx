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
         className='flex flex-col gap-5 md:gap-7 lg:gap-10 py-3 md:py-5 lg:py-7 px-2.5 md:px-5 lg:px-8 my-4 md:my-6 lg:my-10 bg-green-900 rounded'
      >
         <Subtitle
            subtitle={`Palpite da ${selectedModality.name ? selectedModality.name : ''}`}
            description={`Números para um palpite de jogo da ${
               selectedModality.name ? selectedModality.name : ''
            }`}
         ></Subtitle>

         <div id='bet' className='flex flex-col lg:flex-row gap-4 lg:gap-10'>
            <div className='flex flex-col gap-4 lg:gap-10'>
               <form id='bet-form'>
                  <fieldset
                     aria-label='Selecione números para um palpite de jogo'
                     className={`grid gap-x-1 gap-y-3 md:gap-3 lg:gap-3`}
                     style={{
                        gridTemplateColumns: `repeat(${numberOfColumns}, minmax(0, 1fr))`,
                     }}
                  >
                     <ToastCustom>
                        <BetNumbers />
                     </ToastCustom>
                  </fieldset>
               </form>

               <div className='flex flex-row lg:flex-col gap-2 md:gap-3 lg:gap-4'>
                  <Button onClick={() => createBet()}>
                     <RotateCw className='w-2.5 md:w-4 lg:w-4 h-2.5 md:h-4 lg:h-4' />
                     <span className='lg:flex lg:gap-1.5'>
                        Recriar <span className='hidden lg:block'>palpite</span>
                     </span>
                  </Button>

                  <Button onClick={() => handleToggleInfos()}>
                     {showOrders ? (
                        <AlignLeft className='w-2.5 md:w-4 lg:w-4 h-2.5 md:h-4 lg:h-4' />
                     ) : (
                        <ArrowLeftRight className='w-2.5 lg:w-4 h-2.5 lg:h-4' />
                     )}
                     <span className='lg:flex lg:gap-1.5'>
                        <span className='hidden lg:block'>Mostrar</span>
                        {showOrders ? 'cards' : 'ordens'}
                     </span>
                  </Button>

                  <Button
                     onClick={() => {
                        copyToClipboard(selectedNumbers, handleToastClipboard);
                     }}
                  >
                     <Copy className='w-2.5 md:w-4 lg:w-4 h-2.5 md:h-4 lg:h-4' />
                     <span className='lg:flex lg:gap-1.5'>
                        Copiar <span className='hidden lg:block'>palpite</span>
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
