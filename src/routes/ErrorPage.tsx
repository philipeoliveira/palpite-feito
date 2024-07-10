import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { TicketPlus } from 'lucide-react';
import Clover from '../assets/clover.svg';
import { Button } from '../components/Button';
import { animateClover } from '../utils/framer-motion/animations';

export function ErrorPage() {
   useEffect(() => {
      animateClover();
   }, []);

   return (
      <section className='w-10/12 lg:max-w-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-6 lg:gap-8 py-8 lg:py-12 px-18 lg:px-24 bg-green-900 rounded'>
         <div className='flex items-center gap-1 text-6xl lg:text-8xl font-medium leading-[0.8]'>
            <div>4</div>
            <img
               src={Clover}
               aria-label='Trevo de quatro folhas girando e representando o número 0'
               id='clover'
               className='w-10 lg:w-16'
            />
            <div>4</div>
         </div>

         <div className='flex flex-col items-center justify-center'>
            <p className='text-green-300 text-lg lg:text-2xl'>Erro 404</p>
            <p className='text-sm lg:text-base'>Palpite não encontrado...</p>
         </div>

         <Link to='/' className='m-2'>
            <Button>
               <TicketPlus size={16} />
               Criar palpite
            </Button>
         </Link>
      </section>
   );
}
