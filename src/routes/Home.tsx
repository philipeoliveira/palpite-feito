import { Title } from '../components/Title';
import { Modalities } from '../components/modalities/Modalities';
import { Bet } from '../components/bet/Bet';

export function Home() {
   return (
      <>
         <Title
            title='Criar palpite'
            description='Escolha uma modalidade abaixo para criar um palpite de jogo'
         />
         <Modalities />
         <Bet />
      </>
   );
}
