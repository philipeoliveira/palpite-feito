export function Card({ children }: { children: string | boolean }) {
   return (
      <li className='table text-gray-900 text-[11px] md:text-sm lg:text-base font-medium bg-green-300 px-2 md:px-3 lg:px-4 py-[1px] md:py-[2px] lg:py-[2px] mb-1 md:mb-2 lg:mb-5 rounded'>
         {children}
      </li>
   );
}
