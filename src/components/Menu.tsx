import { Link } from 'react-router-dom';
import { AppWindow, TicketPlus } from 'lucide-react';
import { Button } from './Button';

export function Menu() {
   return (
      <nav>
         <ul className='flex gap-5'>
            <li>
               <Link to='/'>
                  <Button>
                     <TicketPlus size={16} />
                     Criar palpite
                  </Button>
               </Link>
            </li>
            <li>
               <Link to='/about'>
                  <Button>
                     <AppWindow size={16} />
                     Sobre o site
                  </Button>
               </Link>
            </li>
         </ul>
      </nav>
   );
}
