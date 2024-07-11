import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppWindow, TicketPlus, MenuIcon, X } from 'lucide-react';
import { Button } from './Button';

export function Menu() {
   const [isShowMenu, setIsShowMenu] = useState(false);

   function handleToggleMenu() {
      setIsShowMenu(!isShowMenu);
   }

   return (
      <nav
         className='flex justify-between items-center'
         aria-label='Menu Principal'
         role='navigation'
      >
         {/* Menu para Desktop */}
         <ul className='hidden md:flex gap-2 md:gap-3 lg:gap-5' role='menubar'>
            <li role='menuitem'>
               <Link to='/' tabIndex={-1}>
                  <Button aria-label='Link para página inicial de palpite'>
                     <TicketPlus size={16} />
                     <span className='hidden md:block lg:block'>Criar palpite</span>
                  </Button>
               </Link>
            </li>
            <li role='menuitem'>
               <Link to='/about' tabIndex={-1}>
                  <Button aria-label='Link para página sobre o site'>
                     <AppWindow size={16} />
                     <span className='hidden md:block lg:block'>Sobre o site</span>
                  </Button>
               </Link>
            </li>
         </ul>

         {/* Ícone de Menu para Mobile */}
         <Button
            className='md:hidden z-20'
            onClick={handleToggleMenu}
            aria-label={isShowMenu ? 'Fechar Menu' : 'Abrir Menu'}
            aria-expanded={isShowMenu}
            aria-haspopup='true'
         >
            {isShowMenu ? <X size={16} /> : <MenuIcon size={16} />}
         </Button>

         {/* Menu Mobile */}
         {isShowMenu && (
            <motion.div
               initial={{ y: '-100vh' }}
               animate={{ y: 0 }}
               transition={{ duration: 0.3, ease: 'anticipate' }}
               className={`fixed top-0 left-0 w-full h-full bg-gray-900 z-10`}
            >
               <ul
                  role='menubar'
                  className='flex flex-col items-center w-full gap-4 p-4 mt-14'
               >
                  <li role='menuitem'>
                     <Link to='/' tabIndex={-1}>
                        <Button
                           onClick={handleToggleMenu}
                           aria-label='Link para página inicial de palpite'
                        >
                           <TicketPlus className='w-2.5 md:w-4 lg:w-4 h-2.5 md:h-4 lg:h-4' />
                           Criar palpite
                        </Button>
                     </Link>
                  </li>
                  <li role='menuitem'>
                     <Link to='/about' tabIndex={-1}>
                        <Button
                           onClick={handleToggleMenu}
                           aria-label='Link para página sobre o site'
                        >
                           <AppWindow className='w-2.5 md:w-4 lg:w-4 h-2.5 md:h-4 lg:h-4' />
                           Sobre o site
                        </Button>
                     </Link>
                  </li>
               </ul>
            </motion.div>
         )}
      </nav>
   );
}
