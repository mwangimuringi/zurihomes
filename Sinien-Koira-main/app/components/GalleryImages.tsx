/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { motion } from 'framer-motion'

interface GalleryImage {
  id: number
  src: string
  alt: string
}

interface GalleryImagesProps {
  images: GalleryImage[]
}

const GalleryImages: React.FC<GalleryImagesProps> = ({ images }) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null)

  const handleOpen = (src: string): any => {
    setSelectedImg(src)
  }

  const handleClose = (): any => {
    setSelectedImg(null)
  }

  return (
    <div className="grid grid-cols-1 pb-10 min-h-screen w-max mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative overflow-hidden shadow-xl rounded-lg cursor-pointer hover:shadow-2xl transition duration-500 w-80 h-80 sm:w-96 sm:h-96"
          onClick={() => { handleOpen(image.src) }}
        >
          <img
            className="absolute inset-0 object-cover object-center w-full h-full"
            src={image.src}
            alt={image.alt}
            loading="lazy"
          />

        </div>
      ))}

      {(selectedImg != null) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={handleClose}
        >
          <div className="m-4 rounded-xl max-w-screen-md max-h-screen-md overflow-hidden">
            <motion.img
              loading='lazy'
              initial={{ y: '-100vh' }}
              animate={{ y: 0 }}
              exit={{ y: '100vh' }}
              src={selectedImg}
              className="h-auto w-auto object-contain"
              alt="Enlarged pic"
            />
          </div>

          <motion.div
            className="absolute top-4 right-4 cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={(e) => {
              e.stopPropagation()
              handleClose()
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default GalleryImages
