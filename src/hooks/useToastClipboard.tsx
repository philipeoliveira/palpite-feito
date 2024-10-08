import { useContext } from 'react';
import { CircleCheck } from 'lucide-react';
import { ToastContext } from '../contexts/ToastContext';

export function useToastClipboard() {
   const { handleToastCustom, setIcon, setMessage } = useContext(ToastContext);

   /**
    * Lida com ações e estados para personalizar do Toast
    */
   const handleToastClipboard = () => {
      handleToastCustom();
      setIcon(
         <CircleCheck
            strokeWidth={2}
            className='w-3 md:w-4 lg:w-4 h-3 md:h-4 lg:h-4 text-green-100 bg-gray-900 rounded-full'
         />
      );
      setMessage('Palpite copiado com sucesso!');
   };

   return { handleToastClipboard };
}
