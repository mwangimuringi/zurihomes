import Link from 'next/link'
import Image from 'next/image'

export default function Navbar (): JSX.Element {
  return (
        <div className="drawer " >
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar flex w-full justify-between h-22 sm:h-24 lg:px-24 px-10 bg-white text-black shadow-md">
                    <div className="navbar-start">
                        <Link href="/">
                            <p className='text-3xl font-bold whitespace-nowrap lg:text-4xl md:text-3xl  ' style={{
                              background: 'radial-gradient(circle at -1% 57.5%, rgb(19, 170, 82) 0%, rgb(0, 102, 43) 90%)',
                              WebkitBackgroundClip: 'text',
                              MozBackgroundClip: 'text',
                              backgroundClip: 'text',
                              color: 'transparent'
                            }}>Sinien Koira</p>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-blue-white font-bold text-xl outline-none">
                            <Link href="/#about-section"><button className="btn-lg rounded-xl btn-ghost">O nás</button></Link>
                            <Link href="/gallery"><button className="btn-lg rounded-xl btn-ghost">Galerie</button></Link>
                            <Link href="/objednavka-dreva"><button className="btn-lg rounded-xl btn-ghost">Objednávka dřeva</button></Link>
                            <Link href="/contact"><button className="btn-lg rounded-xl btn-ghost">Kontakt</button></Link>
                        </ul>
                    </div>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                </div>
            </div>

            <div className="drawer-side h-screen lg:hidden z-50">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 pt-8 min-h-screen bg-white text-2xl font-semibold text-green-600"
                    style={{
                      transition: 'all 0.3s ease-in-out',
                      boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)'
                    }}>
                    <Link href="/"><Image className="mb-5 mx-auto rounded-xl" width={112} height={112} src="/images/logo.png" alt="Logo" /></Link>
                    <hr className="border-black mb-5" />
                    <Link href="/#about-section">
                        <button className='btn-ghost rounded-xl py-2 transition-colors duration-300'>O nás</button>
                    </Link>

                    <Link href="/gallery">
                        <button className='btn-ghost rounded-xl py-2 transition-colors duration-300'>Galerie</button>
                    </Link>

                    <Link href="/objednavka-dreva">
                        <button className='btn-ghost rounded-xl py-2 transition-colors duration-300'>Objednávka dřeva</button>
                    </Link>

                    <Link href="/contact">
                        <button className='btn-ghost rounded-xl py-2 transition-colors duration-300'>Kontakt</button>
                    </Link>

                </ul>
            </div>
        </div>
  )
}
