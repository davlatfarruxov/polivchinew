import Image from 'next/image'
import logo from '../../public/logo.jpg'

export default function Header() {
  return (
    <header className="bg-[#006699] shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="text-3xl font-bold text-gray-800 flex flex-center justify-center">
          <Image className='w-[200px] ' src={logo}/>
        </div>
        <p className="text-center text-xl mt-2 text-white">SUG'ORISH TIZIMLARI</p>
      </div>
    </header>
  )
}

