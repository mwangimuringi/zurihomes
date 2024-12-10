import React, { useEffect } from 'react'

export default function Listing() {
    useEffect(() => {
        const fetchListings = async () => {
            const response = await fetch(`/api/listings/get/${}`)
        }
        fetchListings()
    }, [])
  return (
    <div>
      
    </div>
  )
}
