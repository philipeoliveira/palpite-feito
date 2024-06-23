import { Logotipo } from './Logotipo';
import { Menu } from './Menu';
import { Title } from './Title';

export function Header() {
   return (
      <header>
         <div className='flex items-center justify-between gap-6 p-7 border-b border-green-500'>
            <Logotipo />
            <Menu />
         </div>

         <Title
            title='Criar palpite'
            description='Escolha uma modalidade abaixo para criar um palpite de jogo'
         ></Title>
      </header>
   );
}
