import './App.css';
import { useState } from 'react';
import { CreateNumbersAvailableForBets } from './CreateNumbersAvailableForBets';

function App() {
   const [chosenNumbers, setChosenNumbers] = useState<string[]>([]);

   function handleCheckboxChosenNumber(e: React.ChangeEvent<HTMLInputElement>) {
      const { name, checked } = e.target;

      if (checked) {
         setChosenNumbers((prevState) => [...prevState, name]);
      } else {
         setChosenNumbers((prevState) => {
            return [...prevState.filter((number) => number != name)];
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
         <div>
            {chosenNumbers.map((number) => (
               <span key={number}>{`${number} `}</span>
            ))}
         </div>
      </main>
   );
}

export default App;
