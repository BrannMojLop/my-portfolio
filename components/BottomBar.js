import React from 'react'

// Components
import Link from 'next/link'

// Assets
import { IoPerson, IoExtensionPuzzle, IoEllipsisVertical, IoFileTrayStacked } from "react-icons/io5";

const BottomBar = ({ config: { active } }) => {
    return (
        <nav className='md:hidden w-full fixed bottom-0 z-10 bg-[#232323]'>
            <ul className='flex h-16 gap-5 text-[#7D7D7D]'>
                <li className='w-1/3'>
                    <Link
                        className={`flex w-full h-full flex-col justify-center items-center ${active === 'home' && 'text-white font-semibold'} hover:text-white`}
                        href='/'>
                        <IoPerson size={20} />
                        <p>Sobre mi</p>
                    </Link>
                </li>
                <li className='w-1/3'>
                    <Link
                        className={`flex w-full h-full flex-col justify-center items-center  ${active === 'skills' && 'text-white font-semibold'} hover:text-white`}
                        href='/skills'>
                        <IoExtensionPuzzle size={20} />
                        <p>Habilidades</p>
                    </Link>
                </li>
                <li className='w-1/3'>
                    <Link
                        className={`flex w-full h-full flex-col justify-center items-center  ${active === 'portfolio' && 'text-white font-semibold'} hover:text-white`}
                        href='/portfolio'>
                        <IoFileTrayStacked size={20} />
                        <p>Portafolio</p>
                    </Link>
                </li>
                {/* <li className='w-1/4'>
                    <Link
                        className='flex w-full h-full flex-col justify-center items-center'
                        href='/'>
                        <IoEllipsisVertical size={20} />
                        <p>Más</p>
                    </Link>
                </li> */}
            </ul>
        </nav >
    )
}

export default BottomBar