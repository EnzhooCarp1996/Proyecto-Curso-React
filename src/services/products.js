const BASE_URL = "https://6900bc3cff8d792314bb3836.mockapi.io/products";

export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  return handleResponse(res, "No se pudo crear el producto");
};

//listar todos los productos o por categoria
export const getProducts = async (category) => {
  const url = category
    ? `${BASE_URL}?category=${category}`
    : BASE_URL;

  const res = await fetch(url);
  return handleResponse(res, "Error al listar productos");
};


//Traer por Id
export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return handleResponse(res, "Error al obtener el producto");
};

const handleResponse = async (res, errorMessage) => {
  if (!res.ok) {
    throw new Error(errorMessage);
    console.log(errorMessage);
  }
  return await res.json();
};