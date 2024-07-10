import { ModalitiesButtons } from './ModalitiesButtons';

export function Modalities() {
   return (
      <section className='px-2 md:px-5 lg:px-7'>
         <fieldset aria-label='Escolha uma modalidade de jogo'>
            <form id='main-modalities' className='flex gap-2 md:gap-3 lg:gap-5'>
               <ModalitiesButtons />
            </form>
         </fieldset>
      </section>
   );
}
