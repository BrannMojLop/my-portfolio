import React, { useEffect, useRef, useState } from 'react'

// Frame Motion
import { motion as Motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

// Components
import Image from 'next/image'
import BottomBar from '@/components/BottomBar'
import Link from 'next/link'

// Assets
import avatar from '@/public/avatar.png'
import { IoLogoLinkedin, IoLogoGithub, IoLogoWhatsapp, IoDiamond, IoDice, IoArrowForward } from "react-icons/io5";
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

const Home = () => {
  const control = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const animateVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, y: 80 }
  }

  return (
    <>
      <Motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 80 }}
        transition={{ duration: 0.8 }}
        className='p-8 2xl:px-56 xl:px-48 lg:px-28 md:px-20'>
        <div>
          <div className="md:hidden p-1 bg-gradient-to-tr from-secondary to-tertiary rounded-full">
            <div className='p-3 bg-primary w-52 h-52 rounded-full overflow-hidden'>
              <Image
                src={avatar}
                alt="Image-Profile"
                className='w-full'
              />
            </div>
          </div>
          <div className='md:hidden flex-row mt-8 flex gap-5'>
            <Link href='https://www.linkedin.com/in/brandon-mojica-dev' className='hover:text-5xl'>
              <IoLogoLinkedin size={35} />
            </Link>
            <Link href='https://github.com/BrannMojLop'>
              <IoLogoGithub size={35} />
            </Link>
            <Link href='https://api.whatsapp.com/send?phone=5529282277'>
              <IoLogoWhatsapp size={35} />
            </Link>
          </div>
          <h1 className='my-10 text-5xl xl:tracking-wide font-semibold text-center bg-gradient-to-br from-secondary to-tertiary bg-clip-text text-transparent '>
            ¡Hola! Soy Brandon Mojica, ingeniero de software y desarrollador fullstack de aplicaciones web
          </h1>
        </div>
        <section className='hidden md:flex w-full flex-row mt-24'>
          <div className='w-2/3 items-start flex-row gap-11'>
            <div className="p-1 bg-gradient-to-tr from-secondary to-tertiary rounded-full">
              <div className='p-3 bg-primary w-52 lg:w-44 lg:h-44 md:w-36 md:h-36 h-52 rounded-full overflow-hidden'>
                <Image
                  src={avatar}
                  alt="Image-Profile"
                  className='w-full'
                />
              </div>
            </div>
            <div className='justify-start items-start'>
              <h2 className='my-3 md:text-3xl font-semibold text-white'>Sobre mi</h2>
              <p className='lg:text-xl text-justify leading-relaxed lg:leading-none'>
                Soy un desarrollador de aplicaciones web con 1 año y medio de experiencia en ReactJS y Python.
                Adem&aacute;s, cuento con m&aacute;s de 3 años liderando y planificando proyectos de software.
                Me apasiona la tecnolog&iacute;a y el desarrollo de soluciones innovadoras que resuelvan problemas reales.
              </p>
            </div>
          </div>
          <div className='w-1/3 items-start 2xl:pl-44 lg:pl-28 md:pl-24'>
            <p className='lg:text-3xl md:text-xl font-semibold text-white'>Contactame</p>
            <div className='w-full flex-row justify-start mt-8 gap-5'>
              <Link href='https://www.linkedin.com/in/brandon-mojica-dev' className='hover:text-5xl'>
                <IoLogoLinkedin className='xl:text-[2.5rem] md:text-[2rem] cursor-pointer' />
              </Link>
              <Link href='https://github.com/BrannMojLop'>
                <IoLogoGithub className='xl:text-[2.5rem] md:text-[2rem] cursor-pointer' />
              </Link>
              <Link href='https://api.whatsapp.com/send?phone=5529282277'>
                <IoLogoWhatsapp className='xl:text-[2.5rem] md:text-[2rem] cursor-pointer' />
              </Link>
            </div>
          </div>
        </section>
        <section className='hidden md:flex w-full flex-row mt-24 gap-32 lg:gap-10 md:gap-7'>
          <div className='w-1/2 justify-start items-start'>
            <h2 className='my-3 md:text-3xl font-semibold text-white'>Lo que hago</h2>
            <p className='lg:text-xl text-justify leading-relaxed lg:leading-none'>
              Mi especialidad es la gesti&oacute;n de procesos y la mejora continua mediante la evaluaci&oacute;n de los mismos.
              Utilizo mis habilidades en lógica de programaci&oacute;n para crear soluciones tecnol&oacute;gicas que implementen
              mejoras efectivas y sostenibles.
            </p>
          </div>
          <div className='w-1/2 flex-row gap-14 lg:gap-5 md:gap-3'>
            <div className='relative w-1/2 h-64 px-[5%] pb-[5%] pt-[10%] justify-start bg-container text-white  text-center rounded-md'>
              <div className='absolute -top-8'>
                <div className="p-0.5 bg-gradient-to-tr from-secondary to-tertiary rounded-full">
                  <div className='p-3 bg-container rounded-full overflow-hidden'>
                    <IoDice className='2xl:text-[2.5rem] lg:text-[2rem] md:text-[1.5rem]' />
                  </div>
                </div>
              </div>
              <h4 className='mb-5 font-semibold 2xl:text-xl md:text-lg'>Metodolog&iacute;as</h4>
              <p className='text-center xl:text-lg'>Capacidad de adaptaci&oacute;n a metologías &aacute;giles de desarrollo como SCRUM</p>
            </div>
            <div className='relative w-1/2 h-64 px-[5%] pb-[5%] pt-[10%] justify-start bg-container text-white  text-center rounded-md'>
              <div className='absolute -top-8'>
                <div className="p-0.5 bg-gradient-to-tr from-secondary to-tertiary rounded-full">
                  <div className='p-3 bg-container rounded-full overflow-hidden'>
                    <IoDiamond className='2xl:text-[2.5rem] lg:text-[2rem] md:text-[1.5rem]' />
                  </div>
                </div>
              </div>
              <h4 className='mb-5 font-semibold 2xl:text-xl md:text-lg'>Astucia</h4>
              <p className='text-center xl:text-lg'>Razonamiento l&oacute;gico y analítico para soluci&oacute;n de problemas</p>
            </div>
          </div>
        </section>
        <section className='md:hidden w-full my-8'>
          <h2 className='my-3 text-2xl text-center font-semibold text-white'>Sobre mi</h2>
          <p className='text-justify'>
            Soy un desarrollador de aplicaciones web con 1 año y medio de experiencia en ReactJS y Python.
            Adem&aacute;s, cuento con m&aacute;s de 3 años liderando y planificando proyectos de software.
            Me apasiona la tecnolog&iacute;a y el desarrollo de soluciones innovadoras que resuelvan problemas reales.
          </p>
        </section>
        <section className='md:hidden w-full my-8'>
          <div className='flex-col mb-8'>
            <h2 className='my-3 text-2xl text-center font-semibold text-white'>Lo que hago</h2>
            <p className='text-justify'>
              Mi especialidad es la gesti&oacute;n de procesos y la mejora continua mediante la evaluaci&oacute;n de los mismos.
              Utilizo mis habilidades en lógica de programaci&oacute;n para crear soluciones tecnol&oacute;gicas que implementen
              mejoras efectivas y sostenibles.
            </p>
          </div>
          <div className='my-14 w-full flex-row gap-3'>
            <Motion.div
              ref={ref}
              initial="hidden"
              animate={control}
              variants={animateVariants}
              className='relative w-1/2 h-64 px-[5%] pb-[5%] pt-[10%] justify-start bg-container text-white  text-center rounded-md'
            >
              <div className='absolute -top-8'>
                <div className="p-0.5 bg-gradient-to-tr from-secondary to-tertiary rounded-full">
                  <div className='p-3 bg-container rounded-full overflow-hidden'>
                    <IoDice size={25} />
                  </div>
                </div>
              </div>
              <h4 className='mb-5 font-semibold text-lg'>Metodolog&iacute;as</h4>
              <p className='text-left'>Capacidad de adaptaci&oacute;n a metolog&iacute;as ágiles de desarrollo como SCRUM</p>
            </Motion.div>
            <Motion.div
              ref={ref}
              initial="hidden"
              animate={control}
              variants={animateVariants}
              className='relative w-1/2 h-64 px-[5%] pb-[5%] pt-[10%] justify-start bg-container text-white  text-center rounded-md'
            >
              <div className='absolute -top-8'>
                <div className="p-0.5 bg-gradient-to-tr from-secondary to-tertiary rounded-full">
                  <div className='p-3 bg-container rounded-full overflow-hidden'>
                    <IoDiamond size={25} />
                  </div>
                </div>
              </div>
              <h4 className='mb-5 font-semibold text-lg'>Astucia</h4>
              <p className='text-left'>Razonamiento l&oacute;gico y analítico para soluci&oacute;n de problemas</p>
            </Motion.div>
          </div>
        </section>
        <section className='hidden md:flex flex-col mt-36 w-full items-start'>
          <h2 className='mb-14 md:text-3xl font-semibold text-white'>Proyectos destacados</h2>
          <ul className='flex-1 pb-20 flex flex-col gap-20'>
            <li className='w-full flex 2xl:gap-8 md:gap-6'>
              <div className='w-full bg-container'>
                <div className='w-full px-5 items-end'>
                  <button className='p-3 bg-[#3F4152] rounded-lg' type='button'>
                    <IoArrowForward className='xl:text-[1.5rem] lg:text-[1rem] md:text-[1rem]' />
                  </button>
                </div>
                <div className='w-full mb-8 flex-row 2xl:gap-3 lg:gap-2 md:gap-1'>
                  <div className='2xl:w-12 2xl:h-12 md:w-8 md:h-8 p-3 md:p-1 bg-white rounded-md'>
                    <Image
                      title='Python'
                      src={icon_py}
                      alt="python"
                    />
                  </div>
                  <div className='2xl:w-12 2xl:h-12 md:w-8 md:h-8 p-3 md:p-1 bg-white rounded-md'>
                    <Image
                      title='Git'
                      src={icon_git}
                      alt="git"
                    />
                  </div>
                  <div className='2xl:w-12 2xl:h-12 md:w-8 md:h-8 p-3 md:p-1 bg-white rounded-md'>
                    <Image
                      title='MySQL'
                      src={icon_mySql}
                      alt="mysql"
                    />
                  </div>
                  <div className='2xl:w-12 2xl:h-12 md:w-8 md:h-8 p-3 md:p-1 bg-white rounded-md'>
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
                  className='w-[200px] md:w-[350px] xl:w-[400px] h-auto'
                />
              </div>
              <div className='items-start'>
                <h3 className='mb-3 2xl:text-xl lg:text-lg text-white'>Web Development</h3>
                <h2 className='mb-7 text-3xl font-semibold'>Bolder Landingpage</h2>
                <p className='2xl:text-xl lg:text-lg text-white font-light'>Serrow restructured and designed core pages, creating
                  interactive elements that put users in control and
                  allowed them to discover the information needed to make a decision.
                </p>
              </div>
            </li>
            <li className='w-full flex 2xl:gap-8 lg:gap-6 md:gap-4'>
              <div className='w-full bg-container'>
                <div className='w-full px-5 items-end'>
                  <button className='p-3 bg-[#3F4152] rounded-lg' type='button'>
                    <IoArrowForward className='xl:text-[1.5rem] lg:text-[1rem] md:text-[1rem]' />
                  </button>
                </div>
                <div className='w-full mb-8 flex-row 2xl:gap-3 lg:gap-2 md:gap-1'>
                  <div className='2xl:w-12 2xl:h-12 md:w-8 md:h-8 p-3 md:p-1 bg-white rounded-md'>
                    <Image
                      title='Python'
                      src={icon_py}
                      alt="python"
                    />
                  </div>
                  <div className='2xl:w-12 2xl:h-12 md:w-8 md:h-8 p-3 md:p-1 bg-white rounded-md'>
                    <Image
                      title='Git'
                      src={icon_git}
                      alt="git"
                    />
                  </div>
                  <div className='2xl:w-12 2xl:h-12 md:w-8 md:h-8 p-3 md:p-1 bg-white rounded-md'>
                    <Image
                      title='MySQL'
                      src={icon_mySql}
                      alt="mysql"
                    />
                  </div>
                  <div className='2xl:w-12 2xl:h-12 md:w-8 md:h-8 p-3 md:p-1 bg-white rounded-md'>
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
                  className='w-[200px] md:w-[350px] xl:w-[400px] h-auto'
                />
              </div>
              <div className='items-start'>
                <h3 className='mb-3 2xl:text-xl lg:text-lg text-white'>Web Development</h3>
                <h2 className='mb-7 text-3xl font-semibold'>Bolder Landingpage</h2>
                <p className='2xl:text-xl lg:text-lg text-white font-light'>Serrow restructured and designed core pages, creating
                  interactive elements that put users in control and
                  allowed them to discover the information needed to make a decision.
                </p>
              </div>
            </li>
            <li className='w-full flex 2xl:gap-8 lg:gap-6 md:gap-4'>
              <div className='w-full bg-container'>
                <div className='w-full px-5 items-end'>
                  <button className='p-3 bg-[#3F4152] rounded-lg' type='button'>
                    <IoArrowForward className='xl:text-[1.5rem] lg:text-[1rem] md:text-[1rem]' />
                  </button>
                </div>
                <div className='w-full mb-8 flex-row 2xl:gap-3 lg:gap-2 md:gap-1'>
                  <div className='2xl:w-12 2xl:h-12 md:w-8 md:h-8 p-3 md:p-1 bg-white rounded-md'>
                    <Image
                      title='Python'
                      src={icon_py}
                      alt="python"
                    />
                  </div>
                  <div className='2xl:w-12 2xl:h-12 md:w-8 md:h-8 p-3 md:p-1 bg-white rounded-md'>
                    <Image
                      title='Git'
                      src={icon_git}
                      alt="git"
                    />
                  </div>
                  <div className='2xl:w-12 2xl:h-12 md:w-8 md:h-8 p-3 md:p-1 bg-white rounded-md'>
                    <Image
                      title='MySQL'
                      src={icon_mySql}
                      alt="mysql"
                    />
                  </div>
                  <div className='2xl:w-12 2xl:h-12 md:w-8 md:h-8 p-3 md:p-1 bg-white rounded-md'>
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
                  className='w-[200px] md:w-[350px] xl:w-[400px] h-auto'
                />
              </div>
              <div className='items-start'>
                <h3 className='mb-3 2xl:text-xl lg:text-lg text-white'>Web Development</h3>
                <h2 className='mb-7 text-3xl font-semibold'>Bolder Landingpage</h2>
                <p className='2xl:text-xl lg:text-lg text-white font-light'>Serrow restructured and designed core pages, creating
                  interactive elements that put users in control and
                  allowed them to discover the information needed to make a decision.
                </p>
              </div>
            </li>            <li className='w-full flex 2xl:gap-8 lg:gap-6 md:gap-4'>
              <div className='w-full bg-container'>
                <div className='w-full px-5 items-end'>
                  <button className='p-3 bg-[#3F4152] rounded-lg' type='button'>
                    <IoArrowForward className='xl:text-[1.5rem] lg:text-[1rem] md:text-[1rem]' />
                  </button>
                </div>
                <div className='w-full mb-8 flex-row 2xl:gap-3 lg:gap-2 md:gap-1'>
                  <div className='2xl:w-12 2xl:h-12 md:w-8 md:h-8 p-3 md:p-1 bg-white rounded-md'>
                    <Image
                      title='Python'
                      src={icon_py}
                      alt="python"
                    />
                  </div>
                  <div className='2xl:w-12 2xl:h-12 md:w-8 md:h-8 p-3 md:p-1 bg-white rounded-md'>
                    <Image
                      title='Git'
                      src={icon_git}
                      alt="git"
                    />
                  </div>
                  <div className='2xl:w-12 2xl:h-12 md:w-8 md:h-8 p-3 md:p-1 bg-white rounded-md'>
                    <Image
                      title='MySQL'
                      src={icon_mySql}
                      alt="mysql"
                    />
                  </div>
                  <div className='2xl:w-12 2xl:h-12 md:w-8 md:h-8 p-3 md:p-1 bg-white rounded-md'>
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
                  className='w-[200px] md:w-[350px] xl:w-[400px] h-auto'
                />
              </div>
              <div className='items-start'>
                <h3 className='mb-3 2xl:text-xl lg:text-lg text-white'>Web Development</h3>
                <h2 className='mb-7 text-3xl font-semibold'>Bolder Landingpage</h2>
                <p className='2xl:text-xl lg:text-lg text-white font-light'>Serrow restructured and designed core pages, creating
                  interactive elements that put users in control and
                  allowed them to discover the information needed to make a decision.
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section className='hidden md:flex flex-col mt-36 w-full items-start'>
          <h2 className='mb-14 md:text-3xl font-semibold text-white'>Habilidades y conocimientos</h2>
          <ul className='flex-1 pb-20 grid grid-cols-2 2xl:gap-10 lg:gap-8 md:gap-4'>
            <li className='w-full flex flex-col h-auto 2xl:p-12 lg:p-8 md:p-4 bg-container rounded-lg'>
              <div className='w-full items-start'>
                <h4 className='mb-3 font-semibold 2xl:text-2xl md:text-xl'>Desarrollo BackEnd</h4>
                <p className='font-light 2xl:text-base md:text-sm xl:leading-relaxed'>Cuento con 1.5 años de experiencia en creación de APIs del lado del servidor.</p>
              </div>
              <div className='flex-1 mt-10 justify-end items-start'>
                <h6 className='2xl:text-2xl md:text-xl font-semibold'>Tecnologias y herramientas:</h6>
                <div className='mt-2 flex-row gap-3 justify-start'>
                  <div className='lg:w-12 lg:h-12 md:w-10 md:h-10 p-3 md:p-1 bg-white rounded-lg'>
                    <Image
                      title='Python'
                      src={icon_py}
                      alt="python"
                    />
                  </div>
                  <div className='lg:w-12 lg:h-12 md:w-10 md:h-10 p-3 md:p-1 bg-white rounded-lg'>
                    <Image
                      title='Git'
                      src={icon_git}
                      alt="git"
                    />
                  </div>
                  <div className='lg:w-12 lg:h-12 md:w-10 md:h-10 p-3 md:p-1 bg-white rounded-lg'>
                    <Image
                      title='MySQL'
                      src={icon_mySql}
                      alt="mysql"
                    />
                  </div>
                  <div className='lg:w-12 lg:h-12 md:w-10 md:h-10 p-3 md:p-1 bg-white rounded-lg'>
                    <Image
                      title='GitHub'
                      src={icon_github}
                      alt="github"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className='w-full flex flex-col h-auto 2xl:p-12 lg:p-8 md:p-4 bg-container rounded-lg'>
              <div className='w-full items-start'>
                <h4 className='mb-3 font-semibold 2xl:text-2xl md:text-xl'>Desarrollo FrontEnd</h4>
                <p className='font-light 2xl:text-base md:text-sm xl:leading-relaxed'>Me especializo en la creaci&oacute;n de interfaces de usuario atractivas y funcionales, utilizando tecnolog&iacute;as modernas para garantizar una experiencia de usuario de alta calidad.</p>
              </div>
              <div className='flex-1 mt-10 justify-end items-start'>
                <h6 className='2xl:text-2xl md:text-xl font-semibold'>Tecnologias y herramientas:</h6>
                <div className='mt-2 flex-row gap-3 justify-start'>
                  <div className='lg:w-12 lg:h-12 md:w-10 md:h-10 p-3 md:p-1 bg-white rounded-lg'>
                    <Image
                      title='React JS'
                      src={icon_react}
                      alt="react-js"
                    />
                  </div>
                  <div className='lg:w-12 lg:h-12 md:w-10 md:h-10 p-3 md:p-1 bg-white rounded-lg'>
                    <Image
                      title='HTML 5'
                      src={icon_html}
                      alt="html5"
                    />
                  </div>
                  <div className='lg:w-12 lg:h-12 md:w-10 md:h-10 p-3 md:p-1 bg-white rounded-lg'>
                    <Image
                      title='CSS 3'
                      src={icon_css}
                      alt="css3"
                    />
                  </div>
                  <div className='lg:w-12 lg:h-12 md:w-10 md:h-10 p-3 md:p-1 bg-white rounded-lg'>
                    <Image
                      title='Git'
                      src={icon_git}
                      alt="git"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className='w-full flex flex-col h-auto 2xl:p-12 lg:p-8 md:p-4 bg-container rounded-lg'>
              <div className='w-full items-start'>
                <h4 className='mb-3 font-semibold 2xl:text-2xl md:text-xl'>Desarrollo Mobile</h4>
                <p className='font-light 2xl:text-base md:text-sm xl:leading-relaxed'>Aprendiz en el mundo del desarrollo de aplicaciones m&oacute;viles, utilizando React Native para crear soluciones m&oacute;viles multiplataforma.</p>
              </div>
              <div className='flex-1 mt-10 justify-end items-start'>
                <h6 className='2xl:text-2xl md:text-xl font-semibold'>Tecnologias y herramientas:</h6>
                <div className='mt-2 flex-row gap-3 justify-start'>
                  <div className='lg:w-12 lg:h-12 md:w-10 md:h-10 p-3 md:p-1 bg-white rounded-lg'>
                    <Image
                      title='React Native'
                      src={icon_react}
                      alt="react-native"
                    />
                  </div>
                  <div className='lg:w-12 lg:h-12 md:w-10 md:h-10 p-3 md:p-1 bg-white rounded-lg'>
                    <Image
                      title='Tailwind'
                      src={icon_tailwind}
                      alt="tailwind"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className='w-full flex flex-col h-auto 2xl:p-12 lg:p-8 md:p-4 bg-container rounded-lg'>
              <div className='w-full items-start'>
                <h4 className='mb-3 font-semibold 2xl:text-2xl md:text-xl'>Administraci&oacute;n de Servidores</h4>
                <p className='font-light 2xl:text-base md:text-sm xl:leading-relaxed'>Administrador de servidores con conocimientos b&aacute;sicos de Linux. Siempre estoy dispuesto a aprender y mejorar mis habilidades en este campo en constante evoluci&oacute;n.</p>
              </div>
              <div className='flex-1 mt-10 justify-end items-start'>
                <h6 className='2xl:text-2xl md:text-xl font-semibold'>Tecnologias y herramientas:</h6>
                <div className='mt-2 flex-row gap-3 justify-start'>
                  <div className='lg:w-12 lg:h-12 md:w-10 md:h-10 p-3 md:p-1 bg-white rounded-lg'>
                    <Image
                      title='AWS'
                      src={icon_aws}
                      alt="aws"
                    />
                  </div>
                  <div className='lg:w-12 lg:h-12 md:w-10 md:h-10 p-3 md:p-1 bg-white rounded-lg'>
                    <Image
                      title='Git'
                      src={icon_git}
                      alt="git"
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </Motion.div>
      <BottomBar config={{ active: 'home' }} />
    </>
  )

}

export default Home;