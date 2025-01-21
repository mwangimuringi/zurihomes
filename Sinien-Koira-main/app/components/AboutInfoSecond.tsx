/* eslint-disable @next/next/no-img-element */

export default function AboutInfoSecond (): JSX.Element {
  return (
        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-12 pb-20 items-center justify-items-center px-4 md:px-0 max-w-max">

            <div className="md:order-2 max-w-[450px]">
                <p className='font-bold text-black text-3xl pb-5 text-left'><strong>Nabízíme komplexní služby v oblasti lesnictví, včetně těžby dřeva a prodeje palivového dřeva</strong></p>
                <p className="text-lg text-black">
                    Naše týmy se skládají z kvalifikovaných odborníků s bohatými zkušenostmi v oblasti lesnictví. Pro dosažení optimálních výsledků pečlivě vybíráme nejefektivnější techniky a postupy. Jsme hrdí na naši ekologickou odpovědnost a dodržujeme přísné normy a předpisy týkající se ochrany životního prostředí a udržitelného využívání přírodních zdrojů. Součástí naší práce je také aktivní účast na programu obnovy lesů a podpora projektů zaměřených na ochranu biodiverzity.
                </p>
            </div>

            <div className="md:order-1 h-[370px] max-w-[500px] sm:h-[370px]">
                <img width={900} height={370} className="w-full h-full object-cover rounded-xl" src="images/work.jpg" alt="Work" />
            </div>

        </div>
  )
}
