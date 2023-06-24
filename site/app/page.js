import Image from 'next/image';
import blueIcon from '@/assets/blue.svg';
import orangeIcon from '@/assets/orange.svg';
import heap from '@/assets/heap.svg';

export default function Home() {

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className='absolute bottom-0 left-0 h-[150px] w-[150px] md:h-[300px] md:w-[300px]'>
        <Image src={blueIcon} alt="Blue Icon" />
      </div>
      <div className='absolute top-0 right-0 h-[150px] w-[150px] md:h-[300px] md:w-[250px]'>
        <Image src={orangeIcon} alt="Blue Icon" />
      </div>
      <div className='absolute top-[100px] left-5 md:left-60'>
        <Image src={heap} alt="heap" />
      </div>
      <div className='absolute top-[100px] right-5 md:right-80'>
        <Image src={heap} alt="heap" />
      </div>
      <div className='absolute bottom-[10%] left-[15%] md:bottom-40 md:left-[30%]'>
        <Image src={heap} alt="heap" />
      </div>
      <div className='flex items-center justify-center h-screen w-screen'>
        <div className='flex flex-col items-start justify-center text-center pb-[5%] md:text-left'>
          <h1 className='text-black px-2 font-pacifico text-[2.6rem] md:text-[4rem]'>Love Simple UI</h1>
          <p className='px-2 text-black font-poppins text-[1.2rem] md:text-[1.5rem]'>A <span className='font-bold'>Lightweight</span> + <span className='font-bold'>Fast</span> + <span className='font-bold'>Responsive</span> open-source UI component library.</p>
        </div>
      </div>
    </main>
  );
}
