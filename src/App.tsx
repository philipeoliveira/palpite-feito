import './App.css';
import { Bet } from './components/Bet';
import { ModalityButtons } from './components/ModalityButtons';

function App() {
   return (
      <main>
         <h1>Checkbox com useState adicionando em array</h1>
         <ModalityButtons />
         <Bet />
      </main>
   );
}

export default App;
