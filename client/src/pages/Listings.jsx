import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Listing() {
    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const params = useParams()
    useEffect(() => {
        const fetchListings = async () => {
            try {
                setLoading(true)
                const response = await fetch(`/api/listings/get/${params.listingId}`)
                const data = await response.json()
                if (data.success === false) {
                    setError(true)
                    setLoading(false)
                    return;
                }
                setListing(data)
            } catch (error) {
                setError(true);
            }
        }
        fetchListings()
    }, [])
  return (
    <div>
      
    </div>
  )
}
