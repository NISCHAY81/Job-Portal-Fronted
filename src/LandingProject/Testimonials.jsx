import { Avatar, Rating } from '@mantine/core'
import React from 'react'
import { testimonials } from '../../public/Data/Data'

const Testimonials = () => {
  return (
  <div className="mt-20 pb-5">
  
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        What <span className="text-bright-sun-400">user </span> says about us?
      </div>
      <div className='flex justify-evenly'>
      {
          testimonials.map((data,index)=><div key={index} className='flex flex-col gap-3 w-[23%] border-bright-sun-400 p-3 border rounded-xl mt-10'>
        <div className='flex gap-2 items-center'>
            <Avatar className='!h-16 !w-16 ' src="avatar.png" alt="it's me" />
            <div>
                <div className='text-lg text-mine-shaft-100 font-semibold'>{data.name}</div>
               <Rating value={data.rating} fractions={2} readOnly/>
            </div>
        </div>
         <div className='text-xs text-mine-shaft-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias porro alias dolorum iusto asperiores enim vel, placeat pariatur dicta nemo et harum molestiae voluptate illo accusamus maiores laborum cumque.</div>
      </div>)
      }
      </div>
    </div>
  )
}

export default Testimonials
