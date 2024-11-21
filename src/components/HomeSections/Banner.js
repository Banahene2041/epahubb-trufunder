import { assets } from "../../assets/assets"

const Banner = () => {
  return (
    <section className='h-[60rem] flex justify-between w-full bg-[#0E221D] text-white'>
      <div className='w-[40%] px-[7%]'>
        <h2 className='text-[33px] mt-[14rem] text-[#00D094] font-semibold'>
          TruFunder
        </h2>
        <h1 className='banner-title capitalize text-[88px] leading-[98px] font-semibold mt-[1rem]'>
          unleashing <br className='hidden 2xl:block' />
          <span className='mr-3'>your</span>
          <span className='relative inline-block'>
            <span className='relative z-10'>Trading</span>
            <span
              className='absolute bottom-6 left-2 w-[95%] h-[10px] rounded-full bg-gradient-to-r from-[#00D094] to-[#FED202] pointer-events-none'
              style={{ transform: "translateY(100%)" }}
              aria-hidden='true'
            />
          </span>
          <span className='ml-1'>Potentials</span>
        </h1>
        <div className='border-2 border-red-500 mt-[10rem]'>
          <h1 className="capitalize text-[24px]">Follow Us</h1>
        </div>
      </div>
      <div className='w-[60%] flex items-center justify-center'>
        <div className='h-[50rem] w-[50rem] banner-image-container relative'>
          <div className='bg-[#FFFFFF] text-black absolute right-[-4rem] top-[40%] w-[22rem] p-[1rem] rounded-[10px]'>
            <p className='text-[22px]'>Last Year Winning Ratio</p>
            <div className='flex items-center justify-between mt-[1rem]'>
              <div>
                <h1 className='text-[#00D094] text-[24px] relative flex gap-8 font-medium'>
                  8
                  <span className='absolute -bottom-[.4rem] left-[.8rem]'>
                    4.9
                  </span>
                  %
                </h1>
                <p className='flex items-center gap-2 mt-[1rem] text-[18px] font-normal'>
                  <span className='grid items-center'>
                    <img src={assets.arrow_slight} alt='' />
                  </span>
                  +6.39%
                </p>
              </div>
              <div>
                <img
                  src={assets.banner_graph_image}
                  className='w-[9rem]'
                  alt=''
                />
              </div>
            </div>
          </div>
          <h2 className='absolute left-[8rem] bottom-[5rem] text-[24px] leading-[26px] font-sans'>
            Empower your journey through the markets. Trade with precision,
            seize opportunities, and unlock your financial potential with
            Trufunder
          </h2>
        </div>
      </div>
    </section>
  )
}
export default Banner
