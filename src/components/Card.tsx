export function Card({ children }: { children: string | boolean }) {
   return (
      <li className='table text-gray-900 font-medium bg-green-300 px-4 py-[2px] mb-5 rounded'>
         {children}
      </li>
   );
}
