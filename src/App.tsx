import { Bet } from './components/Bet';
import { Header } from './components/Header';
import { ModalitiesButtons } from './components/ModalitiesButtons';
import { ModalityProvider } from './contexts/ModalityContext';

function App() {
   return (
      <ModalityProvider>
         <>
            <header>
               <Header />
            </header>
            <main>
               <ModalitiesButtons />
               <Bet />
            </main>
            <footer>Desenvolvido por: Philipe Oliveira</footer>
         </>
      </ModalityProvider>
   );
}

export default App;
