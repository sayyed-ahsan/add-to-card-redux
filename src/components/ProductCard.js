import React from "react";
import { BiListPlus } from "react-icons/bi";

const ProductCard = ({ product, setProductInfo }) => {
  const { name, seller, price, ratings, img } = product;
  return (
    <div
      className='shadow-lg rounded-lg border relative  flex flex-col text-indigo-900'>

      <div className='mx-auto'>
        <img src={img} alt={name} className='h-56' />
      </div>
      <div className="px-2">
        <h1 className='font-bold mt-3'>{name}</h1>
        <p className="font-semibold">Seller: {seller}</p>
        <p className="font-semibold">Price: ${price}</p>
        <p className=' font-semibold mb-3'>Rating: {ratings}</p>

      </div>
      <div className='flex gap-2 right-2 absolute bottom-1'>
        <label onClick={() => setProductInfo(product)} htmlFor="bookingModal" className='bg-indigo-500 cursor-pointer rounded-lg py-1 px-2 flex-1 text-white text-bold'>
          Add to cart
        </label>
        <button
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded-lg'
        >
          <BiListPlus className='text-white' />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
