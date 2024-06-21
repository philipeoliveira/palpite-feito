import { useState, useEffect, useContext } from 'react';
import { twMerge } from 'tailwind-merge';

import { ModalityProps } from '../types/ModalityProps';
import { getModalities } from '../services/ModalitiesService';
import { ModalityContext } from '../contexts/ModalityContext';

import { lowercaseWithoutAccents } from '../utils/lowercaseWithoutAccents';

export function ModalitiesButtons() {
   const [modalities, setModalities] = useState<ModalityProps[]>([]);
   const { selectedModality, setSelectedModality } = useContext(ModalityContext);

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
         htmlFor={lowercaseWithoutAccents(modality.name)}
         className={twMerge(
            'text-xl text-green-300 border border-green-700 py-5 px-8 rounded duration-200 has-[:focus-visible]:border-green-300',
            selectedModality.name === modality.name
               ? '-translate-y-[2px] border-b-green-300'
               : 'hover:-translate-y-[2px] hover:border-green-300 hover:duration-200 cursor-pointer'
         )}
      >
         <input
            type='radio'
            name='modality'
            id={lowercaseWithoutAccents(modality.name)}
            aria-label={`Aba da ${modality.name}`}
            value={modality.name}
            onChange={handleSelectedModality}
            className='w-0 h-0 opacity-0'
         />
         {`${modality.name}`}
      </label>
   ));
}
