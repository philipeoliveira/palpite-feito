import LogoPalpiteFeito from '../assets/logo-palpite-feito.svg';
import { AppWindow, TicketPlus } from 'lucide-react';

import { Button } from './Button';
import { Title } from './Title';

export function Header() {
   return (
      <header>
         <div className='flex items-center justify-between gap-6 p-7 border-b border-green-500'>
            <img src={LogoPalpiteFeito} alt='Palpite Feito' />
            <nav>
               <ul className='flex gap-5'>
                  <li>
                     <Button>
                        <TicketPlus size={16} />
                        Criar palpite
                     </Button>
                  </li>
                  <li>
                     <Button>
                        <AppWindow size={16} />
                        Sobre o site
                     </Button>
                  </li>
               </ul>
            </nav>
         </div>

         <Title
            title='Criar palpite'
            description='Escolha uma modalidade abaixo para criar um palpite de jogo'
         ></Title>
      </header>
   );
}
