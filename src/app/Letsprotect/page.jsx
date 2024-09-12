import React from 'react'

const page = () => {
  return (
    <div className=" relative object-cover opacity-1 flex justify-center flex-col items-center">
        <img className=" md:min-h-screen w-full" src="/images/protect.png" alt="" />
        <div className=" flex justify-center items-center flex-col gap-4 absolute text-center text-white">
            <h1 className=" text-4xl lg:text-8xl font-semibold">Let’s protect the <br /> planet for future <br /> generations of pups.</h1>
        </div>
      </div>
  )
}

export default page