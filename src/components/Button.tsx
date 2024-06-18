import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
   children: string | React.ReactNode;
}

export function Button(props: ButtonProps) {
   return (
      <button
         {...props}
         className='flex items-center justify-center gap-2.5 text-sm leading-6 uppercase text-green-300 py-1 px-5 bg-gray-900 border border-green-700 rounded duration-200 hover:border-green-300 hover:-translate-y-[2px] hover:duration-200 focus:border-green-300 focus:duration-200 focus:outline-none'
      >
         {props.children}
      </button>
   );
}
