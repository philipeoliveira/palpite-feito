import { AppWindow, TicketPlus } from 'lucide-react';
import { Button } from './Button';

export function Menu() {
   return (
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
   );
}
