"use client";
import { useRouter } from "next/navigation";
import React from "react";

const RecipePage = () => {
  let router = useRouter();
  // let { slug } = router.query;
  console.log(router);

  return <div>RecipePage:</div>;
};

export default RecipePage;
