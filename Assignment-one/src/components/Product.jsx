import React from 'react';

const Product = ({Id,productTitle,productImage,productPrice,productRating,ProductDes}) => {
  console.log(JSON.stringify(productRating));
  return (
      <article className="product" key={Id}>
      <img src={productImage} alt="" />
      <div className="product__details">
        <h4 className="product__title">{productTitle}</h4>
        <p className='product__rating'>Price: $ {productPrice}</p>
        {productRating.map((x,index)=>{
          return(
            <p className='product__rating' key={index}>Rating: {x.rate}/5</p>
          )
        }) }
        <p className="product__desc">Description: {ProductDes}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
