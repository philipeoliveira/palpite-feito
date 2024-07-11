import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ComponentProps<'button'> {
   children: string | React.ReactNode;
}

export function Button(props: ButtonProps) {
   return (
      <button
         {...props}
         className={twMerge(
            'flex items-center justify-center gap-1.5 md:gap-2 lg:gap-2.5 text-[10px] md:text-xs lg:text-sm leading-5 md:leading-6 lg:leading-6 uppercase text-green-300 py-0.5 md:py-1 lg:py-1 px-2 md:px-3 lg:px-5 bg-gray-900 border border-green-700 rounded duration-200 hover:border-green-300 hover:-translate-y-[2px] hover:duration-200 focus:border-green-300 focus:duration-200 focus:outline-none',
            props.className ? props.className : ''
         )}
      >
         {props.children}
      </button>
   );
}
