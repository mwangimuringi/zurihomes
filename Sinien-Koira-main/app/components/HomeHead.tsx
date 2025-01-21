import { type CSSProperties } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomeHead (): JSX.Element {
  const bgStyle: CSSProperties = {
    backgroundImage: 'url(images/woods2.jpg)',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden'
  }

  const overlayStyle: CSSProperties = {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)'
  }

  const handleBouncerClick = (): any => {
    const element = document.getElementById('about-section')

    if (element != null) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="hero bg-white relative h-[90vh]" style={bgStyle}>
            <div style={overlayStyle} />

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                <div className="hero-content flex flex-col text-left">

                    <div className='max-w-[750px] sm:max-w-[800px]'>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-none">
                            Odborné  <span className="font-bold text-green-600">lesnictví</span> a  <span className="font-bold text-green-600">výsadba stromů</span> pro lepší budoucnost
                        </h1>
                        <p className="py-6 text-xl text-white font-bold">Nabízíme kvalitní palivové dříví</p>

                        <div className="flex flex-row gap-4 justify-left">
                            <Link href="/objednavka-dreva">
                                <button className="btn btn-primary py-2 text-white hover:bg-green-800 bg-green-600 border-none">
                                    Objednávka dřeva
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="btn btn-primary py-2 hover:bg-gray-400 bg-gray-100 border-none text-green-700">
                                    Kontakt
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </motion.div>

            <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 animate-bounce cursor-pointer" onClick={handleBouncerClick}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>

        </div>
  )
}
