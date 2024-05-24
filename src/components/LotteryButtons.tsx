import { useEffect, useState } from 'react';
import axios from 'axios';

interface lotteriesProps {
   id: string;
   name: string;
   totalNumbersAvailable: string;
   totalNumbersToBet: string;
}

export function LotteryButtons() {
   const [selectedLottery, setSelectedLottery] = useState('');
   const [lotteriesData, setLotteriesData] = useState<lotteriesProps[]>([]);

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
            {lotteriesData.map((lotteries) => (
               <label key={lotteries.id}>
                  <input
                     type='radio'
                     name='modalities'
                     id={lotteries.name}
                     value={lotteries.name}
                     onChange={handleSelectedLottery}
                  />
                  {`${lotteries.name}`}
               </label>
            ))}
         </form>

         <h2>Modalidade do JSON</h2>
         <div>
            {lotteriesData.map(
               (lotteries) =>
                  lotteries.name === selectedLottery && (
                     <div key={lotteries.id}>
                        <span>{`${lotteries.name} | `}</span>
                        <span>{`${lotteries.totalNumbersAvailable} disponíveis | `}</span>
                        <span>{`${lotteries.totalNumbersToBet} para apostar`}</span>
                     </div>
                  )
            )}
         </div>
      </section>
   );
}
