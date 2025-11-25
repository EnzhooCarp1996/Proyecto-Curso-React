import { useAuthContext } from "../../../context/AuthContext/useAuthContext";
import { validateProduct } from "../../../utils/validateProduct";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { uploadToImgbb } from "../../../services/uploadImage";
import { createProduct } from "../../../services/products";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./ProductFormContainer.css";


export const ProductFormContainer = () => {
  const [loading, setLoading] = useState();
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });
  const { logout } = useAuthContext();
  const navigate = useNavigate;

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const newErrors = validateProduct({ ...product, file });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const imageUrl = await uploadToImgbb(file);
      const productData = {
        ...product,
        price: Number(product.price),
        imageUrl,
      };
      await createProduct(productData);
      alert("Producto cargado con exito");
      setProduct({
        name: "",
        price: "",
        category: "",
        description: "",
      });
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUI
      product={product}
      errors={errors}
      loading={loading}
      onChange={handleChange}
      onFileChange={setFile}
      onSubmit={handleSubmit}
      onLogout={handleLogout}
    />
  );
};
