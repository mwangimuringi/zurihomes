import { useState, useEffect } from 'react'

export default function useWindowSize (): any {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined
  }>({
    width: undefined
  })

  useEffect(() => {
    function handleResize (): any {
      setWindowSize({
        width: window.innerWidth
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  return windowSize
}
