import { ExternalLink } from 'lucide-react';

export function Footer() {
   return (
      <footer className='p-2 sm:p-6 border-t border-green-500'>
         <p className='flex items-center justify-center gap-1 h-4 sm:h-6 text-green-100 text-[11px] sm:text-sm'>
            Desenvolvido por
            <span className='flex items-center gap-1 border-0 sm:border-b hover:border-b-0 hover:text-green-300 has-[:focus]:border-b-0 has-[:focus]:text-green-300'>
               <a
                  href='https://github.com/philipeoliveira'
                  title='Abrir em nova aba o GitHub do autor Philipe Oliveira'
                  target='_blank'
                  className='focus:outline-none'
               >
                  Philipe Oliveira
               </a>
               <ExternalLink className='w-3 sm:w-4 h-2.5 sm:h-4' />
            </span>
         </p>
      </footer>
   );
}
