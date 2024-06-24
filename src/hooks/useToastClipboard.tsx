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
            size={20}
            strokeWidth={2}
            className='text-green-100 bg-gray-900 rounded-full'
         />
      );
      setMessage('Palpite copiado com sucesso!');
   };

   return { handleToastClipboard };
}
