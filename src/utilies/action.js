"use server"

export const addOrganization = async (organizationData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/organization`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(organizationData),
    });

    if (!res.ok) {
      throw new Error(`Failed to add organization: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error adding organization:", error);
    throw error; 
  }
};


export const getArtistOrganization=async(artistMail)=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/organization?artistMail=${artistMail}`)

    return res.json()
}

export const updateOrganization = async (artistMail, organizationData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/organization?artistMail=${artistMail}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(organizationData),
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to update organization: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error updating organization:", error);
    throw error;
  }
};




export const getArtistArtwork=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/artwork`)

    return res.json()
}
export const getArtworkDetails=async(id)=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/artwork/${id}`)

    return res.json()
}
export const deleteArt=async(id)=>{
const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/artwork/${id}`, {
  method: "DELETE" 
})
const data = await res.json()


}
export const updateArtwork=async(id,modifiedData)=>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/artwork/${id}`, {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(modifiedData)
})
const data = await res.json()


}

export const addArtworkToDb = async (artworkData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/artwork`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(artworkData),
    });

    if (!res.ok) {
      throw new Error(`Failed to add Artwork: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error adding Artwork:", error);
    throw error; 
  }
};



export const getBuyerPurchases = async (buyerMail) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/purchases?buyerMail=${buyerMail}`);
  return res.json();
};

export const getSellerPurchases = async (sellerMail) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/purchases?sellerMail=${sellerMail}`);
  return res.json();
};
export const getPurchases = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/purchases`);
  return res.json();
};

export const premiumSub=async(subdata)=>{
  //  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/pre-sub`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subdata),
    });
     const result = await res.json();
     return result

  //   if (!res.ok) {
  //     throw new Error(`Failed to add subscription data: ${res.statusText}`);
  //   }

  //   const result = await res.json();
  //   return result;
  // } catch (error) {
  //   console.error("Error adding subscription data:", error);
  //   throw error; 
  // }

}