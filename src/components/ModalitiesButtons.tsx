import { useState, useEffect, useContext } from 'react';

import { ModalityProps } from '../types/ModalityProps';
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

   return modalities.map((modality) => (
      <label
         key={modality.id}
         className='text-xl text-green-300 border border-green-700 py-5 px-8 rounded cursor-pointer duration-200 hover:border-green-300 hover:-translate-y-[2px] hover:duration-200'
      >
         <input
            type='radio'
            name='modality'
            id={lowercaseWithoutAccents(modality.name)}
            value={modality.name}
            onChange={handleSelectedModality}
            className='hidden'
         />
         {`${modality.name}`}
      </label>
   ));
}
