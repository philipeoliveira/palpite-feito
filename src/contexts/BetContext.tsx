import { useState, createContext } from 'react';

interface BetContextProps {
   selectedNumbers: string[];
   setSelectedNumbers: (bet: string[] | ((prevState: string[]) => string[])) => void;
   showOrders: boolean;
   setShowOrders: (orders: boolean) => void;
   handleToggleInfos: () => void;
}

interface BetProviderProps {
   children: JSX.Element;
}

export const BetContext = createContext({} as BetContextProps);

export function BetProvider({ children }: BetProviderProps) {
   const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);
   const [showOrders, setShowOrders] = useState(false);

   function handleToggleInfos() {
      setShowOrders(!showOrders);
   }

   return (
      <BetContext.Provider
         value={{
            selectedNumbers,
            setSelectedNumbers,
            showOrders,
            setShowOrders,
            handleToggleInfos,
         }}
      >
         {children}
      </BetContext.Provider>
   );
}
