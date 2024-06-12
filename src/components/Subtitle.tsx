import SubtitleMarker from '../assets/subtitle-marker.svg';

interface SubtitleProps {
   subtitle: string;
   description?: string;
}

export function Subtitle({ subtitle, description }: SubtitleProps) {
   return (
      <div>
         <div className='flex'>
            <img
               src={SubtitleMarker}
               aria-label='Círculo pequeno usado como marcador do subtítulo'
               className='mr-3'
            />
            <h2 className='text-2xl text-green-300'>{subtitle}</h2>
         </div>
         <p className='text-green-100'>{description}</p>
      </div>
   );
}
