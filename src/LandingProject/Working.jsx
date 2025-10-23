import React from 'react'
import { work } from '../../public/Data/Data'
import { Avatar } from '@mantine/core'

const Working = () => {
  return (
    <div className="mt-20 pb-10 relative">
      {/* Heading */}
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        How it <span className="text-bright-sun-400">Works</span>
      </div>
      <div className="text-lg mb-16 mx-auto text-mine-shaft-300 text-center max-w-2xl">
        Effortlessly navigate through the process and land your dream job.
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row px-6 lg:px-16 justify-between items-center gap-10 relative">
        {/* Illustration */}
        <div className="lg:w-1/2 flex justify-center">
          <img src="/Working/Girl.png" alt="girl" className="w-full max-w-md" />
        </div>

        {/* Steps and Profile Box */}
        <div className="relative">
          {/* Profile Box */}
          {/* Steps */}
          <div className="flex flex-col gap-8">
            {work.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="p-2.5 bg-bright-sun-300 rounded-full flex-shrink-0">
                  <img src={`/Working/${item.name}.png`} alt={item.name} className="h-12 w-12" />
                </div>
                <div>
                  <div className="text-mine-shaft-100 text-lg font-semibold">{item.name}</div>
                  <div className="text-mine-shaft-300">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Working
