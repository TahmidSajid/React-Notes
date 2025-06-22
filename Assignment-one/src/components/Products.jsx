import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  let productList = Array.from(products);
  return (
    <>
      <div className="products">
        {productList.map((e, index) => {
          return (
            <Product
              key={index}
              id={e.id}
              productTitle={e.title}
              productImage={e.image}
              productPrice={e.price}
              productRating={[e.rating]}
              ProductDes={e.description}
            ></Product>
          );
        })}
      </div>
    </>
  );
};

export default Products;
