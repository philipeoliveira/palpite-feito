import './App.css';
import { useState } from 'react';
import generateAvailableNumbersForBets from './utils/generateAvailableNumbersForBets';
import sortNumbersAscending from './utils/sortNumbersAscending';

function App() {
   const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);

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

   console.log(selectedNumbers);
   console.log(sortNumbersAscending(selectedNumbers));

   return (
      <main>
         <h1>Checkbox com useState adicionando em array</h1>
         <form id='bet-form'>
            {generateAvailableNumbersForBets('25').map((numString) => (
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
      </main>
   );
}

export default App;
