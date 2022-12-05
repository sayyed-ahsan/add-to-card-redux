import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";
import { fetchProducts } from "../features/products/productSlice";

const TopRated = () => {

  const { isLoading, products, error } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  if (isLoading) {

    return <Spinner></Spinner>
  }

  if (error) {
    <Error></Error>
  }

  return (
    <div className='grid grid-cols-4 mx-auto my-10'>
      <div className="col-span-3">
        <h1 className="text-3xl font-semibold mb-2">Top Rated Products</h1><hr />
        <div className="mt-10 grid grid-cols-4 gap-4">
          {
            products.length > 0 ?
              products.filter(product => product.ratings === 5).map(product => <ProductCard key={product._id} product={product}></ProductCard>)
              :
              <></>
          }
        </div>
      </div>
    </div>
  );
};

export default TopRated;
