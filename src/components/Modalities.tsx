import { ModalitiesButtons } from './ModalitiesButtons';

export function Modalities() {
   return (
      <section className='px-7'>
         <form id='main-modalities' className='flex gap-5'>
            <ModalitiesButtons />
         </form>
      </section>
   );
}
