import { useState, createContext, useRef, useEffect } from 'react';

interface ToastContextProps {
   open: boolean;
   setOpen: (isOpen: boolean) => void;
   handleToastCustom: () => void;
   icon: React.ReactNode;
   setIcon: (icon: React.ReactNode) => void;
   message: string;
   setMessage: (message: string) => void;
}

interface ToastProviderProps {
   children: JSX.Element;
}

export const ToastContext = createContext({} as ToastContextProps);

export function ToastProvider({ children }: ToastProviderProps) {
   const [open, setOpen] = useState(false);
   const [icon, setIcon] = useState<React.ReactNode>();
   const [message, setMessage] = useState('');
   const timerRef = useRef(0);

   /**
    * Lida com a abertura e tempo de exibição da mensagem Toast
    */
   function handleToastCustom() {
      setOpen(false);
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
         setOpen(true);
      }, 100);
   }
   useEffect(() => {
      return () => clearTimeout(timerRef.current);
   }, []);

   return (
      <ToastContext.Provider
         value={{ open, setOpen, handleToastCustom, icon, setIcon, message, setMessage }}
      >
         {children}
      </ToastContext.Provider>
   );
}
