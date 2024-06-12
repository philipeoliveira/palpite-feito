import { Bet } from './components/Bet';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ModalitiesButtons } from './components/ModalitiesButtons';

import { BetProvider } from './contexts/BetContext';
import { ModalityProvider } from './contexts/ModalityContext';

function App() {
   return (
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
   );
}

export default App;
