import { assets } from "../../assets/assets"

const Hero = () => {
  return (
    <section className='h-[70rem] z-10 relative bg-gradient-to-b from-[#091D18] to-[#29816B]'>
      <div className='absolute -z-10 bottom-0 left-0'>
        <img src={assets.hero_bull_image} alt='' />
      </div>
      <div className='absolute -z-10 bottom-[4rem] right-0'>
        <img src={assets.hero_cheetar_image} alt='' />
      </div>
      <h1 className='capitalize text-[#00D094] text-center pt-[6rem] text-[48px] font-semibold'>
        how it works
      </h1>
      <p className="text-center text-white">Evaluation in Trufunder accesses performance for a funded account.</p>
    </section>
  )
}
export default Hero
