import { Link } from 'react-router-dom';
import { TicketPlus } from 'lucide-react';

import { Title } from '../components/Title';
import { Button } from '../components/Button';

export function About() {
   return (
      <>
         <Title
            title='Sobre o site'
            description='É só entrar, criar e sair com seu palpite feito'
         />

         <section className='flex flex-col gap-5 md:gap-8 lg:gap-10 pb-5 md:pb-8 lg:pb-10 px-2 md:px-6 lg:px-8'>
            <div className='flex flex-col gap-2 md:gap-3 lg:gap-3 text-xs md:text-sm lg:text-lg'>
               <p>
                  Este site tem como objetivo sortear gratuitamente números para várias
                  modalidades de jogos da Loteria.{' '}
                  <span className='uppercase'>
                     Os números sorteados não garantem nenhuma aposta premiada.
                  </span>
               </p>
               <p>
                  As sequências de números sorteados servem apenas como palpite para a
                  criação de uma aposta, sem qualquer ligação com a premiação do sorteio
                  oficial de cada modalidade. Para apostas oficiais, valores e resultados,
                  consulte o site das Loterias CAIXA.
               </p>
               <p>
                  Algumas informações curiosas são mostradas de acordo com cada sequência
                  gerada pelo sistema, como por exemplo, a quantidade de números pares e
                  ímpares do palpite feito.
               </p>
               <p>
                  Escolha agora uma modalidade para criar seu palpite. É simples e rápido
                  obter uma inspiração para aqueles dias em que a superstição está
                  preguiçosa. {':)'}
               </p>
               <p>Não esqueça de cruzar os dedos!</p>
               <p>Boa sorte!</p>
            </div>

            <Link to='/' tabIndex={-1}>
               <Button>
                  <TicketPlus className='w-2.5 md:w-4 lg:w-4 h-2.5 md:h-4 lg:h-4' />
                  Criar palpite
               </Button>
            </Link>
         </section>
      </>
   );
}
