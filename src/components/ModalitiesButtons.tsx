import { useEffect, useState } from 'react';
import { getModalities } from '../services/ModalitiesService';
import { ModalityProps } from '../types/Modality';

export function ModalitiesButtons() {
   const [selectedModality, setSelectedModality] = useState('');
   const [modalities, setModalities] = useState<ModalityProps[]>([]);

   useEffect(() => {
      getModalities()
         .then((modalities) => setModalities(modalities))
         .catch((err) => console.error(err));
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
