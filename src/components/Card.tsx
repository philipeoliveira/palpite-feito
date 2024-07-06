export function Card({ children }: { children: string | boolean }) {
   return (
      <li className='table text-gray-900 text-[11px] sm:text-base font-medium bg-green-300 px-2 sm:px-4 py-[1px] sm:py-[2px] mb-1 sm:mb-5 rounded'>
         {children}
      </li>
   );
}
