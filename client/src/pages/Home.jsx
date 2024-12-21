import React from 'react'

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        setShowMore(false); // Reset showMore when a new search is performed
  
        const urlParams = new URLSearchParams(location.search);
        const res = await fetch(`/api/listing/get?${urlParams.toString()}`);
  
        if (!res.ok) {
          throw new Error(`Failed to fetch listings: ${res.statusText}`);
        }
  
        const data = await res.json();
        if (data.length > 8) {
          setShowMore(true); // Enable "Show More" if more than 8 results
        }
        setListings(data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchListings();
  }, [location.search]);
  return (
    <div>
      Home
    </div>
  )
}
