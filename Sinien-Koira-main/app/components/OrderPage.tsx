import OrderForm from './OrderForm'

export default function OrderPage (): JSX.Element {
  return (

        <div className="bg-gray-50 items-center justify-center min-h-screen pb-40">
            <div className='container mx-auto'>
                <div className='mx-auto justify-center text-black items-center flex'>
                        <h1 className="text-5xl mb-16 mt-12 mx-auto text-center font-semibold text-black w-full sm:w-[700px]">
                            Nezávazná objednávka
                        </h1>
                </div>
                <OrderForm />
            </div>
        </div>

  )
}
