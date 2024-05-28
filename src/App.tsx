import './App.css';
import { Bet } from './components/Bet';
import { ModalitiesButtons } from './components/ModalitiesButtons';
import { ModalityProvider } from './contexts/ModalityContext';

function App() {
   return (
      <ModalityProvider>
         <main>
            <h1>Checkbox com array</h1>
            <ModalitiesButtons />
            <Bet />
         </main>
      </ModalityProvider>
   );
}

export default App;
