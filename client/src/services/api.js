const BASE_URL = import.meta.env.VITE_API_URL;

async function fetchApi(
  endpoint,
  { method = "GET", body = null, headers = {}, token = null } = {},
) {

  console.log("running")

  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, config);


  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

export default fetchApi;
