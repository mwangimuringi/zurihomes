'use client'
import NewNavbar from '../components/NewNavbar'
import NavbarAbove from '../components/NavbarAbove'
import PrivacyPage from '../components/PrivacyPage'

export default function OurServices (): JSX.Element {
  return (
        <div>

            <div className='hidden sm:block'>
                <NavbarAbove />
            </div>

            <NewNavbar />

            <PrivacyPage />

        </div>

  )
}
