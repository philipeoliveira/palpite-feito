import TitleMarker from '../assets/title-marker.svg';

interface TitleProps {
   title: string;
   description?: string;
}

export function Title({ title, description }: TitleProps) {
   return (
      <div className='px-2 py-3.5 md:p-6 lg:p-7'>
         <div className='flex'>
            <img
               src={TitleMarker}
               aria-label='Linha vertical usada como marcador do título'
               className='h-4 md:h-7 lg:h-8 mr-2 md:mr-3 lg:mr-5'
            />
            <h1 className='text-sm md:text-2xl lg:text-[28px] text-green-100 flex items-center'>
               {title}
            </h1>
         </div>
         <p className='text-[11px] md:text-sm lg:text-base text-green-700'>
            {description}
         </p>
      </div>
   );
}
