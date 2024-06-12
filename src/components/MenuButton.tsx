import { ComponentProps } from 'react';

interface MenuButtonProps extends ComponentProps<'button'> {
   children: string | React.ReactNode;
}

export function MenuButton(props: MenuButtonProps) {
   return (
      <button
         {...props}
         className='flex items-center justify-center gap-2 text-sm text-green-300  uppercase py-1 px-5 border border-green-700 rounded duration-200 hover:border-green-300 hover:-translate-y-[2px] hover:duration-200'
      >
         {props.children}
      </button>
   );
}
