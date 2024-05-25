import { createContext, useState } from 'react';

interface ModalityContextProps {
   selectedModality: string;
   setSelectedModality: (modality: string) => void;
}

interface ModalityProviderProps {
   children: JSX.Element;
}

export const ModalityContext = createContext({} as ModalityContextProps);

export function ModalityProvider({ children }: ModalityProviderProps) {
   const [selectedModality, setSelectedModality] = useState('Quina');

   return (
      <ModalityContext.Provider
         value={{ selectedModality, setSelectedModality }}
      >
         {children}
      </ModalityContext.Provider>
   );
}
