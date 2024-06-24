import { Title } from '../components/Title';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { TicketPlus } from 'lucide-react';

export function About() {
   return (
      <>
         <Title
            title='Sobre o site'
            description='É só entrar, criar e sair com seu palpite feito'
         />

         <section className='flex flex-col gap-10 pb-10 px-8'>
            <div className='flex flex-col gap-3 text-lg'>
               <p>
                  Este site tem como objetivo sortear gratuitamente números de várias
                  modalidades de jogos. Algumas informações curiosas são mostradas de
                  acordo com cada sequência gerada pelo sistema, como a quantidade de
                  números pares e ímpares do palpite feito.
               </p>
               <p>
                  As sequências de números sorteados neste site servem apenas como palpite
                  para a criação de uma aposta, sem qualquer ligação com o sorteio oficial
                  de cada modalidade. Para apostas oficiais, valores e resultados,
                  consulte o site das Loterias CAIXA.
               </p>
               <p>
                  Escolha agora uma modalidade para criar seu palpite. É simples e rápido
                  obter uma inspiração para aqueles dias em que a superstição está
                  preguiçosa. {':)'}
               </p>
               <p>Não esqueça de cruzar os dedos!</p>
               <p>Boa sorte!</p>
            </div>

            <Link to='/'>
               <Button>
                  <TicketPlus size={16} />
                  Criar palpite
               </Button>
            </Link>
         </section>
      </>
   );
}
