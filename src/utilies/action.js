"use server"

// ✅ Organization
export const addOrganization = async (organizationData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/organization`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(organizationData),
      cache: "no-store"
    });

    if (!res.ok) throw new Error(`Failed to add organization: ${res.statusText}`);
    return res.json();
  } catch (error) {
    console.error("Error adding organization:", error);
    throw error;
  }
};

export const getArtistOrganization = async (artistMail) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/organization?artistMail=${artistMail}`, {
    cache: "no-store"
  });
  return res.json();
};

export const updateOrganization = async (artistMail, organizationData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/organization?artistMail=${artistMail}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(organizationData),
      cache: "no-store"
    });

    if (!res.ok) throw new Error(`Failed to update organization: ${res.statusText}`);
    return res.json();
  } catch (error) {
    console.error("Error updating organization:", error);
    throw error;
  }
};



// ✅ Artwork
export const getArtistArtwork = async (
  search = "", category = "", minPrice = "", maxPrice = "", sort = "newest", artistMail = "", companyId = ""
) => {
  const params = new URLSearchParams();
  if (search) params.append("search", search);
  if (category) params.append("category", category);
  if (minPrice) params.append("minPrice", minPrice);
  if (maxPrice) params.append("maxPrice", maxPrice);
  if (sort) params.append("sort", sort);
  if (artistMail) params.append("artistMail", artistMail);
  if (companyId) params.append("companyId", companyId);

  const url = `${process.env.NEXT_PUBLIC_SERVER}/artwork${params.toString() ? `?${params.toString()}` : ""}`;
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
};

export const getOnlyArtistArtwork = async (artistMail) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/artwork?artistMail=${artistMail}`, { cache: "no-store" });
  return res.json();
};

//for public
export const getArtistArtworkPublic = async (
  search = "",
  category = "",
  minPrice = "",
  maxPrice = "",
  sort = "newest",
  limit = 6,
  page = 1
) => {
  const params = new URLSearchParams();

  if (search) params.append("search", search);
  if (category) params.append("category", category);
  if (minPrice) params.append("minPrice", minPrice);
  if (maxPrice) params.append("maxPrice", maxPrice);
  if (sort) params.append("sort", sort);

  // Pagination params
  params.append("limit", limit);
  params.append("page", page);

  const url = `${process.env.NEXT_PUBLIC_SERVER}/artwork/public${params.toString() ? `?${params.toString()}` : ""}`;
  
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`Failed to fetch artwork: ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching artist artwork:", error);
    return null;
  }
};


export const getArtworkDetails = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/artwork/${id}`, { cache: "no-store" });
  return res.json();
};

export const deleteArt = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/artwork/${id}`, {
    method: "DELETE",
    cache: "no-store"
  });
  return res.json(); 
};

export const updateArtwork = async (id, modifiedData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/artwork/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(modifiedData),
    cache: "no-store"
  });
  return res.json(); 
};

export const addArtworkToDb = async (artworkData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/artwork`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(artworkData),
      cache: "no-store"
    });

    if (!res.ok) throw new Error(`Failed to add Artwork: ${res.statusText}`);
    return res.json();
  } catch (error) {
    console.error("Error adding Artwork:", error);
    throw error;
  }
};



// ✅ Purchases
export const getBuyerPurchases = async (buyerMail) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/purchases?buyerMail=${buyerMail}`, { cache: "no-store" });
  return res.json();
};

export const getSellerPurchases = async (sellerMail) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/purchases?sellerMail=${sellerMail}`, { cache: "no-store" });
  return res.json();
};

export const getPurchases = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/purchases`, { cache: "no-store" });
  return res.json();
};



// ✅ Subscriptions
export const premiumSub = async (subdata) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/pre-sub`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(subdata),
    cache: "no-store"
  });
  return res.json();
};

export const ProSub = async (subdata) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/pro-sub`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(subdata),
    cache: "no-store"
  });
  return res.json();
};

export const getPremiumSubs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/pre-sub`, { method: "GET", cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch Premium subscriptions");
  return res.json();
};

export const getProSubs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/pro-sub`, { method: "GET", cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch Pro subscriptions");
  return res.json();
};



// ✅ Users
export const getUsersData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/users`, { cache: "no-store" });
  return res.json();
};

export async function updateUserRole(userId, role) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/users/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ role }),
    cache: "no-store"
  });

  if (!res.ok) throw new Error("Failed to update role");
  return res.json();
}
