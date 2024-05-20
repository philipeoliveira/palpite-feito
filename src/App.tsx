import './App.css';
import { useState, useEffect } from 'react';
import { generateAvailableNumbersForBet } from './utils/generateAvailableNumbersForBet';
import { sortNumbersAscending } from './utils/sortNumbersAscending';
import { generateBet } from './utils/generateBet';

function App() {
   const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);
   const [generatedNumbers, setGeneratedNumbers] = useState<string[]>([]);

   useEffect(() => {
      setGeneratedNumbers(sortNumbersAscending(generateBet('15', '25')));
   }, []);

   function handleSelectedNumber(e: React.ChangeEvent<HTMLInputElement>) {
      const selectedNumber = e.target.name;

      if (e.target.checked) {
         setSelectedNumbers((prevState) => [...prevState, selectedNumber]);
      } else {
         setSelectedNumbers((prevState) => {
            return [
               ...prevState.filter((numString) => numString !== selectedNumber),
            ];
         });
      }
   }

   return (
      <main>
         <h1>Checkbox com useState adicionando em array</h1>
         <form id='bet-form'>
            {generateAvailableNumbersForBet('25').map((numString) => (
               <label key={numString}>
                  <input
                     type='checkbox'
                     name={`${numString}`}
                     id={`number-${numString}`}
                     onChange={handleSelectedNumber}
                  />
                  {numString}
               </label>
            ))}
         </form>

         <h2>Números na ordem escolhida:</h2>
         <div>
            {selectedNumbers.map((numString) => (
               <span key={numString}>{`${numString} `}</span>
            ))}
         </div>

         <h2>Números na ordem crescente:</h2>
         <div>
            {sortNumbersAscending(selectedNumbers).map((numString) => (
               <span key={numString}>{`${numString} `}</span>
            ))}
         </div>

         <h2>Números sorteados aleatoriamente crescente:</h2>
         <div>
            {generatedNumbers.map((numString) => (
               <span key={numString}>{`${numString} `}</span>
            ))}
         </div>
      </main>
   );
}

export default App;
