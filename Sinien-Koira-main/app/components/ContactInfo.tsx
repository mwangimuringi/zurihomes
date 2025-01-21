export default function ContactInfo (): JSX.Element {
  return (
        <div className='flex flex-col gap-5 text-black'>
            <div className="card w-[350px] sm:w-[400px] shadow-xl bg-white">
                <div className="card-body">
                    <h2 className="card-title text-green-600 uppercase">Kontakt</h2>
                    <p><span className='font-semibold'>Mobil:</span> <a href="tel:720062090">+420 720 062 090</a></p>
                    <p><span className='font-semibold'>E-mail:</span> <a href="mailto:sinienkoira@gmail.com">sinienkoira@gmail.com</a></p>
                </div>
            </div>

            <div className="card w-[350px] sm:w-[400px] shadow-xl bg-white">
                <div className="card-body">
                    <h2 className="card-title text-green-600 uppercase">Sinien Koira s. r. o.</h2>
                    <h3 className='card-title py-1'>Výdej dřeva:</h3>
                    <p>Pod Kosířem 333</p>
                    <p>798 16 Čelechovice na Hané</p>
                    <p><span className='font-semibold'>IČ:</span> 11980389</p>
                    <h3 className='card-title py-1'>Fakturační adresa:</h3>
                    <p>Jaurisova 515/4</p>
                    <p>140 00 Praha 4</p>
                    <p><span className='font-semibold'>IČ:</span> 11980389</p>
                    <p><span className='font-semibold'>DIČ:</span> CZ11980389</p>
                </div>
            </div>

        </div>
  )
}
