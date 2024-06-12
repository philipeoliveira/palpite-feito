interface SubtitleDesc {
   children: string | React.ReactNode;
}

export function SubtitleDesc({ children }: SubtitleDesc) {
   return <p className='text-green-100'>{children}</p>;
}
