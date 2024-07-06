import TitleMarker from '../assets/title-marker.svg';

interface TitleProps {
   title: string;
   description?: string;
}

export function Title({ title, description }: TitleProps) {
   return (
      <div className='px-2 py-3.5 sm:p-7'>
         <div className='flex'>
            <img
               src={TitleMarker}
               aria-label='Linha vertical usada como marcador do título'
               className='h-4 sm:h-8 mr-2 sm:mr-5'
            />
            <h1 className='text-sm sm:text-[28px] text-green-100 flex items-center'>
               {title}
            </h1>
         </div>
         <p className='text-[11px] sm:text-base text-green-700'>{description}</p>
      </div>
   );
}
