import AboutInfo from './AboutInfo'
import AboutInfoSecond from './AboutInfoSecond'
import AboutInfoThird from './AboutInfoThird'

export default function AboutPage (): JSX.Element {
  return (
    <section className="bg-white items-center justify-center min-h-screen py-20" id="about-section">

      <div className='mx-auto text-black items-left px-4 md:px-0'>
          <h1 className="text-5xl mb-16 mt-12 border-b-2 border-gray-200 pb-5 sm:text-6xl mx-auto text-left md:text-center font-bold text-black w-full sm:w-[700px]">
            O nás
          </h1>
      </div>

      <div>

          <AboutInfo />

          <AboutInfoSecond />

          <AboutInfoThird />

      </div>

    </section>
  )
}
