import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Listing() {
    const params = useParams()
    useEffect(() => {
        const fetchListings = async () => {
            const response = await fetch(`/api/listings/get/${params.listingId}`)
            const data = await response.json()
            if (data.success === false) {
                return;
            }
            console.log(data)   
        }
        fetchListings()
    }, [])

  return (
    <div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-center my-7">
          Listing Details
        </h1>
        <div className="flex flex-col gap-4 flex-1">
          <p className="font-semibold text-center">
            Upload images:
            <span className="font-normal text-gray-600 ml-2">
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className="flex gap-4 flex-wrap">
            <input
              onChange={(e) => setFiles(e.target.files)}
              className="p-3 border border-gray-300 rounded w-full"
              type="file"
              id="images"
              accept="images/*"
              multiple
            />
            <button
              type="button"
              onClick={handleImageSubmit}
              className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80"
            >
              Upload
            </button>
          </div>
          <p className="text-red-700 text-sm">
            {imageUploadError && imageUploadError}
          </p>
          {formData.imageUrls.length > 0 &&
            formData.imageUrls.map((url) => {
              <img
                src={url}
                alt="listing image"
                className="w-40 h-40 object-cover rounded-lg"
              />;
            })}
          <button disabled={loading || uploading} className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            {loading ? 'Creating...' : 'Create Listing'}
          </button>
          {error && <p className="text-red-700 text-sm">{error}</p>}
        </div>
        <p>{imageUploadError && imageUploadError}</p>
      </div>
    </div>
  )
}
