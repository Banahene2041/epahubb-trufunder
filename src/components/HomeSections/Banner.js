import { assets } from "../../assets/assets"
import { exchange } from "../../data"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"

const Banner = () => {
  return (
    <section className='h-[62rem] flex justify-between w-full bg-[#0E221D] text-white relative'>
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
        <div className='mt-[5rem]'>
          <h1 className='capitalize text-[24px]'>Follow Us</h1>
          <div className='mt-4'>
            <ul className='flex items-center gap-4'>
              <li className='p-2 border-[1px] border-white rounded-full'>
                <a href='https://youtube.com'>
                  <img src={assets.youtube_logo} alt='' />
                </a>
              </li>
              <li className='p-2 border-[1px] border-white rounded-full'>
                <a href='https://twitter.com'>
                  <img src={assets.twitter_logo} alt='' />
                </a>
              </li>
              <li className='p-2 border-[1px] border-white rounded-full'>
                <a href='https://youtube.com'>
                  <img src={assets.telegram_logo} alt='' />
                </a>
              </li>
              <li className='p-2 border-[1px] border-white rounded-full'>
                <a href='https://youtube.com'>
                  <img src={assets.instagram_logo} alt='' />
                </a>
              </li>
              <li className='p-2 border-[1px] border-white rounded-full'>
                <a href='https://youtube.com'>
                  <img src={assets.mop_logo} alt='' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-[60%] flex items-center justify-center mt-[-8rem]'>
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
      <div className='absolute bottom-[3rem] w-full flex items-center pl-[3rem] pr-[1rem]'>
        <Splide
          options={{
            type: "loop",
            perPage: 3,
            autoplay: true,
            pagination: false,
            arrows: false,
            drag: "free",
            gap: "3rem",
          }}
          className='overflow-hidden'
        >
          {exchange.map((items, index) => {
            return (
              <SplideSlide
                key={index}
                className='px-[1rem] py-[1rem] bg-[#008905] flex items-center justify-between rounded-[10px]'
              >
                <div className='w-[10%] flex items-center'>
                  <div className='bg-[#FFFFFF] px-[.6rem] py-[1.1rem] rounded-full'>
                    <img
                      src={
                        index % 2
                          ? assets.arrow_slight_down
                          : assets.arrow_slight
                      }
                      className='w-4'
                      alt=''
                    />
                  </div>
                </div>
                <div className='flex flex-col justify-center w-[60%]'>
                  <div className='flex items-center gap-4'>
                    <h1 className='text-white text-[30px] font-bold'>
                      {items.currency_name}
                    </h1>
                    <div>
                      <img
                        src={items.arrow_left_right_img}
                        className='w-[1.3rem]'
                        alt=''
                      />
                    </div>
                    <h1 className='text-white text-[30px] font-bold'>
                      {items.country_code}
                    </h1>
                    <p className='text-[19px] mt-[1rem]'>{items.rate}</p>
                  </div>
                  <div className='mt-[1.5rem] flex items-center justify-between'>
                    <div className='flex items-center gap-3 text-[20px] font-medium'>
                      <p>{items.price_iniate}</p>
                      <p>{items.country_code}</p>
                    </div>
                    <div>
                      <p className='font-medium text-[20px]'>
                        {items.price_final}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='w-[30%] flex items-center justify-center'>
                  <button className='uppercase flex items-center gap-2 py-1 px-5 border-2 border-white border-solid rounded-[50px] text-[20px] font-medium'>
                    <span className='grid items-center'>
                      <img src={assets.arrow_download} alt='' />
                    </span>
                    trade
                  </button>
                </div>
              </SplideSlide>
            )
          })}
        </Splide>
      </div>
    </section>
  )
}
export default Banner
