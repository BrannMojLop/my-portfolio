import React from 'react'

// Frame Motion
import { motion as Motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

// Components
import Image from 'next/image'
import BottomBar from '@/components/BottomBar'

// Assets
import icon_py from '@/public/py.svg'
import icon_mySql from '@/public/mySql.svg'
import icon_git from '@/public/git.svg'
import icon_html from '@/public/html.svg'
import icon_css from '@/public/css.svg'
import icon_react from '@/public/react.svg'
import icon_tailwind from '@/public/tailwind.svg'
import icon_aws from '@/public/aws.svg'
import icon_github from '@/public/github.svg'

const skills = () => {
    return (
        <>
            <Motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 80 }}
                transition={{ duration: 0.8 }}
                className='h-screen overflow-hidden p-8'>
                <div className='w-full items-start text-3xl font-bold text-white'>
                    <h1>Habilidades y <br /> conocimientos</h1>
                    <div className='w-full my-3 h-[1px] bg-[#4D4D4D]' />
                </div>
                <ul className='scrollbar scrollbar-none overflow-auto flex-1 pb-20 flex flex-col gap-3'>
                    <li className='w-full p-5 bg-container rounded-lg'>
                        <h4 className='mb-2 font-semibold text-2xl'>Desarrollo BackEnd</h4>
                        <p className='mb-8 font-light'>Cuento con 1.5 años de experiencia en creación de APIs del lado del servidor.</p>
                        <h6 className='text-lg font-semibold'>Tecnologias y herramientas:</h6>
                        <div className='mt-1 flex-row gap-3 justify-start'>
                            <div className='w-9 h-9 p-1 bg-white rounded-lg'>
                                <Image
                                    title='Python'
                                    src={icon_py}
                                    alt="python"
                                />
                            </div>
                            <div className='w-9 h-9 p-1 bg-white rounded-lg'>
                                <Image
                                    title='Git'
                                    src={icon_git}
                                    alt="git"
                                />
                            </div>
                            <div className='w-9 h-9 p-1 bg-white rounded-lg'>
                                <Image
                                    title='MySQL'
                                    src={icon_mySql}
                                    alt="mysql"
                                />
                            </div>
                            <div className='w-9 h-9 p-1 bg-white rounded-lg'>
                                <Image
                                    title='GitHub'
                                    src={icon_github}
                                    alt="github"
                                />
                            </div>
                        </div>
                    </li>
                    <li className='w-full p-5 bg-container rounded-lg'>
                        <h4 className='mb-2 font-semibold text-2xl'>Desarrollo FrontEnd</h4>
                        <p className='mb-8 font-light'>Me especializo en la creaci&oacute;n de interfaces de usuario atractivas y funcionales, utilizando tecnolog&iacute;as modernas para garantizar una experiencia de usuario de alta calidad.</p>
                        <h6 className='text-lg font-semibold'>Tecnologias y herramientas:</h6>
                        <div className='mt-1 flex-row gap-3 justify-start'>
                            <div className='w-9 h-9 p-1 bg-white rounded-lg'>
                                <Image
                                    title='React JS'
                                    src={icon_react}
                                    alt="react-js"
                                />
                            </div>
                            <div className='w-9 h-9 p-1 bg-white rounded-lg'>
                                <Image
                                    title='HTML 5'
                                    src={icon_html}
                                    alt="html5"
                                />
                            </div>
                            <div className='w-9 h-9 p-1 bg-white rounded-lg'>
                                <Image
                                    title='CSS 3'
                                    src={icon_css}
                                    alt="css3"
                                />
                            </div>
                            <div className='w-9 h-9 p-1 bg-white rounded-lg'>
                                <Image
                                    title='Git'
                                    src={icon_git}
                                    alt="git"
                                />
                            </div>
                        </div>
                    </li>
                    <li className='w-full p-5 bg-container rounded-lg'>
                        <h4 className='mb-2 font-semibold text-2xl'>Desarrollo Mobile</h4>
                        <p className='mb-8 font-light'>Aprendiz en el mundo del desarrollo de aplicaciones m&oacute;viles, utilizando React Native para crear soluciones m&oacute;viles multiplataforma.</p>
                        <h6 className='text-lg font-semibold'>Tecnologias y herramientas:</h6>
                        <div className='mt-1 flex-row gap-3 justify-start'>
                            <div className='w-9 h-9 p-1 bg-white rounded-lg'>
                                <Image
                                    title='React Native'
                                    src={icon_react}
                                    alt="react-native"
                                />
                            </div>
                            <div className='w-9 h-9 p-1 bg-white rounded-lg'>
                                <Image
                                    title='Tailwind'
                                    src={icon_tailwind}
                                    alt="tailwind"
                                />
                            </div>
                        </div>
                    </li>
                    <li className='w-full p-5 bg-container rounded-lg'>
                        <h4 className='mb-2 font-semibold text-2xl'>Administraci&oacute;n de Servidores</h4>
                        <p className='mb-8 font-light'>Administrador de servidores con conocimientos b&aacute;sicos de Linux. Siempre estoy dispuesto a aprender y mejorar mis habilidades en este campo en constante evoluci&oacute;n.</p>
                        <h6 className='text-lg font-semibold'>Tecnologias y herramientas:</h6>
                        <div className='mt-1 flex-row gap-3 justify-start'>
                            <div className='w-9 h-9 p-1 bg-white rounded-lg'>
                                <Image
                                    title='AWS'
                                    src={icon_aws}
                                    alt="aws"
                                />
                            </div>
                            <div className='w-9 h-9 p-1 bg-white rounded-lg'>
                                <Image
                                    title='Git'
                                    src={icon_git}
                                    alt="git"
                                />
                            </div>
                        </div>
                    </li>
                </ul>
            </Motion.div>
            <BottomBar config={{ active: 'skills' }} />
        </>
    )
}

export default skills