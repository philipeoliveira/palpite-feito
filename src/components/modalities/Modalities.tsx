import { ModalitiesButtons } from './ModalitiesButtons';

export function Modalities() {
   return (
      <section className='px-2 sm:px-7'>
         <fieldset aria-label='Escolha uma modalidade de jogo'>
            <form id='main-modalities' className='flex gap-2 sm:gap-5'>
               <ModalitiesButtons />
            </form>
         </fieldset>
      </section>
   );
}
