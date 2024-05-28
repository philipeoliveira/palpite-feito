import { createContext, useState } from 'react';
import { ModalityProps } from '../types/Modality';

interface ModalityContextProps {
   selectedModality: ModalityProps;
   setSelectedModality: (modality: ModalityProps) => void;
}

interface ModalityProviderProps {
   children: JSX.Element;
}

export const ModalityContext = createContext({} as ModalityContextProps);

export function ModalityProvider({ children }: ModalityProviderProps) {
   const [selectedModality, setSelectedModality] = useState<ModalityProps>({
      id: '1',
      name: 'Lotofácil',
      totalNumbersAvailable: '25',
      totalNumbersToBet: '15',
   });

   return (
      <ModalityContext.Provider value={{ selectedModality, setSelectedModality }}>
         {children}
      </ModalityContext.Provider>
   );
}
