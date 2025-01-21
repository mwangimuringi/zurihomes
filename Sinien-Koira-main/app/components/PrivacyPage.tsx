import { motion } from 'framer-motion'
import PrivacyTxt from './PrivacyTxt'

export default function ServicePage (): JSX.Element {
  return (

        <div className="bg-white items-center justify-center min-h-screen pb-40">
            <div className='container mx-auto'>
                <div className='mx-auto justify-center text-black items-center flex'>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                        <h1 className="text-3xl mb-16 mt-12 sm:text-4xl mx-auto text-center font-bold text-black  w-full sm:w-[700px]">
                            Zásady ochrany osobních údajů
                        </h1>
                    </motion.div>

                </div>
                <PrivacyTxt />
            </div>
        </div>

  )
}
