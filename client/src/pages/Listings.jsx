import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Listing() {
    const params = useParams()
    useEffect(() => {
        const fetchListings = async () => {
            const response = await fetch(`/api/listings/get/${params.listingId}`)
        }
        fetchListings()
    }, [])
  return (
    <div>
      
    </div>
  )
}
