import { useEffect, useState } from 'react';
import axios from 'axios';

interface ModalityProps {
   id: string;
   name: string;
   totalNumbersAvailable: string;
   totalNumbersToBet: string;
}

export function ModalityButtons() {
   const [selectedModality, setSelectedModality] = useState('');
   const [modalities, setModalities] = useState<ModalityProps[]>([]);

   useEffect(() => {
      axios
         .get('src/data/lottery-modalities.json')
         .then((response) => setModalities(response.data.modalities))
         .catch((error) => console.error(error));
   }, []);

   function handleSelectedModality(e: React.ChangeEvent<HTMLInputElement>) {
      setSelectedModality(e.target.value);
   }

   return (
      <section>
         <form id='select-modality'>
            {modalities.map((modality) => (
               <label key={modality.id}>
                  <input
                     type='radio'
                     name='modality'
                     id={modality.name}
                     value={modality.name}
                     onChange={handleSelectedModality}
                  />
                  {`${modality.name}`}
               </label>
            ))}
         </form>

         <h2>Modalidade do JSON</h2>
         <div>
            {modalities.map((modality) =>
               modality.name === selectedModality ? (
                  <div key={modality.id}>
                     <span>{`${modality.name} | `}</span>
                     <span>{`${modality.totalNumbersAvailable} disponíveis | `}</span>
                     <span>{`${modality.totalNumbersToBet} para apostar`}</span>
                  </div>
               ) : null
            )}
         </div>
      </section>
   );
}
