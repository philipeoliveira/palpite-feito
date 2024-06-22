import { useContext } from 'react';
import { Info } from 'lucide-react';
import { ToastContext } from '../contexts/ToastContext';

export function useToastNumbers() {
   const { handleToastCustom, setIcon, setMessage } = useContext(ToastContext);

   /**
    * Lida com ações e estados para personalizar do Toast
    */
   const handleToastNumbers = () => {
      handleToastCustom();
      setIcon(
         <Info
            size={20}
            strokeWidth={2}
            className='text-green-100 bg-gray-900 rounded-full'
         />
      );
      setMessage('O limite de números para este palpite foi atingido');
   };

   return { handleToastNumbers };
}
