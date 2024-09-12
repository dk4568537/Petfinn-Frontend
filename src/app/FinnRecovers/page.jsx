import React from 'react'

const page = () => {
  return (
    <div className=' bg-slate-50 flex justify-center items-center flex-col'>
        <div className='flex items-center justify-center text-center py-10'>
            <h1 className=' w-full font-semibold text-[#161345] md:text-4xl lg:text-6xl'>Finn recovers twice as much plastic <br /> from the environment as we use in <br /> our packaging.</h1>
        </div>
        <div className=' rounded-lg p-5 py-10 my-10 flex justify-center items-center text-center gap-5 flex-col bg-[#08b864] text-white'>
            <p className='md:w-[500px] lg:w-[970px] w-full  md:text-lg lg:text-2xl'>It’s estimated that about <span className=' font-bold'>300 million pounds of plastic waste</span> is produced annually by the pet food industry, in just the United States alone.</p>
            <h3 className='md:w-[500px] lg:w-[970px] w-full  md:text-xl lg:text-2xl '>According to the industry, much of the plastic packaging is made of non-recyclable or hard-to-recycle materials, which equates to abouts <span className=' font-bold'> 99% of pet food packaging ending in landfills or oceans.</span></h3>
        </div>
    </div>
  )
}

export default page