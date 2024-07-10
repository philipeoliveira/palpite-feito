import * as Toast from '@radix-ui/react-toast';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';

import { ToastContext } from '../../contexts/ToastContext';

interface ToastCustomProps {
   children: React.ReactNode;
}

export function ToastCustom({ children }: ToastCustomProps) {
   const { open, setOpen, icon, message } = useContext(ToastContext);

   return (
      <Toast.Provider swipeDirection='up'>
         {children}
         <Toast.Root
            open={open}
            onOpenChange={setOpen}
            duration={3000}
            className={twMerge(
               'bg-green-100 rounded shadow-lg p-1 md:p-2 lg:p-3',
               'toast-root'
            )}
         >
            <Toast.Description asChild>
               <div className='flex items-center justify-center gap-2 text-[11px] md:text-xs lg:text-base text-gray-900 font-medium bg-green-100'>
                  {icon}
                  {message}
               </div>
            </Toast.Description>
         </Toast.Root>
         <Toast.Viewport className='w-full lg:max-w-lg p-6 fixed bottom-0 left-1/2 -translate-x-1/2 z-50' />
      </Toast.Provider>
   );
}
