import { useState, createContext } from 'react';

interface BetContextProps {
   selectedNumbers: string[];
   setSelectedNumbers: (bet: string[] | ((prevState: string[]) => string[])) => void;
   //setSelectedNumbers: React.Dispatch<SetStateAction<string[]>>;
}

interface BetProviderProps {
   children: JSX.Element;
}

export const BetContext = createContext({} as BetContextProps);

export function BetProvider({ children }: BetProviderProps) {
   const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);

   return (
      <BetContext.Provider value={{ selectedNumbers, setSelectedNumbers }}>
         {children}
      </BetContext.Provider>
   );
}
