import { ExternalLink } from 'lucide-react';

export function Footer() {
   return (
      <footer className='p-6 border-t border-green-500'>
         <p className='flex items-center justify-center gap-1 h-6 text-green-100 text-sm'>
            Desenvolvido por
            <span className='flex items-center gap-1 border-b hover:border-b-0 hover:text-green-300'>
               <a
                  href='https://github.com/philipeoliveira'
                  title='Abrir em nova aba o GitHub do autor Philipe Oliveira'
                  target='_blank'
               >
                  Philipe Oliveira
               </a>
               <ExternalLink size={14} />
            </span>
         </p>
      </footer>
   );
}
