import { useState } from 'react';
import './App.css';
import { CreateNumbersAvailableForBets } from './CreateNumbersAvailableForBets';

function App() {
   const [chosenNumbers, setChosenNumbers] = useState<number[]>([]);

   function handleCheckboxChosenNumber(e: React.ChangeEvent<HTMLInputElement>) {
      const { value, checked } = e.target;
      const valueNumber = parseInt(value);

      if (checked) {
         setChosenNumbers((prevState) => [...prevState, valueNumber]);
      } else {
         setChosenNumbers((prevState) => [
            ...prevState.filter((number) => number === valueNumber),
         ]);
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
      </main>
   );
}

export default App;
