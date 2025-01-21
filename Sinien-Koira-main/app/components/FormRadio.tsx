import Link from 'next/link'
import { useState } from 'react'

export default function FormRadio ({ setIsDeliverySelected }: { setIsDeliverySelected: (isDeliverySelected: boolean) => void }): JSX.Element {
  const [selectedOption, setSelectedOption] = useState('')
  const [, setDeliveryOptionSelected] = useState(false)

  const handleRadioChange = (e: { target: { value: React.SetStateAction<string> } }): any => {
    setSelectedOption(e.target.value)
    setDeliveryOptionSelected(e.target.value === 'Zajistit dopravu')
    setIsDeliverySelected(e.target.value === 'Zajistit dopravu')
  }

  return (
        <div className='flex flex-col items-center text-black'>
            <div className='flex flex-row justify-center gap-10'>
                <label className='flex items-center'>
                    <input type="radio" value="Zajistit dopravu" name="radio-1" className='radio radio-success bg-white' onChange={handleRadioChange}/>
                    <span className='ml-2'>Zajistit dopravu</span>
                </label>
                <label className='flex items-center'>
                    <input type="radio" value="Osobní vyzvednutí" name="radio-1" className='radio radio-success bg-white' onChange={handleRadioChange}/>
                    <span className='ml-2'>Osobní vyzvednutí</span>
                </label>
            </div>

            {selectedOption === 'Zajistit dopravu' && (
                <p className="mt-4">Dřevo vozíme vlastním kontejnerem se sklápěním dozadu,  na auto naložíme 7 PRM, cena je 30Kč/1km (tam i zpět, minimálně však 400 Kč).</p>
            )}

            {selectedOption === 'Osobní vyzvednutí' && (
                <p className="mt-4">Adresu pro vzvednutí dřeva naleznete v <span className='text-green-500 font-bold'><Link href="/contact"> kontaktech</Link></span></p>
            )}
        </div>
  )
}
