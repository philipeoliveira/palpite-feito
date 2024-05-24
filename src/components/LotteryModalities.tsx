import { useEffect, useState } from 'react';
import axios from 'axios';

interface lotteryProps {
   id: string;
   name: string;
   totalNumbersAvailable: string;
   totalNumbersToBet: string;
}

export function LotteryModalities() {
   const [selectedLottery, setSelectedLottery] = useState('');
   const [lotteriesData, setLotteriesData] = useState<lotteryProps[]>([]);

   useEffect(() => {
      axios
         .get('src/data/lotteries.json')
         .then((response) => setLotteriesData(response.data.lotteries))
         .catch((error) => console.error(error));
   }, []);

   function handleSelectedLottery(e: React.ChangeEvent<HTMLInputElement>) {
      setSelectedLottery(e.target.value);
   }

   return (
      <section>
         <form id='select-lottery'>
            {lotteriesData.map((lottery) => (
               <label key={lottery.id}>
                  <input
                     type='radio'
                     name='lottery'
                     id={lottery.name}
                     value={lottery.name}
                     onChange={handleSelectedLottery}
                  />
                  {`${lottery.name}`}
               </label>
            ))}
         </form>

         <h2>Modalidade do JSON</h2>
         <div>
            {lotteriesData.map((lottery) =>
               lottery.name === selectedLottery ? (
                  <div key={lottery.id}>
                     <span>{`${lottery.name} | `}</span>
                     <span>{`${lottery.totalNumbersAvailable} disponíveis | `}</span>
                     <span>{`${lottery.totalNumbersToBet} para apostar`}</span>
                  </div>
               ) : null
            )}
         </div>
      </section>
   );
}
