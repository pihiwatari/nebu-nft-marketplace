const API =
  "https://api.opensea.io/api/v1/assets?owner=0x68684530991d9d376970a905fa5b7054c5059368&order_direction=desc&offset=0&limit=20";

const getNebus = async (id) => {
  const apiUrl = id ? `${API}${id}` : API;
  try {
    const data = await fetch(apiUrl, { method: "GET" });
    const response = await data.json();
    return response.assets;
  } catch (err) {
    console.log("Fetch Error: ", err);
  }
};

export default getNebus;
