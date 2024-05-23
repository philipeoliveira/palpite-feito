import './App.css';
import { Bet } from './components/Bet';
import { LotteryButtons } from './components/LotteryButtons';

function App() {
   return (
      <main>
         <h1>Checkbox com useState adicionando em array</h1>
         <LotteryButtons />
         <Bet />
      </main>
   );
}

export default App;
