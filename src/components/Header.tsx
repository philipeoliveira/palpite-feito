import LogoPalpiteFeito from '../assets/logo-palpite-feito.svg';
import { AppWindow, TicketPlus } from 'lucide-react';

import { MenuButton } from './MenuButton';
import { Title } from './Title';

export function Header() {
   return (
      <header>
         <div className='flex justify-between gap-6 p-7 border-b border-green-500'>
            <img src={LogoPalpiteFeito} alt='Palpite Feito' />
            <nav>
               <ul className='flex gap-5'>
                  <li>
                     <MenuButton>
                        <TicketPlus size={16} />
                        Criar palpite
                     </MenuButton>
                  </li>
                  <li>
                     <MenuButton>
                        <AppWindow size={16} />
                        Sobre o site
                     </MenuButton>
                  </li>
               </ul>
            </nav>
         </div>

         <div className='p-7'>
            <Title>Criar palpite</Title>
            <p className='text-green-700'>
               Escolha uma modalidade abaixo para criar um palpite de jogo
            </p>
         </div>
      </header>
   );
}
