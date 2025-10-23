import React from 'react'
import { Carousel } from '@mantine/carousel';
import { jobCategory } from '../../public/Data/Data';

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      {/* Heading */}
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        Browse <span className="text-bright-sun-400">Job </span>Category
      </div>
      <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center max-w-2xl">
        Explore diverse job opportunities tailored to your skills. Start your career journey today!
      </div>

      {/* Carousel */}
      <Carousel slideSize="22%" slideGap="md" loop align="start">
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center gap-3 border border-bright-sun-400 p-6 rounded-xl 
                            transition-all duration-300 hover:cursor-pointer hover:shadow-lg hover:shadow-bright-sun-300">
              
              {/* Icon */}
              <div className="p-3 bg-bright-sun-300 rounded-full">
                <img className="h-10 w-10" src={`/Category/${category.name}.png`} alt={category.name} />
              </div>
              
              {/* Title */}
              <div className="text-mine-shaft-200 text-lg font-semibold">
                {category.name}
              </div>

              {/* Description */}
              <div className="text-mine-shaft-400 text-sm text-center">
                {category.desc}
              </div>

              {/* Jobs */}
              <div className="text-bright-sun-400 text-base font-medium">
                {category.jobs}
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  )
}

export default JobCategory
