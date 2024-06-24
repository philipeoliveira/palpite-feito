import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { ToastProvider } from './contexts/ToastContext';
import { ModalityProvider } from './contexts/ModalityContext';
import { BetProvider } from './contexts/BetContext';

function App() {
   return (
      <ToastProvider>
         <ModalityProvider>
            <BetProvider>
               <div className='max-w-[1170px] mx-auto px-7 flex flex-col gap-2'>
                  <Header />
                  <main>
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
