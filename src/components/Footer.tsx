import { ExternalLink } from 'lucide-react';

export function Footer() {
   return (
      <footer className='flex items-center justify-center gap-1 text-sm p-6 border-t border-green-500'>
         <p>
            <span className='text-green-100'>Desenvolvido por </span>
            <a
               href='https://github.com/philipeoliveira'
               title='Abrir em nova aba o GitHub do autor Philipe Oliveira'
               target='_blank'
               className='text-green-100 border-b hover:text-green-300 hover:border-b-0'
            >
               Philipe Oliveira
            </a>
         </p>
         <ExternalLink size={14} />
      </footer>
   );
}
