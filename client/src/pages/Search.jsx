import React from "react";

export default function Search() {
  const [sidebardata, setSidebarData] = useState({
    searchTerm: "",
    type: "all",
    parking: false,
    furnished: false,
    offer: false,
    sort: "created_at",
    order: "desc",
  });
  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    setSidebarData({
      searchTerm: urlParams.get("searchTerm") || "",
      type: urlParams.get("type") || "all",
      parking: urlParams.get("parking") === "true",
      furnished: urlParams.get("furnished") === "true",
      offer: urlParams.get("offer") === "true",
      sort: urlParams.get("sort") || "created_at",
      order: urlParams.get("order") || "desc",
    });
    const fetchListings = async () => {
      setLoading(true);
      const searchQuery = new URLSearchParams(location.search).toString();
      const res = await fetch(`/api/listings?${searchQuery}`);
      const data = await res.json();
      setListings(data);
      setLoading(false);
    };
    fetchListings();
  }, [location.search]);

  const handleChange = (e) => {
    if (
      e.target.id === "all" ||
      e.target.id === "rent" ||
      e.target.id === "sale"
    ) {
      setSidebarData({
        ...sidebardata,
        type: e.target.id,
      });
    }

    if (e.target.id === "searchTerm") {
      setSidebarData({
        ...sidebardata,
        searchTerm: e.target.value,
      });
    }

    if (
      e.target.id === "parking" ||
      e.target.id === "furnished" ||
      e.target.id === "offer"
    ) {
      setSidebarData({
        ...sidebardata,
        [e.target.id]:
          e.target.checked || e.target.checked === "true" ? true : false,
      });
    }

    if (e.target.id === "sort_order") {
      const sort = e.target.value.split("_")[0] || "created_at";

      const order = e.target.value.split("_")[1] || "desc";
      setSidebarData({
        ...sidebardata,
        sort,
        order,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", sidebardata.searchTerm);
    urlParams.set("type", sidebardata.type);
    urlParams.set("parking", sidebardata.parking);
    urlParams.set("furnished", sidebardata.furnished);
    urlParams.set("offer", sidebardata.offer);
    urlParams.set("sort", sidebardata.sort);
    urlParams.set("order", sidebardata.order);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
  <form onSubmit={handleSubmit} className="flex flex-col gap-8">
    {/* Search Term */}
    <div className="flex items-center gap-2">
      <label className="whitespace-nowrap font-semibold">Search Term:</label>
      <input
        type="text"
        id="searchTerm"
        placeholder="Search..."
        className="border rounded-lg p-3 w-full"
        value={sidebardata.searchTerm}
        onChange={handleChange}
      />
    </div>

    {/* Type */}
    <div className="flex gap-2 flex-wrap items-center">
      <label className="font-semibold">Type:</label>
      {/* Checkboxes */}
    </div>

    {/* Sort */}
    <div className="flex items-center gap-2">
      <label className="font-semibold">Sort By:</label>
      <select onChange={handleChange} id="sort_order" defaultValue="created_at_desc">
        {/* Options */}
      </select>
    </div>

    {/* Submit */}
    <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
      Search
    </button>
  </form>
</div>

      <div className="">
        <h1 className="text-3xl font-semibold border-b p-3 text-slate-700 mt-5">
          Listing results:
        </h1>
      </div>
    </div>
  );
}