import ContactInfo from './ContactInfo'
import ContactMap from './ContactMap'

export default function ContactPage (): JSX.Element {
  return (

        <div className="bg-gray-50 items-center justify-center min-h-screen pb-40">
            <div className='container mx-auto '>

                <div className='mx-auto justify-center text-black items-center flex'>
                    <h1 className="text-5xl mb-8 mt-12 mx-auto text-center font-semibold text-black w-full sm:w-[700px]">
                           Kontakt
                    </h1>
                </div>

                <h2 className='text-xl text-black mx-auto text-center font-bold mb-10 w-64 sm:w-max'>Pro nezávaznou cenovou kalkulaci nás neváhejte kontaktovat.</h2>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
                    <div className='flex flex-col gap-5'>
                      <ContactInfo />
                    </div>
                    <div className='flex flex-col gap-5'>
                      <ContactMap />
                    </div>
                </div>

            </div>
        </div>

  )
}
