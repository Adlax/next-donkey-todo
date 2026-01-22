"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams();
  const todoId = searchParams.get("id");
  return <div>{todoId}</div>;
};

export default page;
