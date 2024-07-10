import { Link } from 'react-router-dom';
import { AppWindow, TicketPlus } from 'lucide-react';
import { Button } from './Button';

export function Menu() {
   return (
      <nav>
         <ul className='flex gap-2 md:gap-3 lg:gap-5'>
            <li>
               <Link to='/'>
                  <Button>
                     <TicketPlus size={16} />
                     <span className='hidden md:block lg:block'>Criar palpite</span>
                  </Button>
               </Link>
            </li>
            <li>
               <Link to='/about'>
                  <Button>
                     <AppWindow size={16} />
                     <span className='hidden md:block lg:block'>Sobre o site</span>
                  </Button>
               </Link>
            </li>
         </ul>
      </nav>
   );
}
