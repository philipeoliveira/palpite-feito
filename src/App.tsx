import { Outlet, useLocation } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { ToastProvider } from './contexts/ToastContext';
import { ModalityProvider } from './contexts/ModalityContext';
import { BetProvider } from './contexts/BetContext';

function App() {
   const { pathname } = useLocation();

   return (
      <ToastProvider>
         <ModalityProvider>
            <BetProvider>
               <div className='max-w-[1170px] mx-auto px-3 sm:px-7 flex flex-col'>
                  <Header />
                  <main
                     className={
                        pathname === '/about'
                           ? `my-1 bg-[url("assets/clovers-bg.png")] bg-right-bottom bg-no-repeat`
                           : 'my-1'
                     }
                  >
                     <Outlet />
                  </main>
                  <Footer />
               </div>
            </BetProvider>
         </ModalityProvider>
      </ToastProvider>
   );
}

export default App;
