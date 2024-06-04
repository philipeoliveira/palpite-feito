import { useState, useEffect, useContext } from 'react';

import { ModalityProps } from '../types/Modality';
import { getModalities } from '../services/ModalitiesService';
import { ModalityContext } from '../contexts/ModalityContext';

import { lowercaseWithoutAccents } from '../utils/lowercaseWithoutAccents';

export function ModalitiesButtons() {
   const [modalities, setModalities] = useState<ModalityProps[]>([]);
   const { setSelectedModality } = useContext(ModalityContext);

   useEffect(() => {
      getModalities()
         .then((modalities) => setModalities(modalities))
         .catch((err) => console.error(err));
   }, []);

   function handleSelectedModality(e: React.ChangeEvent<HTMLInputElement>) {
      const nameSelectedModality = e.target.value;

      const modality = modalities.find(
         (modality) => modality.name === nameSelectedModality
      ) as ModalityProps;

      setSelectedModality(modality);
   }

   return (
      <section>
         <form id='select-modality'>
            {modalities.map((modality) => (
               <label key={modality.id}>
                  <input
                     type='radio'
                     name='modality'
                     id={lowercaseWithoutAccents(modality.name)}
                     value={modality.name}
                     onChange={handleSelectedModality}
                  />
                  {`${modality.name}`}
               </label>
            ))}
         </form>
      </section>
   );
}
