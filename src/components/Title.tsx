import TitleMarker from '../assets/title-marker.svg';

interface TitleProps {
   title: string;
   description?: string;
}

export function Title({ title, description }: TitleProps) {
   return (
      <div className='p-7'>
         <div className='flex'>
            <img
               src={TitleMarker}
               aria-label='Linha vertical usada como marcador do título'
               className='mr-5'
            />
            <h1 className='text-[28px] text-green-100 flex items-center'>{title}</h1>
         </div>
         <p className='text-green-700'>{description}</p>
      </div>
   );
}
