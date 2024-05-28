import { useState, useEffect, createContext } from 'react';

import { ModalityProps } from '../types/Modality';
import { getModalities } from '../services/ModalitiesService';

interface ModalityContextProps {
   selectedModality: ModalityProps;
   setSelectedModality: (modality: ModalityProps) => void;
}

interface ModalityProviderProps {
   children: JSX.Element;
}

export const ModalityContext = createContext({} as ModalityContextProps);

export function ModalityProvider({ children }: ModalityProviderProps) {
   const [selectedModality, setSelectedModality] = useState<ModalityProps>(
      {} as ModalityProps
   );

   useEffect(() => {
      const initialModality = async () => {
         try {
            const response = await getModalities();
            setSelectedModality(response[0]);
         } catch (err) {
            console.error(err);
         }
      };
      initialModality();
   }, []);

   return (
      <ModalityContext.Provider value={{ selectedModality, setSelectedModality }}>
         {children}
      </ModalityContext.Provider>
   );
}
