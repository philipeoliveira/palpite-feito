import { Header } from './components/Header';
import { ModalitiesButtons } from './components/ModalitiesButtons';
import { Bet } from './components/Bet';
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
                     <ModalitiesButtons />
                     <Bet />
                  </main>
                  <Footer />
               </div>
            </BetProvider>
         </ModalityProvider>
      </ToastProvider>
   );
}

export default App;
