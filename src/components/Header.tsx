import { Logotipo } from './Logotipo';
import { Menu } from './Menu';

export function Header() {
   return (
      <header className='flex items-center justify-between gap-6 px-2 py-4 md:p-5 lg:p-7 border-b border-green-500'>
         <Logotipo />
         <Menu />
      </header>
   );
}
