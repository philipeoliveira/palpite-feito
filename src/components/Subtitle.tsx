import SubtitleMarker from '../assets/subtitle-marker.svg';

export function Subtitle({ children }: { children: string[] }) {
   return (
      <div className='flex'>
         <img
            src={SubtitleMarker}
            aria-label='Círculo pequeno usado como marcador do subtítulo'
            className='mr-3'
         />
         <h2 className='text-2xl text-green-300'>{children}</h2>
      </div>
   );
}
