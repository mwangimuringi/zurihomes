import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Listing() {
    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const params = useParams()
    useEffect(() => {
        const fetchListings = async () => {
            const response = await fetch(`/api/listings/get/${params.listingId}`)
            const data = await response.json()
            if (data.success === false) {
                return;
            }
            setListing(data)
        }
        fetchListings()
    }, [])
  return (
    <div>
      
    </div>
  )
}
