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
               className='mr-2 md:mr-2.5 lg:mr-3'
            />
            <h2 className='text-xs md:text-xl lg:text-2xl text-green-300'>{subtitle}</h2>
         </div>
         <p className='text-[11px] md:text-sm lg:text-base text-green-100'>
            {description}
         </p>
      </div>
   );
}
