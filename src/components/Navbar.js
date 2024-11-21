import { Link, useLocation } from "react-router-dom"
import { assets } from "../assets/assets"
import { links } from "../data"

const Navbar = () => {
  const location = useLocation()

  const isActiveLink = (href) => {
    return location.pathname === href ? `text-[#FED202]` : "text-[#FFFFFF]"
  }

  return (
    <header
      className='w-full h-[6rem] flex items-center justify-center bg-[#FFFFFF]'
      style={{
        background: "linear-gradient(to right, #2F2F2F 40%, #168565, #00D094)",
      }}
    >
      <nav className='w-[78%] flex items-center justify-between mt-3'>
        <div className='flex items-center gap-2'>
          <div>
            <img src={assets.tru_funder_logo} alt='TruFunder Logo' />
          </div>
          <h1 className='text-[#008905] text-xl font-bold leading-[24px]'>
            TruFunder
          </h1>
        </div>
        <div className='nav-links flex'>
          {links.map((link, index) => (
            <ul key={index} className='flex items-center'>
              <li
                className={`mx-8 ${
                  index === 5 &&
                  "ml-24 bg-[#008905] text-[#FFFFFF] py-3 px-6 rounded-[8px]"
                }`}
              >
                <Link
                  to={link.path}
                  className={`capitalize leading-[26px] text-[22px] font-semibold ${isActiveLink(
                    `/${link.path}`
                  )}`}
                >
                  {link.text}
                </Link>
              </li>
            </ul>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
