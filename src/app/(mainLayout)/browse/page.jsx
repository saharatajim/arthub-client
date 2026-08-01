"use client";
import { useState, useEffect } from "react";
import ArtCard from "@/app/components/ArtCard";
import { getArtistArtwork, getArtistArtworkPublic } from "@/utilies/action";
import { useRouter, useSearchParams } from "next/navigation";
import { Pagination } from "@heroui/react";
import Link from "next/link";

export default function BrowseArtworkPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initial state from URL
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [sort, setSort] = useState(searchParams.get("sort") || "newest");
  const [artworks, setArtworks] = useState([]);
//newly added
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(6);


 useEffect(() => {
    const fetchData = async () => {
      const data = await getArtistArtworkPublic(
        search,
        category,
        minPrice,
        maxPrice,
        sort,      
        limit,
        page            
      );
      setArtworks(data?.result || []);
      setPage(data?.currentPage || 1);
      setLimit(data?.perPage || 6);
      setTotalPage(data?.totalPages || 0);
    };
    fetchData();
  }, [search, category, minPrice, maxPrice, sort, page, limit,  ]);

  // Update URL when filters change
  const updateURL = (newSearch, newCategory, newMin, newMax, newSort,newPage=1) => {
    const params = new URLSearchParams();
    if (newSearch) params.set("search", newSearch);
    if (newCategory) params.set("category", newCategory);
    if (newMin) params.set("minPrice", newMin);
    if (newMax) params.set("maxPrice", newMax);
    if (newSort) params.set("sort", newSort);
     params.set("page", newPage);

    const queryString = params.toString();
    router.push(`/browse${queryString ? `?${queryString}` : ""}`);
    setPage(newPage)
  };
  // Build pages array
  const pages = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(i);
  }

  // Filter + Sort Logic
  const filteredArtworks = artworks
    .filter(
      (art) =>
        art.title.toLowerCase().includes(search.toLowerCase()) ||
        art.artistMail.toLowerCase().includes(search.toLowerCase())
    )
    .filter((art) =>
      category ? art.category.toLowerCase() === category.toLowerCase() : true
    )
    .filter((art) => (minPrice ? art.price >= parseInt(minPrice) : true))
    .filter((art) => (maxPrice ? art.price <= parseInt(maxPrice) : true))
    .sort((a, b) => {
      if (sort === "low-high") return a.price - b.price;
      if (sort === "high-low") return b.price - a.price;
      return new Date(b.createdAt) - new Date(a.createdAt); // newest
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
        Browse Artworks
      </h2>

      {/* 🔍 Search & Filter Bar */}
      <div className="bg-gray-50 border rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Search by title or artist..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              updateURL(e.target.value, category, minPrice, maxPrice, sort);
            }}
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
          />

          {/* Category filter */}
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              updateURL(search, e.target.value, minPrice, maxPrice, sort);
            }}
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="">All Categories</option>
            <option value="Painting">Painting</option>
            <option value="Sculpture">Sculpture</option>
            <option value="Digital">Digital Art</option>
          </select>
          
          {/* Price range */}
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => {
                setMinPrice(e.target.value);
                updateURL(search, category, e.target.value, maxPrice, sort);
              }}
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => {
                setMaxPrice(e.target.value);
                updateURL(search, category, minPrice, e.target.value, sort);
              }}
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Sorting */}
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              updateURL(search, category, minPrice, maxPrice, e.target.value);
            }}
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="newest">Newest</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Render Filtered Artworks or Empty State */}
{filteredArtworks.length === 0 ? (
  <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-200 rounded-lg shadow-md p-10">
    <svg
      className="w-16 h-16 text-purple-400 mb-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 4v16m8-8H4" />
    </svg>
    <h2 className="text-xl font-semibold text-purple-600">
      No Artworks Found
    </h2>
    <p className="text-gray-600 mt-2">
      There are no artworks available right now.
    </p>
  </div>
) : (

  <div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {filteredArtworks.map((art, index) => (
      <ArtCard key={index} art={art} />
    ))}    
  </div>
  <Pagination size="sm" className="justify-center mt-6">
            <Pagination.Content>
              <Pagination.Item>
                <Pagination.Previous
                  isDisabled={page === 1}
                  onPress={() => updateURL(search, category, minPrice, maxPrice, sort, page - 1)}
                >
                  <Pagination.PreviousIcon /> Prev
                </Pagination.Previous>
              </Pagination.Item>

              {pages.map((p) => (
                <Pagination.Item key={p}>
                  <Pagination.Link
                    isActive={p === page}
                    className={p === page ? "bg-gray-200" : ""}
                    onPress={() => updateURL(search, category, minPrice, maxPrice, sort, p)}
                  >
                    {p}
                  </Pagination.Link>
                </Pagination.Item>
              ))}

              <Pagination.Item>
                <Pagination.Next
                  isDisabled={page === totalPage}
                  onPress={() => updateURL(search, category, minPrice, maxPrice, sort, page + 1)}
                >
                  Next <Pagination.NextIcon />
                </Pagination.Next>
              </Pagination.Item>
            </Pagination.Content>
  </Pagination>
  </div>

)}

    </div>
  );
}