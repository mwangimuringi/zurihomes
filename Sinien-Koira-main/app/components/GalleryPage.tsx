import React from 'react'
import GalleryImages from './GalleryImages'

interface GalleryImage {
  id: number
  src: string
  alt: string
}

const images: GalleryImage[] = [
  { id: 1, src: 'images/woodG.jpg', alt: 'Dřevo na vlečce' },
  { id: 2, src: 'images/forest.jpg', alt: 'Práce v lese' },
  { id: 3, src: 'images/smallTree.jpg', alt: 'Lesní školka' },
  { id: 4, src: 'images/void.jpg', alt: 'Práce v lese' },
  { id: 5, src: 'images/fire.jpg', alt: 'Pálení dřeva' },
  { id: 6, src: 'images/mediumTree.jpg', alt: 'Popis obrázku 1' },
  { id: 7, src: 'images/fence.jpg', alt: 'Popis obrázku 1' },
  { id: 8, src: 'images/smallTrees.jpg', alt: 'Popis obrázku 1' },
  { id: 9, src: 'images/TruckWood.jpg', alt: 'Popis obrázku 1' },
  { id: 10, src: 'images/root.jpg', alt: 'Popis obrázku 1' },
  { id: 11, src: 'images/tractor.jpg', alt: 'Traktor' },
  { id: 12, src: 'images/tractor-2-new.jpg', alt: 'Traktor' }
]

export default function GalleryPage (): JSX.Element {
  return (
    <div className="bg-gray-50 items-center justify-center min-h-screen pb-40">
      <div className='mx-auto justify-center text-black items-center flex'>
          <h1 className="text-5xl mb-16 mt-12 mx-auto text-center font-semibold text-black w-full sm:w-[700px]">
            Galerie
          </h1>
      </div>

      <GalleryImages images={images} />
    </div>
  )
}
