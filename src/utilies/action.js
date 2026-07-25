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



export const addArtwork = async (artworkData) => {
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

export const getArtistArtwork=async(artistMail)=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/artwork?artistMail=${artistMail}`)

    return res.json()
}