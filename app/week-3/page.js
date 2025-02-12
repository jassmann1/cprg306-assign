// /app/week-3/page.js
import React from "react";
import ItemList from "./item-list";

const Page = () => {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
