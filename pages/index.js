import React from 'react'

// Components
import Image from 'next/image'

// Assets
import avatar from '@/public/avatar.png'

const Home = () => {
  return (
    <div className='flex-col'>
      <div className='w-44 h-44 border-8 border-lime-500 rounded-full'>
        <Image
          src={avatar}
          alt="Image-Profile"
          className=''
        />
      </div>
      <div className='mt-8'>
        Contactame
      </div>
    </div>
  )
}

export default Home;