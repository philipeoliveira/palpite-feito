import './App.css';
import { Bet } from './components/Bet';
import { Lotteries } from './components/Lotteries';

function App() {
   return (
      <main>
         <h1>Checkbox com useState adicionando em array</h1>
         <Lotteries />
         <Bet />
      </main>
   );
}

export default App;
