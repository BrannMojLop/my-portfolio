import React from 'react'

// Frame Motion
import { motion as Motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

// Components
import Image from 'next/image'
import BottomBar from '@/components/BottomBar'

// Assets
import { IoArrowForward } from "react-icons/io5";
import screen from '@/public/screen.jpg'
import icon_py from '@/public/py.svg'
import icon_mySql from '@/public/mySql.svg'
import icon_git from '@/public/git.svg'
import icon_html from '@/public/html.svg'
import icon_css from '@/public/css.svg'
import icon_react from '@/public/react.svg'
import icon_tailwind from '@/public/tailwind.svg'
import icon_aws from '@/public/aws.svg'
import icon_github from '@/public/github.svg'

const portfolio = () => {
    return (
        <>
            <Motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 80 }}
                transition={{ duration: 0.8 }}
                className='h-screen overflow-hidden p-8'>
                <div className='w-full items-start text-3xl font-bold text-white'>
                    <h1>Proyectos <br /> destacados</h1>
                    <div className='w-full my-5 p-[1px] bg-[#4D4D4D]' />
                </div>
                <ul className='scrollbar scrollbar-none overflow-auto flex-1 pb-20 flex flex-col gap-20'>
                    <li className='w-full'>
                        <h2 className='text-2xl font-semibold'>Bolder Landingpage</h2>
                        <h3 className='text-[#4D4D4D]'>Web Development</h3>
                        <div className='mb-3 w-full bg-container'>
                            <div className='w-full py-2 px-5 items-end'>
                                <button className='p-3 bg-[#3F4152] rounded-lg' type='button'>
                                    <IoArrowForward size={20} />
                                </button>
                            </div>
                            <div className='w-full my-2 flex-row gap-3'>
                                <div className='w-10 h-10 p-1 bg-white rounded-md'>
                                    <Image
                                        title='Python'
                                        src={icon_py}
                                        alt="python"
                                    />
                                </div>
                                <div className='w-10 h-10 p-1 bg-white rounded-md'>
                                    <Image
                                        title='Git'
                                        src={icon_git}
                                        alt="git"
                                    />
                                </div>
                                <div className='w-10 h-10 p-1 bg-white rounded-md'>
                                    <Image
                                        title='MySQL'
                                        src={icon_mySql}
                                        alt="mysql"
                                    />
                                </div>
                                <div className='w-10 h-10 p-1 bg-white rounded-md'>
                                    <Image
                                        title='GitHub'
                                        src={icon_github}
                                        alt="github"
                                    />
                                </div>
                            </div>
                            <Image
                                src={screen}
                                alt="screen"
                                width={350}
                            />
                        </div>
                        <p>Serrow restructured and designed core pages, creating
                            interactive elements that put users in control and
                            allowed them to discover the information needed to make a decision.
                        </p>
                    </li>
                    <li className='w-full'>
                        <h2 className='text-2xl font-semibold'>Bolder Landingpage</h2>
                        <h3 className='text-[#4D4D4D]'>Web Development</h3>
                        <div className='mb-3 w-full bg-container'>
                            <div className='w-full py-2 px-5 items-end'>
                                <button className='p-3 bg-[#3F4152] rounded-lg' type='button'>
                                    <IoArrowForward size={20} />
                                </button>
                            </div>
                            <div className='w-full my-2 flex-row gap-3'>
                                <div className='w-10 h-10 p-1 bg-white rounded-md'>
                                    <Image
                                        title='Python'
                                        src={icon_py}
                                        alt="python"
                                    />
                                </div>
                                <div className='w-10 h-10 p-1 bg-white rounded-md'>
                                    <Image
                                        title='Git'
                                        src={icon_git}
                                        alt="git"
                                    />
                                </div>
                                <div className='w-10 h-10 p-1 bg-white rounded-md'>
                                    <Image
                                        title='MySQL'
                                        src={icon_mySql}
                                        alt="mysql"
                                    />
                                </div>
                                <div className='w-10 h-10 p-1 bg-white rounded-md'>
                                    <Image
                                        title='GitHub'
                                        src={icon_github}
                                        alt="github"
                                    />
                                </div>
                            </div>
                            <Image
                                src={screen}
                                alt="screen"
                                width={350}
                            />
                        </div>
                        <p>Serrow restructured and designed core pages, creating
                            interactive elements that put users in control and
                            allowed them to discover the information needed to make a decision.
                        </p>
                    </li>
                    <li className='w-full'>
                        <h2 className='text-2xl font-semibold'>Bolder Landingpage</h2>
                        <h3 className='text-[#4D4D4D]'>Web Development</h3>
                        <div className='mb-3 w-full bg-container'>
                            <div className='w-full py-2 px-5 items-end'>
                                <button className='p-3 bg-[#3F4152] rounded-lg' type='button'>
                                    <IoArrowForward size={20} />
                                </button>
                            </div>
                            <div className='w-full my-2 flex-row gap-3'>
                                <div className='w-10 h-10 p-1 bg-white rounded-md'>
                                    <Image
                                        title='Python'
                                        src={icon_py}
                                        alt="python"
                                    />
                                </div>
                                <div className='w-10 h-10 p-1 bg-white rounded-md'>
                                    <Image
                                        title='Git'
                                        src={icon_git}
                                        alt="git"
                                    />
                                </div>
                                <div className='w-10 h-10 p-1 bg-white rounded-md'>
                                    <Image
                                        title='MySQL'
                                        src={icon_mySql}
                                        alt="mysql"
                                    />
                                </div>
                                <div className='w-10 h-10 p-1 bg-white rounded-md'>
                                    <Image
                                        title='GitHub'
                                        src={icon_github}
                                        alt="github"
                                    />
                                </div>
                            </div>
                            <Image
                                src={screen}
                                alt="screen"
                                width={350}
                            />
                        </div>
                        <p>Serrow restructured and designed core pages, creating
                            interactive elements that put users in control and
                            allowed them to discover the information needed to make a decision.
                        </p>
                    </li>
                </ul>
            </Motion.div>
            <BottomBar config={{ active: 'portfolio' }} />
        </>
    )
}

export default portfolio