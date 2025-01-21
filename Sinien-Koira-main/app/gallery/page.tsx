'use client'
import NewNavbar from '../components/NewNavbar'
import GalleryPage from '../components/GalleryPage'
import NavbarAbove from '../components/NavbarAbove'

export default function Gallery (): JSX.Element {
  return (
    <div>

      <div className='hidden sm:block'>
        <NavbarAbove />
      </div>

      <NewNavbar />

      <GalleryPage />

    </div>

  )
}
