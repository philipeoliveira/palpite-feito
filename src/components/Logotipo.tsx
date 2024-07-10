import LogoPalpiteFeito from '../assets/logo-palpite-feito.svg';

export function Logotipo() {
   return (
      <img
         src={LogoPalpiteFeito}
         className='w-36 md:w-[200px] lg:w-[245px]'
         alt='Palpite Feito'
      />
   );
}
