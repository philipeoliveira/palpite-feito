import { Bet } from './components/Bet';
import { ModalitiesButtons } from './components/ModalitiesButtons';
import { ModalityProvider } from './contexts/ModalityContext';

function App() {
   return (
      <ModalityProvider>
         <>
            <main>
               <h1>Palpite feito</h1>
               <ModalitiesButtons />
               <Bet />
            </main>
            <footer>Desenvolvido por: Philipe Oliveira</footer>
         </>
      </ModalityProvider>
   );
}

export default App;
