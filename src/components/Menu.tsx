import { Link } from 'react-router-dom';
import { AppWindow, TicketPlus } from 'lucide-react';
import { Button } from './Button';

export function Menu() {
   return (
      <nav>
         <ul className='flex gap-2 sm:gap-5'>
            <li>
               <Link to='/'>
                  <Button>
                     <TicketPlus size={16} />
                     <span className='hidden sm:block'>Criar palpite</span>
                  </Button>
               </Link>
            </li>
            <li>
               <Link to='/about'>
                  <Button>
                     <AppWindow size={16} />
                     <span className='hidden sm:block'>Sobre o site</span>
                  </Button>
               </Link>
            </li>
         </ul>
      </nav>
   );
}
