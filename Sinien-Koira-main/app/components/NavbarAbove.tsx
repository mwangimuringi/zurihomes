import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'

export default function NavbarAbove (): JSX.Element {
  return (
        <div className="flex items-center bg-gray-800 h-12 justify-center md:justify-end lg:px-32 md:px-14 px-8"
            style={{
              background: 'radial-gradient(circle at -1% 57.5%, rgb(19, 170, 82) 0%, rgb(0, 102, 43) 90%)'
            }}>
            <div className="">
                <ul className="flex justify-between gap-5 text-white font-bold text-sm">
                    <a href="mailto:sinienkoira@gmail.com">
                        <li className="flex items-center hover:text-black">
                            <HiOutlineMail className="mr-2" size={24} />
                            <p>sinienkoira@gmail.com</p>
                        </li>
                    </a>
                    <a href="tel:720062090">
                        <li className="flex items-center hover:text-black">
                            <HiOutlinePhone className="mr-2 " size={24} />
                            <p>+420 720 062 090</p>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
  )
}
