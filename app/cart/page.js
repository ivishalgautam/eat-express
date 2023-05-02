"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartRecipes } from "../store/features/cartSlice";

const CartPage = () => {
  const { cartRecipes, isLoading } = useSelector((store) => store.cart);
  // console.log(cartRecipes);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartRecipes());
  }, []);

  return (
    <div className="h-full px-4 sm:px-14 md:px-20 lg:px-24 text-gray-950 dark:text-gray-100 bg-light dark:bg-gray-dark tracking-wider">
      {isLoading ? (
        <div>loading cart items..</div>
      ) : cartRecipes[0]?.length <= 0 ? (
        <div>Your cart is empty</div>
      ) : (
        cartRecipes[0]?.map((recipe) => {
          return <div key={recipe.id}>{recipe.title}</div>;
        })
      )}
    </div>
  );
};

export default CartPage;
