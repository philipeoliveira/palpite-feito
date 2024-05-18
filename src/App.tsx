import './App.css';
import { useState } from 'react';
import { CreateNumbersAvailableForBets } from './utils/CreateNumbersAvailableForBets';

function App() {
   const [chosenNumbers, setChosenNumbers] = useState<number[]>([]);

   function handleCheckboxChosenNumber(e: React.ChangeEvent<HTMLInputElement>) {
      const { name, checked } = e.target;

      if (checked) {
         setChosenNumbers((prevState) => [...prevState, +name]);
      } else {
         setChosenNumbers((prevState) => {
            return [...prevState.filter((number) => number != +name)];
         });
      }
   }

   console.log(chosenNumbers);

   return (
      <main>
         <h1>Checkbox com useState adicionando em array</h1>
         <form id='form-aposta'>
            {CreateNumbersAvailableForBets(25).map((number) => (
               <label key={number}>
                  <input
                     type='checkbox'
                     name={`${number}`}
                     id={`number-${number}`}
                     onChange={handleCheckboxChosenNumber}
                  />
                  {number}
               </label>
            ))}
         </form>
         <h2>Números escolhidos:</h2>
         <div>
            {chosenNumbers.map((number) => (
               <span key={number}>{`${number} `}</span>
            ))}
         </div>
      </main>
   );
}

export default App;
