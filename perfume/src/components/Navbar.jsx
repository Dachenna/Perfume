import { useState, useEffect } from 'react'

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <div className='relative z-50'>
      <nav className={`fixed top-0 left-0 right-0 transition-all duration-300  ${
        scrolled ? `bg-gray-300 dark:bg-gray-700 backdrop-blur-md shadow-lg` : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className='flex items-center justify-between h-14 leading-1'>            

            {/* links 1 */}
            <ul className='flex items-center '>
              <li><a href="#">About</a></li>
              <li><a href="#">Collection</a></li>
            </ul>
            {/* Brand Name */}
            <div className='shrink-0'>
              <a href="/" className='flex items-center'>
                <span className='text-2xl font-extrabold tracking-tight'>
                  <h2 className='text-2xl'>Chapac</h2>
                </span>
              </a>
            </div>

            {/* Links 2 */}
             <ul className='flex items-stretch text-black '>
              <li ><a href="#">Contact us</a></li>
              <li><a href="#">Events</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
