import { useState, useEffect } from 'react';
import axios from 'axios';
import { generateAvailableNumbersForBet } from '../utils/generateAvailableNumbersForBet';
import { generateBet } from '../utils/generateBet';
import sortNumbersAscending from '../utils/sortNumbersAscending';
import { pluralizeNumber } from '../utils/handleStrings';

interface modalitiesProps {
   id: string;
   name: string;
   totalNumbersAvailable: string;
   totalNumbersToBet: string;
}

export function Bet() {
   const [modalitiesData, setModalitiesData] = useState<modalitiesProps[]>([]);
   const [randonBet, setRandonBet] = useState<string[]>([]);
   const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);

   useEffect(() => {
      axios
         .get('src/data/modalities.json')
         .then((response) => setModalitiesData(response.data.modalities))
         .catch((error) => console.error(error));
   }, []);

   useEffect(() => {
      const generatedBet = sortNumbersAscending(generateBet('15', '25'));
      setRandonBet(generatedBet);
      setSelectedNumbers(generatedBet);
   }, []);

   function handleSelectedNumber(e: React.ChangeEvent<HTMLInputElement>) {
      const selectedNumber = e.target.name;

      if (e.target.checked) {
         selectedNumbers.length < 15
            ? setSelectedNumbers((prevState) => [...prevState, selectedNumber])
            : alert('O limite de números para esta aposta foi atingido.');
      } else {
         setSelectedNumbers((prevState) => {
            return [
               ...prevState.filter((numString) => numString !== selectedNumber),
            ];
         });
      }
   }

   return (
      <section>
         <form id='bet-form'>
            {generateAvailableNumbersForBet('25').map((numString) => (
               <label
                  key={numString}
                  className={
                     selectedNumbers.includes(numString) ? 'checked' : ''
                  }
               >
                  <input
                     type='checkbox'
                     name={`${numString}`}
                     id={`number-${numString}`}
                     onChange={handleSelectedNumber}
                     checked={
                        selectedNumbers.includes(numString) ? true : false
                     }
                  />
                  {numString}
               </label>
            ))}
         </form>

         <h2>Números na ordem crescente:</h2>
         <div>{pluralizeNumber(selectedNumbers.length)}</div>

         <h2>Números sorteados aleatoriamente crescente:</h2>
         <div>
            {randonBet.map((numString) => (
               <span key={numString}>{`${numString} `}</span>
            ))}
         </div>

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

         <h2>Modalidades do JSON</h2>
         <div>
            {modalitiesData.map((modality) => (
               <span key={modality.id}>{`${modality.name} `}</span>
            ))}
         </div>
      </section>
   );
}
