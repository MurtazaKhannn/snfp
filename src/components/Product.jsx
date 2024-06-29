import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import TopLayerProduct from "./TopLayerProduct";
import { HContext } from "../utils/HomeContext";
import ProductDisplay from "./ProductDisplay";
import Footer from "./Footer";
import Description from "./Description";
import RelatedProducts from "./RelatedProducts";

const Product = () => {
  const { all_Products } = useContext(HContext);
  const { id } = useParams();
  const product = all_Products.find((e) => e.id === Number(id));

  // Conditional rendering if product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <TopLayerProduct product={product} />
      <ProductDisplay product={product} />
      <Description product={product} />
      <RelatedProducts category={product.category} />
      <Footer />
    </div>
  );
};

export default Product;
