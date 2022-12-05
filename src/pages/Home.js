import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import { fetchProducts } from "../features/products/productSlice";
import CartModal from "../components/CartModal";
import { useContext } from "react";
import { AuthContext } from "../Context/UserContext";

const Home = () => {

  const {user} = useContext(AuthContext);
  const { isLoading, products, error } = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [productInfo, setProductInfo] = useState(null);
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
        <h1 className="text-3xl font-semibold mb-2">All Products</h1><hr />
        <div className="mt-10 grid grid-cols-4 gap-4">
          {
            products.length > 0 ?
              products.map(product => <ProductCard key={product._id} product={product} setProductInfo={setProductInfo}></ProductCard>)
              :
              <></>
          }
        </div>
        {
          productInfo && <CartModal productInfo={productInfo} setProductInfo={setProductInfo} user={user}></CartModal>
        }
      </div>
    </div>
  );
};

export default Home;
