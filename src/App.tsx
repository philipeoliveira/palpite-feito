import './App.css';
import { Bet } from './components/Bet';
import { LotteryModalities } from './components/LotteryModalities';

function App() {
   return (
      <main>
         <h1>Checkbox com useState adicionando em array</h1>
         <LotteryModalities />
         <Bet />
      </main>
   );
}

export default App;
