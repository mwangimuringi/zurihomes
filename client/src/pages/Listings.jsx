import React, { useEffect } from 'react'

export default function Listing() {
    useEffect(() => {
        const fetchListings = async () => {
            const response = await fetch('/api/listings')
            const data = await response.json()
            console.log(data)
        }
        fetchListings()
    }, [])
  return (
    <div>
      
    </div>
  )
}
