import TitleMarker from '../assets/title-marker.svg';

export function Title({ children }: { children: string }) {
   return (
      <div className='flex'>
         <img
            src={TitleMarker}
            aria-label='Linha vertical usada como marcador do título'
            className='mr-5'
         />
         <h1 className='text-[28px] text-green-100 flex items-center'>{children}</h1>
      </div>
   );
}
