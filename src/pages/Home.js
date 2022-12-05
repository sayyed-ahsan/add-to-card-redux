import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import { fetchProducts } from "../features/products/productSlice";

const Home = () => {

  const { isLoading, products, error } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  if (isLoading) {
    
    return <Spinner></Spinner>
  }
  
  if(error){
    <Error></Error>
  }
  return (
    <div className='grid grid-cols-4 mx-auto my-10'>
      <div className="col-span-3">
        {/* <h1>All Products : {products.length}</h1> */}
        <div className="mt-10 grid grid-cols-4 gap-4">
          {
            products.length > 0 ?
              products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
              :
              <></>
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
